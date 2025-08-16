import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { BannerSong } from './songs/recentplay';
@Module({
 imports : [TypeOrmModule.forFeature([User, BannerSong])],
  providers: [UsersService ],
  controllers: [UsersController]
})
export class UsersModule {}
