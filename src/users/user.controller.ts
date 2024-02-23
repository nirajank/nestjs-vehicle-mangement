// auth.controller.ts
import { Controller, Post, Body, UseGuards, ValidationPipe, Get, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service.';
import { AuthGuard } from '@nestjs/passport';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-userr.dto';
import { LoginDto } from './dto/login.dto';


@Controller('user')
export class UserController {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>, private readonly authService: UserService) { }

  @Post('login')
  async login(@Body(new ValidationPipe()) loginDto: LoginDto) {
    try {
      const token = await this.authService.login(loginDto);
      return token;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.authService.findAll();
  }


  @Post('/signup')
  async createUserNew(@Body(new ValidationPipe()) userDto: CreateUserDto) {
    try {
      await this.authService.validate(userDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
    const saltOrRounds = 10;
    userDto.password = await bcrypt.hash(userDto.password, saltOrRounds);
    const result = await this.authService.createUser(userDto);
    return 'User created successfully';
  }

    @Get('protected')
    @UseGuards(AuthGuard('jwt')) // Apply AuthGuard to this route
    async protectedRoute() {
      return { message: 'This is a protected route.' };
    }
}
