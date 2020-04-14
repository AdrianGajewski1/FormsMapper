# FormsMapper

Forms mapper written in typescript, maps all properties from form to specified model

**Example:**

-please remember that all properties in model needs to have its default values

Import and inject FormsMapper through constructor injection
eg:

```typescript
import {FormsMapper} from "{file location}"
import {FormGroup, FormBuilder} from "@angular/forms"


form:FormGroup;

constructor(private mapper: FormsMapper,private fb:FormBuilder ) { }

```

Form:

```typescript
ngOnInit(){
  this.form = this.fb.group(
      {
        email: [""],
        username: [""],
        phoneNumber: [""],
        password: [""],
        confirmPassword: [""],
      }
    );
}

```

Mapping properties from form to model:

```typescript
let model: UserRegisterModel = mapper.map<UserRegisterModel>(
  new UserRegisterModel(),
  this.form
);
```
