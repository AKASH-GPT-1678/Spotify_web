import { Body, Controller, Post, Get, Param, Query } from '@nestjs/common';
import { SongsService } from './songs.service';
import { Song } from './Songs';
import { Tracks } from './recentplay';
@Controller('songs')
export class SongsController {
    constructor(
        private readonly Songs: SongsService

    ) { }


    @Post('generate')
    async createsong(@Body() Data: Song) {
        return this.Songs.createsongs(Data)

    }

    @Get('/banner')
    async gellallvanner() {
        return this.Songs.bannerall()
    }

    @Post('gentrack')
    async genratetrack(@Body() data: Tracks) {
        return this.Songs.addsong(data)

    }

    @Get('song')
    async gemysong(@Query('name') name: string) {
        return this.Songs.getsong(name)


    }

    @Get('playlist')
    async getplaylist(@Query('name') name: string) {
        return this.Songs.getbyplaylist(name);
    }

    @Get('getplaylist')
    async getplaylist1(@Query('name') name: string) {
        return this.Songs.getplaylist(name);
    }


    @Get('image')
    async getimages(@Query('section') section: string) {
        return this.Songs.getsongimg(section);
    }


    @Get('allsongs')
    async getallsong(@Query('section') section: string) {
        console.log(section)
        return this.Songs.getallsongs(section)
    }
}
