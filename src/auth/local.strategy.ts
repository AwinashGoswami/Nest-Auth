/* eslint-disable prettier/prettier */
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UserService } from "src/user/user.service";
import { UnauthorizedException } from '@nestjs/common'
import { User } from "src/user/user.entity";
import { Injectable } from "@nestjs/common/decorators";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super();
    }

    validate(username: string, password: string): User {
        const user: User = this.userService.getUserByName(username);
        if (username === undefined) {
            throw new UnauthorizedException();
        }
        if (username !== undefined && user.password === password) {
            return user;
        }
        else {
            throw new UnauthorizedException();
        }
    }
}