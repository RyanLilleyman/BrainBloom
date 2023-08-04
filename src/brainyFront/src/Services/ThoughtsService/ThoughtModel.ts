import axios from "axios";
import { ThoughtDto } from "./ThoughtDto";
export class ThoughtModel {
  public static async createThought(thought: ThoughtDto): Promise<void> {
    return await axios
      .post("http://localhost:3000/thoughts", {
      data: thought,
      })
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.log(error); 
      })
      .finally(() => {});
  }
}
