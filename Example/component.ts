import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { FormsMapper } from "../src/FormsMapper";
import { UserRegisterModel } from "./Model";
import { UserService } from "./user-service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private mapper: FormsMapper
  ) {}

  submited = false;
  registrationPassed = false;
  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      username: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required, Validators.minLength(9)]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    let result = this.mapper.map<UserRegisterModel>(
      new UserRegisterModel(),
      this.registerForm
    );

    this.service
      .registerUser(result)
      .subscribe((res) => console.log("Successfully registered new user!!!"));
  }
}
