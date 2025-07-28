import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';
import { SeedModule } from './seed/seed.module';
import { SeedCommand } from './seed/seed.command';
async function bootstrap() {
  // await CommandFactory.run(SeedCommand);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3500);
}
bootstrap();
