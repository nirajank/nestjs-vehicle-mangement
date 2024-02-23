import { Module } from '@nestjs/common';
import { UserService } from './user.service.';
import { UserController } from './user.controller';
import { JwtAuthModule } from '../auth/jwt.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),JwtAuthModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
