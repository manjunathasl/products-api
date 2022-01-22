import { IsString, IsEmail, MinLength } from 'class-validator';

export class UserAuthDto {
  @IsString()
  @IsEmail()
  username: string;

  @IsString()
  @MinLength(8)
  password: string;
}
