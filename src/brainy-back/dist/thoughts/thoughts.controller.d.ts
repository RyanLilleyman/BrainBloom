import { ThoughtsService } from './thoughts.service';
import { CreateThoughtDto } from './dto/create-thought.dto';
import { UpdateThoughtDto } from './dto/update-thought.dto';
export declare class ThoughtsController {
    private readonly thoughtsService;
    constructor(thoughtsService: ThoughtsService);
    create(createThoughtDto: CreateThoughtDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateThoughtDto: UpdateThoughtDto): string;
    remove(id: string): string;
}
