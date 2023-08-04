import axios from "axios";
export class ThoughtModel {
  public async createThought(
    title: string,
    date: string,
    content: string
  ): Promise<Thought> {}
}
