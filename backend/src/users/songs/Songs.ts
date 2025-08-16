import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Song {
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
}
