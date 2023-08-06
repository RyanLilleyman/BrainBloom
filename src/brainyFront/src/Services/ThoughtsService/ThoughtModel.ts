import axios from "axios";
import { ThoughtDto } from "./ThoughtDto";
export default class ThoughtModel {
  public static async createThought(thought: ThoughtDto): Promise<any> {
    return await axios.post("http://localhost:3000/thoughts", thought);
  }
  public static async getThoughts() {
    return await axios.get('http://localhost:3000/thoughts');
  }

  public static async deleteThought(id: string): Promise<any> {
    return await axios.delete(`http://localhost:3000/thoughts/${id}`);
  }
}
