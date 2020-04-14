import { Injectable } from "@angular/core";
import { UserRegisterModel } from "./Model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  private URL: string = "http://localhost:5000/api/";

  constructor(private http: HttpClient) {}

  registerUser(model: UserRegisterModel) {
    return this.http.post<UserRegisterModel>(
      this.URL + "/User/register",
      model
    );
  }
}
