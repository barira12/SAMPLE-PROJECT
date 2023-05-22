import { cats } from './entities/cats.entity';
import { MongoService } from 'src/mongo/mongo.service';
export declare class CatsService {
    private readonly mongoService;
    cats: any;
    constructor(mongoService: MongoService);
    create(cat: cats): Promise<void>;
}
