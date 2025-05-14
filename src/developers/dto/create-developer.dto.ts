import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateDeveloperDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: string;
}
