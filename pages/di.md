---
clicks: 4
---

# Injeção de dependências

Técnica de desenvolvimento de software que permite que aplicações sejam mais flexíveis, extensíveis e testáveis.

<div v-if="$slidev.nav.clicks === 1">
- Para que as depêndencias sejam injetadas, a classe precisa abrir mão de suas instanciações
</div>

<br/>

<div v-if="$slidev.nav.clicks === 2">
Exemplo: a classe abaixo está acoplada as suas depêndencias.

- Alterar o banco de dados requer alterações em todos os services
- É díficil testar a classe se o MongoClient faz uma conexão ao banco de dados

```ts
class BalanceService {
  private accountRepository: AccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository(new MongoClient(MONGO_URL));
  }

  public transfer(from: Account, to: Account, amount: number) {
  }
}
```
</div>

<div v-if="$slidev.nav.clicks === 3">
Exemplo: Após introdução de injeção de depêndencias 

```ts {1-2,7-9}
const repo = new AccountRepository(new MongoClient(MONGO_URL));
const balanceService = new BalanceService(repo)

class BalanceService {
  private accountRepository: AccountRepository;

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository; 
  }

  public transfer(from: Account, to: Account, amount: number) {
  }
}
```
</div>

<div v-if="$slidev.nav.clicks === 4">
<span class="destaque">A "Injeção de depêndencias" nada mais é que a passagem de
depêndencias para a classe dependente, por meio de seu construtor,
propiedades ou parâmetros de funções. </span>
</div>

<br/>

<div v-if="$slidev.nav.clicks === 4">
Porém em sistemas complexos, instanciar todas as classes e suas depêndencias manualmente é um processo tedioso.
<br/>
<br/>
<br/>
<div class="solution">
  Solução: <span class="answer">Container de injeção de depêndencias</span>
</div>
</div>

<style>
.destaque {
  color: gold;
}

.solution {
  text-align: center;
  font-size: 1.3em;
}

.answer {
  color: gold;
}

</style>

---

# Resolução de dependências no Angular

<div class="img-section">
<div class="left">
<img src="imgs/angular-di.webp" class="di-img" />
</div>
<div class="right">

```ts
@NgModule({
  provides: [ExampleService]
})
class RootModule {}
```

```ts
@Component({
  provides: [ExampleService]
})
class RootComponent {}
```
</div>
</div>

<style>
.img-section {
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: stretch;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.di-img {
  height: 95%;
  width: 95%;
}
</style>