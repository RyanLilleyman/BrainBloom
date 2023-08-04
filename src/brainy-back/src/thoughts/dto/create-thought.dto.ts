export class CreateThoughtDto {
  id: number;
  title: string;
  date: string;
  content: string;
}

export enum ThoughtsStatus {
  WORRY = 'WORRYING',
  RUMINATE = 'RUMINATING',
  NEUTRAL = 'NEUTRAL',
}
