// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  // constructor(private readonly jwtService: JwtService,@InjectModel('user') private readonly userModel: Model<UserDocument>) {}
  constructor(private readonly jwtService: JwtService, @InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async login(user: any) {
    const userFirst = await this.findByEmail(user.email);
    if (!userFirst) {
      throw new Error('User does not exist');
    }
    // console.log('Debug information:', user);
    // process.exit(0);
    const passwordMatch = await bcrypt.compare(user.password,userFirst.password);

    if (!passwordMatch) {
      throw new Error('Incorrect password');
     
    }

    return  this.jwtService.sign( { email: user.email, sub: user.id });
    return {
      access_token: this.jwtService.sign( { email: user.email, sub: user.id }),
    };
  }

  async createUser(createUserDto: any): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async validate(createUserDto): Promise<void> {
    // Perform custom validation
    const isUsernameUnique = await this.checkUsernameUniqueness(createUserDto.username);
    const isEmailUnique = await this.checkEmailUniqueness(createUserDto.email);

    if (!isUsernameUnique) {
      throw new Error('Username already exists');
    }

    if (!isEmailUnique) {
      throw new Error('Email already exists');
    }
  }

  private async checkUsernameUniqueness(username:string): Promise<boolean> {
    // Check if username already exists in the database
    const existingUser = await this.userModel.findOne({ username: username });

    return !existingUser;
  }

  private async checkEmailUniqueness(email:string): Promise<boolean> {
    // Check if email already exists in the database
    const existingUser = await this.userModel.findOne({ email: email });

    return !existingUser;
  }

  private async findByEmail(email:string): Promise<User> {
    // Check if email already exists in the database
    return await this.userModel.findOne({ email: email });
  }

  
}
