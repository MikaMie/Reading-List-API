import { IsString, IsInt, Min, IsBoolean } from 'class-validator';

export class CreateBookDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly author: string;

  @IsInt()
  @Min(1)
  readonly pages: number;

  @IsBoolean()
  readonly finished: boolean;
}
