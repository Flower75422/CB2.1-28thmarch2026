import { Controller, Get, Post, Body } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  getAllCards() {
    return this.cardsService.findAll();
  }

  @Get('seed')
  seed() {
    return this.cardsService.createDummy();
  }

  @Post()
  async createCard(@Body() body: { title: string; description: string; type: string }) {
    // 1. Get the Demo User first
    const user = await this.cardsService.getDemoUser();
    
    // 2. Create the card using that user's ID
    return this.cardsService.create({
      title: body.title,
      description: body.description,
      type: body.type || 'text',
      userId: user.id 
    });
  }
}