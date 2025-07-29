import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class SignInDto {
  @ApiProperty({ example: 'max@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'geheim123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
