import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorController } from "./controllers/author.controller";
import { AuthorEntity } from "./models/author.entity";
import { AuthorService } from "./services/author.service";

@Module({
    imports: [
      TypeOrmModule.forFeature([AuthorEntity])
    ],
    providers: [AuthorService],
    controllers: [AuthorController]
  })
export class AuthorModule {}