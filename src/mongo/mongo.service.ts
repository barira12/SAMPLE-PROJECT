import { Inject, Injectable, Query } from '@nestjs/common';
import { query } from 'express';

import {  Db, MongoClient } from 'mongodb';
import { cats } from 'src/cats/entities/cats.entity';

@Injectable()
export class MongoService {
  catService: any;
  catsService: any;
  cats: any;
  insert(cat: cats, arg1: string) {
    throw new Error('Method not implemented.');
  }

    private readonly DATABASE_NAME: string = "cats";
    private readonly database : Db;

    constructor(
        @Inject('DATABASE_CONNECTION')
        private client: MongoClient,
    ) {
        this.database = this.client.db(this.DATABASE_NAME);
    }

    create(cats: cats): cats {
      this.cats.push(cats);
      return cats;
    }

    findAll(): cats[] {
      return this.cats;
    }
    findOne(id: number): cats {
      return this.cats.find(cats=> cats.id === id);
    }
  
    update(id: number, cats: cats): cats {
      const index = this.cats.findIndex(cats => cats.id === id);
      if (index !== -1) {
        this.cats[index] = { ...cats, id };
        return this.cats[index];
      }
      return null;
    }
  
    delete(id: number): cats {
      const index = this.cats.findIndex(cats => cats.id === id);
      if (index !== -1) {
        const deletedCats = this.cats[index];
        this.cats.splice(index, 1);
        return deletedCats;
      }
      return null;
    }
  
}

