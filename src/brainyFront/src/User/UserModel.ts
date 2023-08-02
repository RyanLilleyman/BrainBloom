import axios from "axios";
import { UserDto } from "./UserDto";
export class UserModel {
  //need to implement a port number or something
  public static async signIn(
    userDto: UserDto,
    navigation: any
  ): Promise<UserDto> {
    return await axios
      .post("http://localhost:3000/auth/signin", { data: userDto })
      .then((response: any) => {
        navigation.navigate("MainView");
        console.log(response.data);
        return response.data;
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {});
  }
  public static async signUp(
    userDto: UserDto,
    navigation: any
  ): Promise<UserDto> {
    return await axios
      .post("http://localhost:3000/auth/signup", { data: userDto })
      .then((response: any) => {
        navigation.navigate("SignIn1");
        console.log(response.data);
        return response.data;
      })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {});
  }
}
