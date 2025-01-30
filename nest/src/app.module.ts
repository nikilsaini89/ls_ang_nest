import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';


@Module({
  imports: [
    ConfigModule.forRoot(
      {
      isGlobal: true, // Makes the ConfigModule globally available
    }
    ),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port : 3306,
      username:'root',
      password : process.env.SQL_PASSWORD,
      // password : ,
      database : 'nest_app',
      entities :[User],
      synchronize: true,
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
