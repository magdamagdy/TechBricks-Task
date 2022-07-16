import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './controllers/books.controller';
import { BookEntity } from './models/books.entity';
import { BooksService } from './services/books.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity])
  ],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
