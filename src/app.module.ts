import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // url:process.env.URI,
      host: process.env.Postgres_Host,
      port: parseInt(<string>process.env.Postgres_Port),
      username: process.env.Postgres_User,
      password: process.env.Postgres_Password,
      database: process.env.Postgres_Database,
      ssl: { rejectUnauthorized: false },
      autoLoadEntities: true,
      synchronize: true
    }),
    BooksModule,
    AuthorModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
