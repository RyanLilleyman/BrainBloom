import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';
import { CreateThoughtDto } from './dto/create-thought.dto';
import { UpdateThoughtDto } from './dto/update-thought.dto';

@Controller('thoughts')
export class ThoughtsController {
  constructor(private readonly thoughtsService: ThoughtsService) {}

  @Post()
  create(@Body() createThoughtDto: CreateThoughtDto) {
    return this.thoughtsService.create(createThoughtDto);
  }

  @Get()
  findAll() {
    return this.thoughtsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thoughtsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThoughtDto: UpdateThoughtDto) {
    return this.thoughtsService.update(+id, updateThoughtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thoughtsService.remove(+id);
  }
}
