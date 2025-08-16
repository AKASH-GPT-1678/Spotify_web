import { Module } from '@nestjs/common';
import { SeedCommand } from './seed.command';
import { SeedingService } from './seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerSong } from 'src/users/songs/recentplay';
import { SeedController } from './seed.controller';
@Module({
    imports: [TypeOrmModule.forFeature([BannerSong])],


    providers : [SeedCommand , SeedingService],


    controllers: [SeedController]
})

export class SeedModule{}
