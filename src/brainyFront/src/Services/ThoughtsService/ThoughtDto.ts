export interface ThoughtDto {
  id: string;
  title: string;
  date: string;
  content: string;
  status: ThoughtsStatus;
}

export enum ThoughtsStatus {
  WORRY = "WORRYING",
  RUMINATE = "RUMINATING",
  NEUTRAL = "NEUTRAL",
}
