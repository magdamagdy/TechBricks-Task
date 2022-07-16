import { AuthorEntity } from "src/author/models/author.entity";

export interface book {
    id:number;
    Name: string;
    ISNB_Number: string;
    author: string;
    year:string;
    publisher:string;
    category:string
}