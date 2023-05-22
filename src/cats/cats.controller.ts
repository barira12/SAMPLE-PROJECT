import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';

import { cats } from './interface/cat.interface';
import { UpdateCatDto } from './update-cat.dto';


@Controller('cats')
export class CatsController {
  catService: any;
  usersService: any;
  constructor(private catsService: CatsService) {
    
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<cats []> {
    return this.catService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
  
}