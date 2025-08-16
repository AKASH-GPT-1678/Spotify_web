import { userInfo } from "os";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { User } from "../user.entity";

@Entity()
export class Recentplay {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    publicUrl: string;

    @Column()
    name: string;

    @Column()
    singer: string;

    @Column()
    actors: string;

    @Column()
    artistImg: string;

    @Column()
    monthlyLis: number;

    @Column()
    description: string;

    @Column("text", { array: true })
    credits: string[];



    @ManyToOne(() => User, user => user.recentplay)
    user: User;





}


@Entity()
export class BannerSong {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    publicurl: string

    @Column()
    name: string

    @Column()
    type: string

    @Column()
    singer: string

    @Column({ nullable: true })
    minidescrip?: string

}


@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    name: string;

    @Column({ length: 255 })
    url : string;

    @Column({ length: 200 })
    subtitle: string;

    @Column({ length: 200 })
    image_url: string;

    @Column({length : 50})
    section: string;

    @OneToMany(() => Tracks, (track) => track.playlist)
    tracks: Tracks[];
}

@Entity()
export class Tracks {
    @PrimaryGeneratedColumn()
    track_id: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 100 })
    song_id: string;

    @ManyToOne(() => Playlist, (playlist) => playlist.tracks)
    playlist: Playlist;
}


