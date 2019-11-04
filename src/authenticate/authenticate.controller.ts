import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthenticateService } from './authenticate.service';
import { Request } from 'express';

@Controller('authenticate')
export class AuthenticateController {

    constructor (private authService: AuthenticateService) {
    
    }

    @Post()
    authenticate(@Req() request: Request) {
        const username = request.body.username
        const password = request.body.password
        return this.authService.authenticate(username, password)
    }

}
