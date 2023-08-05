import { PartialType } from '@nestjs/mapped-types';
import { CreateThoughtDto } from './create-thought.dto';

export class UpdateThoughtDto extends PartialType(CreateThoughtDto) {
  title: string;
  date: Date;
  content: string;
  status: CreateThoughtDto['status'];
}
