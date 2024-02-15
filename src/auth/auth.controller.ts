import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

import { Role } from '../common/enum/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorator/active-user.decorator';
import { IUserActive } from 'src/common/interface/user-active.interface';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService :AuthService
    ){}

    @Post('register')
    register(
        @Body()
        registerDto: RegisterDTO
    ){
        // console.log(registerDto);
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(
        @Body() 
        loginDto:LoginDto,){
        return this.authService.login(loginDto);
    }

    @Get('profile')
    @Auth(Role.USER)
    profile(@ActiveUser() user:IUserActive) {
      return this.authService.profile(user);
    }
}
