---
layout: two-cols
---

## Formulários no Angular - Template Forms

<div class="left-side">
Utiliza two-way databinding para associar propriedades dos componentes
para os inputs no DOM

Possível utilizar referências no DOM para obter o status de validação
do formulário

Adiciona automaticamente classes CSS aos componentes, para que possam
ser estilizadas
</div>

::right::

```ts
// login-form.component.ts
@Component({
  templateUrls: ['./login-form.component.html']
})
class LoginFormComponent {
  model = {
    username: '',
    password: '',
  }
}
```

```html
<!-- login-form.component.ts -->
<form>
  <input [(ngModel)]="model.username" required 
    type="text" #username="ngModel"/>
  <div [hidden]="username.valid || username.pristine">
    Username is required
  </div>
  <input [(ngModel)]="model.password" required 
    type="text" #password="ngModel" />
  <div [hidden]="password.valid || password.pristine">
    Password is required
  </div>
</form>
```

<style>
  .left-side {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  </style>

---
layout: two-cols
---

# Formulários no Angular - Reactive Forms

<div class="left-side">
Utiliza-se de classes reativas do Angular, chamadas de FormControl e FormGroup para representar o formulário.

Possui observables que emitem o valor do formulário quando
há alguma alteração.

Utiliza-se de funções para implementar lógica de validação dos inputs.

```ts
const requiredValidator = (control: AbstractControl) 
  => {
    if (control.value == null) {
      return { missingValue: 'Value is required' }
    }
    return null
}
```
</div>


::right::

```ts
@Component({
  templateUrls: ['./login-form.component.html']
})
class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }) 
}
```

```html
<!-- login-form.component.html -->
<form [formGroup]="loginForm">
  <input formControlName="username" type="text" />
  <div [hidden]="loginForm.username.valid 
    || loginForm.username.pristine">
    Username is required
  </div>
  <input formControlName="password" type="text" />
  <div [hidden]="loginForm.password.valid 
    || loginForm.password.pristine">
    Password is required
  </div>
</form>
```

<style>
  .left-side {
    padding: 10px;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  </style>