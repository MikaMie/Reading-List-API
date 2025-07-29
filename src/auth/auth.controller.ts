import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: SignInDto })
  @ApiOperation({ summary: 'Login user' })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @ApiBody({ type: CreateUserDTO })
  @ApiOperation({ summary: 'Register user' })
  @HttpCode(HttpStatus.OK)
  @Post('register')
  register(@Body() createUserDto: CreateUserDTO) {
    return this.authService.register(createUserDto);
  }
}
