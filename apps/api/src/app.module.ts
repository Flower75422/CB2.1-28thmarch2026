import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CardsModule } from './modules/cards/cards.module'; // 👈 Check this path!

@Module({
  imports: [
    PrismaModule,
    CardsModule, // 👈 This MUST be here or /cards won't work
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}