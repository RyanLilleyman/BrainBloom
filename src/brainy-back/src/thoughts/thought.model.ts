import { ThoughtsStatus } from './dto/create-thought.dto';
export interface Thought {
  id: string;
  title: string;
  date: string;
  content: string;
  status: ThoughtsStatus;
}
