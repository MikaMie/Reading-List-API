import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, email: string, pass: string): Promise<any> {
    const user = await this.usersService.findbyEmail(email);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('You used the wrong password!');
    }
    const payload = { sub: user._id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
