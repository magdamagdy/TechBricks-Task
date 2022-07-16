import { All, Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { createQueryBuilder, Repository } from 'typeorm';
import { BookEntity } from '../models/books.entity';
import { book } from '../models/books.interface';
import { getManager } from 'typeorm';

@Injectable()
export class BooksService {
    book: any;
    BookEntity: any;
    constructor(
        @InjectRepository(BookEntity)
        private  bookRepository: Repository <BookEntity>
    ){}

    createBook(book: BookEntity): Observable<BookEntity>{
        return from(this.bookRepository.save(book));
    }

    async GetAllBooks(): Promise<{}> {
        return this.bookRepository.find({
            relations: ["author"]
        });
    }

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
