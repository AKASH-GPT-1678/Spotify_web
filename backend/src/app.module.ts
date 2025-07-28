import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from 'users/users.module';
import { User } from 'users/user.entity';
import { SongsModule } from '../users/songs/songs.module';
import { BannerSong, Playlist, Recentplay, Tracks } from 'users/songs/recentplay';
import { Song } from 'users/songs/Songs';
import { SeedCommand } from 'src/seed/seed.command';

import { SeedModule } from './seed/seed.module';
import { CloudModule } from './cloud/cloud.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'guptapc123',
    database: 'Pharma',
    entities: [User, Recentplay, Song, BannerSong, Tracks , Playlist],
    synchronize: true

  }), UsersModule, SongsModule, SeedModule, CloudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
