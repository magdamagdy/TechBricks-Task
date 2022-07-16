import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { author } from "../models/auther.interface";
import { AuthorService } from "../services/author.service";

@Controller('author') //  http://localhost:3000/api/author
export class AuthorController {
    constructor(private authorService: AuthorService){}

    @Post()
    create(@Body() author: author): Observable <author>{
        return this.authorService.createAuther(author);
    }
    
    @Get(":id/books")
    getAutherBooks(@Param() params) {
        return this.authorService.getBooksOfAuther(params.id)
    }


}