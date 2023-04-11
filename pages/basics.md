---
layout: two-cols
---
# Componentes

Conceito fundamental do angular que permite o encapsulamento de seções de interface


```ts {all|2|3|4|5|8-17|11-13}
@Component({
  selector: `app-login`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [],
})
class LoginComponent {
  @Input() username?: string; 
  @Output() submit = new EventEmitter<void>()

  // Two way binding
  @Input() password?: string;
  @Output() passwordChange = new EventEmitter<string>()

  onLogin() {
    this.submit.next();
  }
}
```

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">
<h3>Selector</h3>
O seletor identifica como o componente será referido por outros componentes.

Exemplo:

```html
<!-- app.component.html -->
<div>
  <app-login></app-login>
</div>
```
</div>

<div v-if="$slidev.nav.clicks === 2">
  <h3>Template</h3>
  O template define o layout do componente em html
</div>

<div v-if="$slidev.nav.clicks === 3">
  <h3>StyleUrls</h3>
  <tt>styleUrls</tt> define os arquivos de estilização do componente.

  - A estilização do componente possui escopo limitado ao componente em que foi declarada.
    (porém isso pode ser alterado por meio de <tt>ViewEncapsulation.None</tt>)
  - O componente pode possuir multiplas definições estilos
  - Os estilos podem ser definidos em tempo de execução
</div>

<div v-if="$slidev.nav.clicks === 4">
  <h3>Providers</h3>
  Os componentes também fazem parte do sistema de injeção de depêndencias do Angular,
  podendo prover serviços.
</div>

<div v-if="$slidev.nav.clicks === 5">
  <h3>Inputs / Outputs</h3>
  Os componentes podem se comunicar com outros componentes por meio de inputs e outputs.

 Exemplo: 
```html
<!-- app.component.html -->
<div>
  <app-login 
    [username]="'eduze'" 
    [(password)]="password"
    (submit)="onSubmit()"
  >
  </app-login>
</div>
```
</div>

<div v-if="$slidev.nav.clicks === 6">
<h3>Inputs / Outputs</h3>
Os componentes podem se comunicar com outros componentes por meio de inputs e outputs

 Exemplo: 
```html {5}
<!-- app.component.html -->
<div>
  <app-login 
    [username]="'eduze'" 
    [(password)]="password"
    (submit)="onSubmit()"
  >
  </app-login>
</div>
```

Os componentes possuem suporte para two way data binding utilizando sufixo <tt>Change</tt>
</div>


</div>

<style>
  .right-side {
    padding: 50px;
  }

  .right-side h3 {
    margin-bottom: 20px;
    color: gold;
  }
</style>

---
layout: two-cols
---

# Diretivas

As diretivas permitem ampliar a funcionalidade de seu elemento hospedeiro,
permitindo alteração de suas propriedades a interceptação de eventos do DOM.

```ts {all|4-11|3}
@Directive({ selector: `[appHighlight]` })
class HighlightDirective {
  @Input() color: string = "yellow";

  constructor(private ref: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.ref.nativeElement.style.backgroundColor = color;
  }
}
```

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">
Exemplo:

```html
<div>
  <p appHighlight>
    Este texto será destacado na entrada do mouse
  </p>
</div>
```

- As diretivas acessam o elemento hospedeiro por injeção de depêndencias.
- é possível acessar também serviços do container de injeção de depências.
</div>


<div v-if="$slidev.nav.clicks === 2">
Exemplo:

```html
<div>
  <p appHighlight [color]="'blue'">
    Este texto será destacado na entrada do mouse
  </p>
</div>
```

<div class="directive-infos">
As diretivas também podem possuir inputs e outputs para 
configuração ou comunicação com outros componentes.
</div>
</div>

</div> <!-- right-side -->

<style>
.right-side {
  height: 100%;
  padding: 50px 20px;
  flex-direction: column;
  display: flex;
}

.right-side *:not(:first-child) {
  margin-top: 30px;
}

.directive-infos {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

---
layout: two-cols
---

# Pipes

<div class="left-side">
Utilizada para transformar valores para exibição em formato amigável ao usuário

```ts
@Pipe({
  name: 'uppercase',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string|null|undefined): string|null {
    if (value == null) return null;
    if (typeof value !== 'string') {
      throw invalidPipeArgumentError(value);
    }
    return value.toUpperCase();
  }
}
```
</div>

::right::

<div class="left-side">
<div>
Exemplo:

```html
<div>
  <p> {{ name | uppercase }}</p>
</div>
```
</div>

As pipes podem receber parâmetros que são passados como argumentos para a função transform.
</div>

<style>
  .right-side {
    padding: 10px;
  }

  .left-side {
    height: 90%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>

---
layout: two-cols
---

# Serviços

Os serviços dão suporte aos componentes, lidando com lógica de negócio,
gerenciamento de estados e comunicação entre componentes.

```ts
@Injectable({})
class AuthService {
  constructor(private http: HttpClient) {}

  public isUserLoggedIn(): boolean {
    /* checa se o usuário está logado */
  } 

  public getAccessToken(): AccessToken {
    /* obtem a token de acesso do armazenamento */
  }

  public async login(username: string, password: string) {
    return await this.http.post(/* login route */)
      .asPromise()
  }
}
```

::right::

<div class="right-side">

- São classes simples do Javascript/Typescript.
- Dependendo de como são configuradas na injeção de depêndencias do angular, podem ser utilizadas para comunicação entre componentes.
</div>

<style>
.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

<!--
Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>
-->


---
layout: two-cols
---

# Módulos

Configura o container de injeção de depêndencias do Angular e permite a 
modularização do projeto por subdomínios de negócio.

```ts {all|2-5|6-7|8|all}
@NgModule({
  declarations: [
    CartPageComponent, 
    PaymentMethodComponent
  ],
  imports: [FormsModule, UiLibraryModule],
  exports: [PaymentMethodComponent],
  providers: [PaymentService],
})
class CheckoutModule {}
```

::right::

<div class="right-side">

<div v-if="$slidev.nav.clicks === 1">

<h3>Declarations</h3>

Nesse campo são declarados os elementos declaráveis (i.e. componentes, diretivas e pipes) que são utilizados por esse módulo.

- Os componentes precisam ser declarados no módulo antes de serem utilizados em templates
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Imports</h3>

Permite a importação de outros módulos que possuam elementos declaráveis ou serviços que são utilizados nos templates desse módulo.
</div>

<div v-if="$slidev.nav.clicks === 2">
<h3>Exports</h3>

Permite a exportação de componentes desse módulo para que possam ser utilizados
em outros módulos (desde que importem este módulo). 
</div>

<div v-if="$slidev.nav.clicks === 3">
<h3>Providers</h3>

Utilizado para declarar serviços no container de injeção de dependências do Angular.

- Os serviços declarados em providers possuem escopo global.
</div>

<div v-if="$slidev.nav.clicks === 4">
  Benefícios da modularização da aplicação: 

  - Lazy loading de módulos
  - Decomposição em microfrontends.
</div>

</div>

<style>
  

  .right-side {
    padding: 50px;
  }

  .right-side h3 {
    margin-bottom: 20px;
    color: gold;
  }
</style>