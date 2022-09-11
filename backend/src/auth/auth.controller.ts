import {Body, Controller, Global, Post, Request, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "../user/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {JwtGuard} from "./guard/jwt-auth.guard";
import {LocalAuthGuard} from './guard/local-auth.guard'


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('login')
    @UseGuards(LocalAuthGuard)
    login(@Request() req) {
        return this.authService.login(req.user)
    }


    @Post('profile')
    @UseGuards(JwtGuard)
    profile(@Request() req) {
        return req.user
    }

    @Post('register')
    register(@Body() createUserDto: CreateUserDto){
        return this.authService.registerUser(createUserDto)
    }
}
