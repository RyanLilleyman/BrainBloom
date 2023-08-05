import { CreateThoughtDto } from './create-thought.dto';
declare const UpdateThoughtDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateThoughtDto>>;
export declare class UpdateThoughtDto extends UpdateThoughtDto_base {
    title: string;
    date: Date;
    content: string;
    status: CreateThoughtDto['status'];
}
export {};
