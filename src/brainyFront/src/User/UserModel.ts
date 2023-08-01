import * as axios from "axios";
import { UserDto } from "./UserDto";
export class UserModel {
  public async signIn(userDto: UserDto, navigation): Promise<UserDto>{
    return axios.get("http://localhost:3000/signin", userDto)
      .then((response: any) => {
        navigation.navigate("MainView");
        console.log(response.data);
        return response.data;
      }).
      catch((error: any) => {
        console.log(error);
      }).
      finally(() => {
        
      });
  }
}