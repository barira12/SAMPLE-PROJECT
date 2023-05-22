import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { cats } from './interface/cat.interface';
import { UpdateCatDto } from './update-cat.dto';
export declare class CatsController {
    private catsService;
    catService: any;
    usersService: any;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findAll(): Promise<cats[]>;
    findOne(id: string): any;
    update(id: string, updateCatDto: UpdateCatDto): any;
    remove(id: string): any;
}
