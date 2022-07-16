import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BookEntity } from '../models/books.entity';
import { book } from '../models/books.interface';
import { BooksService } from '../services/books.service';

@Controller('books') 
export class BooksController {
    constructor(private bookService: BooksService){}

    //this api is used only to push some books data to database
    @Post()
    create(@Body() book: BookEntity): Observable <BookEntity>{
        return this.bookService.createBook(book);
    }

    // to get all books in the database
    @Get()
    async getAll(): Promise<{}>{
       return await this.bookService.GetAllBooks();
    }

    // to get each publisher & his books 
    @Get('publisher')
    getPublisherBooks (): Promise<{}> {
        return this.bookService.GetBooksGroupedByPublisher();
    }


}
