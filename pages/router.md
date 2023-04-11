---
layout: two-cols
clicks: 2
---

# Roteamento de páginas

O Angular utiliza um mapeamento de rotas para componentes
de modo a fazer o roteamento de páginas da aplicação.

<div class="left-below" v-if="$slidev.nav.clicks === 1">
É possível fazer redirecionamento de rotas.

Por padrão, o Angular utiliza apenas o prefixo para
selecionar o mapeamento que será ativado.
</div>
<div class="left-below" v-if="$slidev.nav.clicks === 2">
Exemplo:
A configuração abaixo gera um redirecionamento infinito, pois o path <span class="destaque">auth</span> também é prefixo de <span class="destaque">auth/login.</span>

```ts
{ path: 'auth', redirectTo: 'auth/login' },
{ path: 'auth/login', component: LoginPageComponent }
{ 
  path: 'auth/register', 
  component: RegisterPageComponent 
}
```
</div>

::right::

<div v-if="$slidev.nav.clicks === 0">

```ts {all}
const ROUTES: Routes = [
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  },
  { path: 'auth/login', component: LoginPageComponent },
  { 
    path: 'auth/register', 
    component: RegisterPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
class AppRoutingModule {}
```

```ts
@NgModule({
  imports: [AppRoutingModule]
})
class AppModule {}
```
</div>

<div v-if="$slidev.nav.clicks === 1 || $slidev.nav.clicks === 2">

```ts {all|2-6|2-6}
const ROUTES: Routes = [
  { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  },
  { path: 'auth/login', component: LoginPageComponent },
  { 
    path: 'auth/register', 
    component: RegisterPageComponent 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
class AppRoutingModule {}
```

```ts
@NgModule({
  imports: [AppRoutingModule]
})
class AppModule {}
```
</div>

<style>
.left-below {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.destaque {
  color: lightgreen;
}
</style>