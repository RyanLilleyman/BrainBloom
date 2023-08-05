import { CreateThoughtDto } from './dto/create-thought.dto';
import { UpdateThoughtDto } from './dto/update-thought.dto';
import { Thought } from './thought.model';
export declare class ThoughtsService {
    private thoughts;
    createThought(createThought: CreateThoughtDto): Thought;
    findAll(): Thought[];
    findOne(id: string): Thought;
    remove(id: string): void;
    update(id: string, updateThoughtDto: UpdateThoughtDto): Thought;
}
