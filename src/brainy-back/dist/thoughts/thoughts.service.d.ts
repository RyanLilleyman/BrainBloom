import { UpdateThoughtDto } from './dto/update-thought.dto';
import { Thought } from './thought.model';
export declare class ThoughtsService {
    private thoughts;
    createThought(title: string, date: string, content: string): Thought;
    findAll(): Thought[];
    findOne(id: string): Thought;
    remove(id: string): void;
    update(id: string, updateThoughtDto: UpdateThoughtDto): Thought;
}
