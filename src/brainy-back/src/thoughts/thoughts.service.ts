import { Injectable } from '@nestjs/common';
import { CreateThoughtDto } from './dto/create-thought.dto';
import { UpdateThoughtDto } from './dto/update-thought.dto';

@Injectable()
export class ThoughtsService {
  create(createThoughtDto: CreateThoughtDto) {
    return 'This action adds a new thought';
  }

  findAll() {
    return `This action returns all thoughts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thought`;
  }

  update(id: number, updateThoughtDto: UpdateThoughtDto) {
    return `This action updates a #${id} thought`;
  }

  remove(id: number) {
    return `This action removes a #${id} thought`;
  }
}
