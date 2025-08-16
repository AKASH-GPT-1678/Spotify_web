import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) { }


    async createuser(name: string, email: string) {
        const user = await this.userRepo.create({ name, email });
        return this.userRepo.save(user);
    }
    


}
