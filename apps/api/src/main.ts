import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Enable CORS so your Frontend (localhost:3000) can talk to this Backend
  app.enableCors({
    origin: 'http://localhost:3000', // Allow your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 2. Enable Global Validation (checks if data sent is correct)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // 3. Start listening on port 3001 (Since frontend is 3000)
  await app.listen(3001);
  console.log(`🚀 Cobucket Backend is running on: http://localhost:3001`);
}
bootstrap();