import { type } from "os";
import { join } from "path";
import { Column, Entity, IsNull, JoinColumn, OneToMany , PrimaryGeneratedColumn, TableForeignKey, Timestamp } from "typeorm";
import {BookEntity} from '../../books/models/books.entity';

@Entity('author')
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    Name: string;

    @Column()       
    Surname: string; 

    @Column()
    birth_date: Date;

    @Column()
    photo: string;

    @OneToMany(() => BookEntity, (book: BookEntity) => book.author)
    @JoinColumn()
    books: BookEntity[];

}