import { ThoughtsService } from './thoughts.service';
export declare class ThoughtsController {
    private readonly thoughtsService;
    constructor(thoughtsService: ThoughtsService);
    createThought(title: string, date: string, content: string): import("./thought.model").Thought;
    findAll(): import("./thought.model").Thought[];
    findOne(id: string): import("./thought.model").Thought;
}
