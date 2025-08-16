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
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'd2aiooruibrs73ag9ij0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'akash',
      password: 'JTw6EW0mMKFUlI3cLdA03pabMHCH5RN3',
      database: 'spotify_83os',
      entities: [User, Recentplay, Song, BannerSong, Tracks, Playlist],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false, 
      },
    }),
    UsersModule,
    SongsModule,
    SeedModule,
    CloudModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
