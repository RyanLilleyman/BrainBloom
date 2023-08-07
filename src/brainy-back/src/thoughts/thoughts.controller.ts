import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';
import { CreateThoughtDto } from './dto/create-thought.dto';

@Controller('thoughts')
export class ThoughtsController {
  constructor(private readonly thoughtsService: ThoughtsService) {}

  @Post()
  createThought(@Body() createThoughtDto: CreateThoughtDto) {
    return this.thoughtsService.createThought(createThoughtDto);
  }

  @Get()
  findAll() {
    return this.thoughtsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thoughtsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thoughtsService.remove(id);
  }
}
