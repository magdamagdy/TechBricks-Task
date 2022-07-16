import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {AuthorEntity} from "../../author/models/author.entity";

@Entity('book')
export class BookEntity {

    @PrimaryGeneratedColumn()
    id:Number

    @Column({unique:true})
    ISNB_Number: string;

    @Column()
    Name: string;

    @Column()
    year: string;

    @Column()
    publisher: string;

    @Column()
    category: string; 

    @ManyToOne(() => AuthorEntity, (author: AuthorEntity) => author.books)  //reference Author table
    @JoinColumn([{ name: "author", referencedColumnName: "id" }])
    public author: AuthorEntity; 

}
