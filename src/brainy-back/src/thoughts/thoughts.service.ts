import { Injectable } from '@nestjs/common';
import { CreateThoughtDto } from './dto/create-thought.dto';
import { Thought } from './thought.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ThoughtsService {
  private thoughts: Thought[] = [];

  createThought(createThought: CreateThoughtDto): Thought {
    const thought = {
      id: uuid(),
      title: createThought.title,
      date: createThought.date,
      content: createThought.content,
      status: createThought.status,
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

}
