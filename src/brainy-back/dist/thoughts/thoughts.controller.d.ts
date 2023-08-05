import { ThoughtsService } from './thoughts.service';
import { CreateThoughtDto } from './dto/create-thought.dto';
import { UpdateThoughtDto } from './dto/update-thought.dto';
export declare class ThoughtsController {
    private readonly thoughtsService;
    constructor(thoughtsService: ThoughtsService);
    createThought(createThoughtDto: CreateThoughtDto): import("./thought.model").Thought;
    findAll(): import("./thought.model").Thought[];
    findOne(id: string): import("./thought.model").Thought;
    remove(id: string): void;
    update(id: string, updateThoughtDto: UpdateThoughtDto): import("./thought.model").Thought;
}
