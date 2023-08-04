import { Injectable } from '@nestjs/common';
import { CreateThoughtDto } from './dto/create-thought.dto';
import { UpdateThoughtDto } from './dto/update-thought.dto';
import { Thought } from './thought.model';
import { ThoughtsStatus } from './dto/create-thought.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ThoughtsService {
  private thoughts: Thought[] = [];

  createThought(title: string, date: string, content: string): Thought {
    const thought = {
      id: uuid(),
      title,
      date,
      content,
      status: ThoughtsStatus.NEUTRAL,
    };
    this.thoughts.push(thought);
    return thought;
  }

  findAll(): Thought[] {
    return this.thoughts;
  }

  findOne(id: string): Thought {
    return this.thoughts.find((thought) => thought.id === id);
  }

  remove(id: string): void {
    this.thoughts = this.thoughts.filter((thought) => thought.id !== id);
  }

  update(id: string, updateThoughtDto: UpdateThoughtDto): Thought {
    const thought = this.thoughts.find((thought) => thought.id === id);
    if (thought) {
      if (updateThoughtDto.title) {
        thought.title = updateThoughtDto.title;
      }
      if (updateThoughtDto.date) {
        thought.date = updateThoughtDto.date;
      }
      if (updateThoughtDto.content) {
        thought.content = updateThoughtDto.content;
      }
      if (updateThoughtDto.status) {
        thought.status = updateThoughtDto.status;
      }
    }
    return thought;
  }

  // constructor(thoughts: CreateThoughtDto[]) {}
  // create(createThoughtDto: CreateThoughtDto) {
  //   return 'This action adds a new thought';
  // }

  // findAll() {
  //   return `This action returns all thoughts`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} thought`;
  // }

  // update(id: number, updateThoughtDto: UpdateThoughtDto) {
  //   return `This action updates a #${id} thought`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} thought`;
  // }
}
