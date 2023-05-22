import { MongoClient } from 'mongodb';
import { cats } from 'src/cats/entities/cats.entity';
export declare class MongoService {
    private client;
    catService: any;
    catsService: any;
    cats: any;
    insert(cat: cats, arg1: string): void;
    private readonly DATABASE_NAME;
    private readonly database;
    constructor(client: MongoClient);
    create(cats: cats): cats;
    findAll(): cats[];
    findOne(id: number): cats;
    update(id: number, cats: cats): cats;
    delete(id: number): cats;
}
