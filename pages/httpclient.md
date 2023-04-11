---
layout: two-cols
---
# HTTP Client

<div class="left-side">
O Angular utiliza a classe HttpClient para fazer requisições HTTP.

A classe representa requisições HTTP como Observables.

É possível transformar os Observables em Promises, caso necessário.
</div>

::right::

```ts
class HttpClient {
  public get<T>(/* params */): Observable<T>
  public post<T>(/* params */): Observable<T>
  public put<T>(/* params */): Observable<T>
  public delete<T>(/* params */): Observable<T>
  public patch<T>(/* params */): Observable<T>
  public options<T>(/* params */): Observable<T>
}
```

Exemplo
```ts
@Component({ /* ... */ })
class ExampleComponent {
  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post("http://example.com/api/auth/login")
      .subscribe({
        next: () => console.log('Sucesso ao logar'),
        error: () => {
          console.log('Algo de errado aconteceu');
        }
      });
  }
}
```

<style>
  .left-side {
    padding: 0 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>