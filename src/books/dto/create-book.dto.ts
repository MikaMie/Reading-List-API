import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsBoolean } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ example: 'The Lord of the flys' })
  @IsString()
  readonly title: string;

  @ApiProperty({ example: 'William Golding' })
  @IsString()
  readonly author: string;

  @ApiProperty({ example: 224 })
  @IsInt()
  @Min(1)
  readonly pages: number;

  @ApiProperty({ example: false })
  @IsBoolean()
  readonly finished: boolean;
}
