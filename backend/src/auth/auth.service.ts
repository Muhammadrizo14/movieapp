import { Injectable, OnModuleInit } from '@nestjs/common';
import {CreateUserDto} from "../user/dto/create-user.dto";
import {UserService} from "../user/user.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) {
    }


    async validiateUser(name: string, password: string) {
        const user = await this.userService.findOneByName(name)
        if (!user ||  user.password !== password) return false
        return user
    }

    async login(user: any) {
        const payload = { name: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async registerUser(createUserDto: CreateUserDto){
        const newUser = await this.userService.create(createUserDto)
        return this.login(newUser)
    }

}
