import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { BookEntity } from "src/books/models/books.entity";
import { book } from "src/books/models/books.interface";
import { Repository } from "typeorm";
import { author } from "../models/auther.interface";
import { AuthorEntity } from "../models/author.entity";

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(AuthorEntity)
        private  authorRepository: Repository <author>
    ){}

    createAuther(author: author): Observable<author>{
        return from(this.authorRepository.save(author));
    }

    async getBooksOfAuther(id: number): Promise<author> {
    return await this.authorRepository.findOne({where: {id: id}, relations: ["books"]});
    }

}
