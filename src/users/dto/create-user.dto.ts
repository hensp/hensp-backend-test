import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(25)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  fullName: string;

  @IsString()
  @IsIn(['user', 'admin'])
  role?: string;
}
