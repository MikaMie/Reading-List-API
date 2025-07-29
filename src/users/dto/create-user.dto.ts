import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({ example: 'john doe' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'geheim123' })
  @IsString()
  readonly password: string;
}
