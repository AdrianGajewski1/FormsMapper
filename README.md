# FormsMapper

Forms mapper written in typescript, maps all properties from form to specified model

**Example:**

import and inject FormsMapper through constructor injection
eg:

```typescript
import {FormsMapper} from "{file location}"

constructor(private mapper: FormsMapper) { }

```

```typescript
let model: UserRegisterModel = mapper.map<UserRegisterModel>(
  new UserRegisterModel(),
  this.form
);
```
