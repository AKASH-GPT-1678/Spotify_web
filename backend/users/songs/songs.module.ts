import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'users/user.entity';
import { Playlist, Recentplay, Tracks } from './recentplay';
import { Song } from './Songs';
import { BannerSong } from './recentplay';
@Module({


    imports: [TypeOrmModule.forFeature([User, Recentplay , Song , BannerSong , Tracks , Playlist])], controllers: [SongsController], providers: [SongsService]
})
export class SongsModule {

}
