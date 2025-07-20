import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async signIn(username: string, email: string, pass: string): Promise<any> {
    const user = await this.usersService.findbyEmail(email);
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('You used the wrong password!');
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
