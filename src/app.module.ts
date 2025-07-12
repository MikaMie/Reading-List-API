import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    BooksModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/books'),
  ],
})
export class AppModule {}
