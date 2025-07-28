
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { BannerSong } from "users/songs/recentplay";

const Deardata = [
    {
        "id": 1,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2FChamak.mp4",
        "name": "Chamak",
        "type": "Bollywood",
        "singer": "Arijit Singh",
        "minidescrip": "A vibrant and energetic Bollywood track."
    },
    {
        "id": 2,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2FGhungroo.mp4",
        "name": "Ghungroo",
        "type": "Pop",
        "singer": "Vishal-Shekhar ft. Arijit Singh",
        "minidescrip": "A catchy and upbeat pop song."
    },
    {
        "id": 3,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2FImportant.mp4",
        "name": "Important",
        "type": "Rap",
        "singer": "DIVINE",
        "minidescrip": "A powerful rap track with deep lyrics."
    },
    {
        "id": 4,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2FJholi.mp4",
        "name": "Jholi",
        "type": "Devotional",
        "singer": "Sabri Brothers",
        "minidescrip": "A heartfelt qawwali with spiritual vibes."
    },
    {
        "id": 5,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2FLehenga.mp4",
        "name": "Lehenga",
        "type": "Punjabi",
        "singer": "Jass Manak",
        "minidescrip": "A popular Punjabi party anthem."
    },
    {
        "id": 6,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2FMasakali.mp4",
        "name": "Masakali",
        "type": "Romantic",
        "singer": "Mohit Chauhan",
        "minidescrip": "A light and playful romantic melody."
    },
    {
        "id": 7,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2FSaddahaq.mp4",
        "name": "Sadda Haq",
        "type": "Rock",
        "singer": "Mohit Chauhan",
        "minidescrip": "A rebellious rock anthem."
    },
    {
        "id": 8,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2FVaste.mp4",
        "name": "Vaste",
        "type": "Indie Pop",
        "singer": "Dhvani Bhanushali",
        "minidescrip": "A soulful indie pop love song."
    },
    {
        "id": 9,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2Fdilbar.mp4",
        "name": "Dilbar",
        "type": "Dance",
        "singer": "Neha Kakkar",
        "minidescrip": "A groovy dance number with Arabic influences."
    },
    {
        "id": 10,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2Ftumhiho.mp4",
        "name": "Tum Hi Ho",
        "type": "Romantic",
        "singer": "Arijit Singh",
        "minidescrip": "An emotional and heartfelt love song."
    },
    {
        "id": 11,
        "publicurl": "https://storage.googleapis.com/smart_city_123/Banner%2Fvideoplayback.mp4",
        "name": "Unknown Track",
        "type": "Instrumental",
        "singer": "Unknown Artist",
        "minidescrip": "An instrumental melody with relaxing vibes."
    }
]

@Injectable()
export class SeedingService {

    constructor(
        @InjectRepository(BannerSong)
        private Seeding: Repository<BannerSong>
    ) { }



    async seeddata() {
        for (const data of Deardata) {
            const user = this.Seeding.create(data);
            await this.Seeding.save(user);
        }

        console.log('Users seeded successfully');
    }


  
}

// {
//     "Chamak.mp4": "https://storage.googleapis.com/smart_city_123/Banner/Chamak.mp4",
//     "Ghungroo.mp4": "https://storage.googleapis.com/smart_city_123/Banner/Ghungroo.mp4",
//     "Important.mp4": "https://storage.googleapis.com/smart_city_123/Banner/Important.mp4",
//     "Jholi.mp4": "https://storage.googleapis.com/smart_city_123/Banner/Jholi.mp4",
//     "Lehenga.mp4": "https://storage.googleapis.com/smart_city_123/Banner/Lehenga.mp4",
//     "Masakali.mp4": "https://storage.googleapis.com/smart_city_123/Banner/Masakali.mp4",
//     "Saddahaq.mp4": "https://storage.googleapis.com/smart_city_123/Banner/Saddahaq.mp4",
//     "Vaste.mp4": "https://storage.googleapis.com/smart_city_123/Banner/Vaste.mp4",
//     "dilbar.mp4": "https://storage.googleapis.com/smart_city_123/Banner/dilbar.mp4",
//     "tumhiho.mp4": "https://storage.googleapis.com/smart_city_123/Banner/tumhiho.mp4",
//     "videoplayback.mp4": "https://storage.googleapis.com/smart_city_123/Banner/videoplayback.mp4"
//   }