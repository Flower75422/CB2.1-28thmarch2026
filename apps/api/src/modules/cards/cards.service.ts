import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) {}

  // 1. Get All Cards
  async findAll() {
    return this.prisma.card.findMany({
      include: { author: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  // 2. Helper: Get or Create the Demo User
  async getDemoUser() {
    let user = await this.prisma.user.findFirst();
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email: "demo@cobucket.com",
          username: "demo_user",
          name: "Demo User",
          bio: "I love coding!",
        }
      });
    }
    return user;
  }

  // 3. Create a Dummy Card (using the helper)
  async createDummy() {
    const user = await this.getDemoUser();
    
    return this.prisma.card.create({
      data: {
        title: "My First Project",
        description: "Built this using Next.js and NestJS!",
        type: "text",
        authorId: user.id
      }
    });
  }

  // 4. Create a Real Card
  async create(data: { title: string; description: string; type: string; userId: string }) {
    return this.prisma.card.create({
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        authorId: data.userId,
      },
    });
  }
}