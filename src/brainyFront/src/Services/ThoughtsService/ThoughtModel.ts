import axios from "axios";
import { ThoughtDto } from "./ThoughtDto";
export class ThoughtModel {
  public static createThought(thought: ThoughtDto): Promise<any> {
    return axios.post("http://localhost:3000/thoughts", thought);
  }
}
