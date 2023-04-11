
# Programação Reativa no Angular

<div class="side-by-side">
<div class="rxjs-text">
O Angular utiliza a biblioteca RxJS para implementar reatividade.
</div>

<img src="imgs/rxjs-logo.jpeg" class="rxjs-logo" />
</div>

<div class="below side-by-side">
<div class="react-description">
Na programação reativa, a lógica do sistema é definida de forma declarativa como efeito colaterais de eventos do sistema.

Em frameworks de interface com paradigma reativo, as interfaces são definidas em função de alterações (i.e. eventos) no estado do sistema.
</div>

<div>
O React <carbon-logo-react color="blue"/> é um exemplo de framework reativo:

```ts

const RootComponent = () => {
  const [isLoggedIn, _]= useState(false)

  if (isLoggerIn) {
    return <HomePage />
  } else {
    return <AuthPage />
  }
}
```
</div>
</div>

<style>
.rxjs-name {
  color: #E11299;
}

.rxjs-text {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}

.side-by-side {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.below {
  height: 300px;
  align-items: center;
}

.react-description {
  max-width: 350px;
  margin-right: 30px;
}
</style>


---
layout: two-cols
---

<h1> 
<span class="rxjs-name">RxJS</span> - Observables
</h1>

<br />

#### "Um observable é um produtor de multiplos valores, emitindo-os para seus consumidores." - [rxjs.dev](https://rxjs.dev/guide/observable)

<br />

Um observable é um emissor de valores ao longo do tempo, sem que seu consumidor possua influência sobre quando são emitidos.

Isto pode ser utilizado para representar diversos conceitos:

- Eventos do mouse - (multiplos eventos ao longo tempo)
- Requisição HTTP - (Unico evento ao longo tempo)

::right::

<div class="right-side" v-click>
Exemplo:

```ts
const obs = new Observable(sub => {
  let count = 1;

  let handle = setInterval(() => {
    sub.next(1);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

const subs = obs.subscribe((count) => {
  console.log(count); // 1, 2, 3, 4 ....
})

setTimeout(() => subs.unsubscribe(), 10000)
```

</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

.right-side {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

---
layout: two-cols
clicks: 4
---


<h1> 
<span class="rxjs-name">RxJS</span> - Comparação
</h1>


<div class="left-side">

<img src="imgs/rxjs-observable.png" class="cmp-img" />

</div>

::right::

<div class="right-side" v-if="$slidev.nav.clicks === 1">

#### Funções retornam apenas um único valor e o momento do retorno do valor é definido pelo consumidor

```ts
function double(value: number) {
  return number * 2;
}

// Consumidor determina quando o
// valor será retornado.
setTimeout(() => {
  const doubled = double(4);
}, 2000)
```
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 2">

#### Iteradores retornam multiplos elementos e o momento de retorno do valor é definido pelo consumidor

```ts
function* fibbonacci() {
  let previous = 0;
  let current = 1;

  // Multiplos elementos são retornados
  while (true) {
    yield previous;
    let value = previous + current;
    previous = current;
    current = value;
  }
}

const iter = fibbonacci();

/* O consumidor determina quando 
  os elementos são retornados */
setInteval(() => {
  const value = iter.next();
}, 1000)
```
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 3">

#### Promises retornam apenas um único valor, porém o produtor decide quando o valor será retornado

```ts
const afterTimeout = new Promise((resolve, _) => {
  // Produtor define quando o valor será retornado
  setTimeout(() => {
    resolve(10);
  }, 1000);
})

// O consumidor precisa esperar o valor ser emitido
afterTimeout()
  .then((value) => console.log(value))

```
</div>

<div class="right-side" v-if="$slidev.nav.clicks === 4">

#### Observables retornam múltiplos valores e o produtor decide quando eles serão retornados

```ts
const counter = new Observable((subs) => {
  // Produtor define quando os valorres serão retornados
  // Multiplos valores são emitidos
  let count = 1;
  let handle = setInterval(() => {
    subs.next(count);
    count++;
  }, 1000);

  return () => clearInterval(handle);
})

// O consumidor espera os valores serem emitidos
counter
  .subscribe((value) => console.log(value))

```
</div>

<style>
  h1 .rxjs-name {
    color: #E11299;
  }

  .left-side {
    padding: 0 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } 

  .right-side {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
</style>