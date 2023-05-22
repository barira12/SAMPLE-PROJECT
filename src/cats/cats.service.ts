// cats.service.ts
import { Injectable } from '@nestjs/common';
import { cats } from './entities/cats.entity';
import { MongoService } from 'src/mongo/mongo.service';

@Injectable()
export class CatsService {
  cats: any;
  constructor (private readonly mongoService:MongoService){

  }
  

  async create(cat: cats) {
  await this.mongoService.insert(cat,"cats")
   this.cats.push(cat);
  }

  

}