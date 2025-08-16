import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userservice: UsersService
    ) { }



    @Post('/register')
    createUser(@Body() body: { name: string; email: string }) {
        return this.userservice.createuser(body.name, body.email);
    }


    @Post('/hello')
    seedsong(){

    }
}
