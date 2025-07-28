import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Recentplay } from "./songs/recentplay";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    // Add your user fields here
    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @OneToMany(() => Recentplay, recent => recent.user)
    recentplay: Recentplay[];




}