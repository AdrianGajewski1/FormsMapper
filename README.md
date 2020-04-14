# FormsMapper

Forms mapper written in typescript, maps all properties from form to specified model

**Example:**

```typescript
let model: UserRegisterModel = mapper.map<UserRegisterModel>(
  new UserRegisterModel(),
  this.form
);
```
