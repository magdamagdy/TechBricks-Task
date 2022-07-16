import { All, Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { createQueryBuilder, Repository } from 'typeorm';
import { BookEntity } from '../models/books.entity';


@Injectable()
export class BooksService {
    book: any;
    BookEntity: any;
    constructor(
        @InjectRepository(BookEntity)
        private  bookRepository: Repository <BookEntity>
    ){}

    //create new book in database
    createBook(book: BookEntity): Observable<BookEntity>{
        return from(this.bookRepository.save(book));
    }

    //retrieve all books from database
    async GetAllBooks(): Promise<{}> {
        return this.bookRepository.find({
            relations: ["author"]
        });
    }
    
    /*
    to get each publisher name and its books
    return a dictionary where 
    key : publisher name
    value : array of book objects
    */ 
    async GetBooksGroupedByPublisher() : Promise<{}>{
        let dict = {}
        await this.bookRepository.find({
            
            relations: ["author"]
            }).then(info => info.forEach(bookObj => {
                
                if (!(dict[bookObj.publisher]))
                {
                    
                    dict[bookObj.publisher] = []
                    let publisherName = bookObj.publisher
                    delete bookObj.publisher
                    dict[publisherName].push(bookObj)
                    
                }
                else 
                {
                    let publisherName = bookObj.publisher
                    delete bookObj.publisher
                    dict[publisherName] = [...dict[publisherName], bookObj]
                    

                }
            }))
        
        return dict
    }

}
