import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './Songs';
import { Repository } from 'typeorm';
import { Tracks } from './recentplay';
import { Recentplay } from './recentplay';
import { BannerSong } from './recentplay';
import { Playlist } from './recentplay';
import { ILike } from 'typeorm';
@Injectable()
export class SongsService {
    constructor(
        @InjectRepository(Song)
        private readonly Songrepo: Repository<Song>,


        @InjectRepository(BannerSong)
        private readonly Banners: Repository<BannerSong>,

        @InjectRepository(Tracks)
        private readonly Track: Repository<Tracks>,


        @InjectRepository(Recentplay)
        private readonly Reentplay: Repository<Recentplay>,

        @InjectRepository(Playlist)
        private readonly Playlist: Repository<Playlist>,
    ) { }


    async createsongs(Data: Song) {
        const song = await this.Songrepo.create(Data)
        return this.Songrepo.save(song)


    }

    async createrecent() { }


    async bannerall() {
        const data = await this.Banners.find();
        return { sucess: true, sandesh: "Teri gaand mai karu api call", data };

    }


    async addsong(@Body() data: Tracks) {
        const gaane = await this.Track.create(data)
        return this.Track.save(gaane);

    }

    async getsong(name: string) {
        const game = await this.Track.findOneBy({
            name: name



        });

        return game;
    }



    async getbyplaylist(name: string) {
        const alltracks = await this.Track.find({
            where: {
                playlist: {
                    name: name
                }
            }
        });

        return alltracks

    }


    async getplaylist(name: string) {
        const allplaylist = await this.Playlist.find({
            where: {
                name: name
            }
        });
        return allplaylist
    }


    async getsongimg(section: string) {
        const songs = await this.Playlist.find({
            select: ['image_url', 'subtitle', 'name'],
            where: {
                section: ILike(section)


            },
            take: 8


        });
        return songs;

    }


    async getallsongs(section: string) {
        const songs = await this.Playlist.find({
            where: {
                section: ILike(section)
            }
        });
        
        console.log(songs);

        return songs;

    }
}