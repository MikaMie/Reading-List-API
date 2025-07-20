import {
  IsString,
  IsInt,
  Min,
  IsBoolean,
  IsNumber,
  IsEmail,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsInt()
  @IsNumber()
  readonly age: number;

  @IsString()
  readonly password: string;
}
