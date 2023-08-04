import { ThoughtsService } from './thoughts.service';
import { UpdateThoughtDto } from './dto/update-thought.dto';
export declare class ThoughtsController {
    private readonly thoughtsService;
    constructor(thoughtsService: ThoughtsService);
    createThought(title: string, date: string, content: string): import("./thought.model").Thought;
    findAll(): import("./thought.model").Thought[];
    findOne(id: string): import("./thought.model").Thought;
    remove(id: string): void;
    update(id: string, updateThoughtDto: UpdateThoughtDto): import("./thought.model").Thought;
}
