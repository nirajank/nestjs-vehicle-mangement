import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtAuthModule } from './auth/jwt.module';
import { UserModule } from './users/user.module';
import { config } from 'dotenv';
config();


@Module({
  controllers: [AppController],
  
  providers: [
    AppService
  ],
  imports: [
    VehiclesModule,
    MongooseModule.forRoot(process.env.DATABASE_URL),
    JwtAuthModule,
    UserModule
  ],
})
export class AppModule {}
