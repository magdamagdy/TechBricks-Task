import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { author } from "../models/auther.interface";
import { AuthorService } from "../services/author.service";

@Controller('author') 
export class AuthorController {
    constructor(private authorService: AuthorService){}

    //this api is used only to push some authers data to database
    @Post()
    create(@Body() author: author): Observable <author>{
        return this.authorService.createAuther(author);
    }
    
    //retrieve an author and his books
    @Get(":id/books")
    getAutherBooks(@Param() params) {
        return this.authorService.getBooksOfAuther(params.id)
    }


}