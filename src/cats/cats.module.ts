
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MongoModule } from 'src/mongo/mongo.module';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports:[MongoModule]
})
export class CatsModule {
   
}