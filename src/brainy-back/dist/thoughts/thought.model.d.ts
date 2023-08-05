import { ThoughtsStatus } from './dto/create-thought.dto';
export interface Thought {
    id: string;
    title: string;
    date: Date;
    content: string;
    status: ThoughtsStatus;
}
