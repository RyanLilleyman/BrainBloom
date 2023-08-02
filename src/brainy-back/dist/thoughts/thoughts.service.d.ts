import { CreateThoughtDto } from './dto/create-thought.dto';
import { UpdateThoughtDto } from './dto/update-thought.dto';
export declare class ThoughtsService {
    create(createThoughtDto: CreateThoughtDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateThoughtDto: UpdateThoughtDto): string;
    remove(id: number): string;
}
