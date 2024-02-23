import { IsString, IsEmail, IsOptional, IsDate, IsNotEmpty} from 'class-validator';
import { Transform, Type } from 'class-transformer';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly fullName: string;

  @IsDate()
  @IsOptional()
  @Transform(({ value }) => new Date(value))
  readonly createdAt: Date;

  constructor(partial: Partial<CreateUserDto>) {
    Object.assign(this, partial);
  }

  

}
