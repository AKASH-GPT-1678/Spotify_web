import { Injectable } from '@nestjs/common';
import { SeedingService } from './seed.service';
import { run } from 'node:test';

@Injectable()
export class SeedCommand {
  constructor(private readonly seedService: SeedingService) {}

  async run(): Promise<void> {
    try {
      await this.seedService.seeddata();
      console.log('Database seeding completed successfully');
    } catch (error) {
      console.error('Database seeding failed:', error);
    }
    process.exit(0);
  }
}


run();
