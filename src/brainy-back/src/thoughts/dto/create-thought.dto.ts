export class CreateThoughtDto {
  id: number;
  title: string;
  date: Date;
  content: string;
  status: ThoughtsStatus;
}

export enum ThoughtsStatus {
  WORRY = 'WORRYING',
  RUMINATE = 'RUMINATING',
  NEUTRAL = 'NEUTRAL',
}
