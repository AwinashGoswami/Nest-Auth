/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "awi",
            password: "admin",
            email: "awi@gmail.com",
            age: 29
        },
        {
            username: "hussnain",
            password: "webdev",
            email: "hussnain@gmail.com",
            age: 26
        },
    ]

    getUserByName(userName: string): User {
        return this.users.find((user: User) => user.username === userName);
    }
}
