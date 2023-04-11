---
layout: center
---

# Boas práticas no Angular

---

# Arquitetura de Componentes

Possível agrupar os componentes em três grupos principais


- <span class="page-comp">Page components</span>: componentes que representam páginas da aplicação

  - Utilizados na definição de rotas da aplicação
  - Normalmente não possuem muita lógica, apenas definido layout da página

- <span class="cont-comp">Container components</span>: componentes que agrupam seções da página por funcionalidade

  - Possuem a maior parte da lógica do layout aplicação.
  - Normalmente armazenam o estado da interface.

- <span class="pres-comp">Presentational components</span>: componentes que representam seções reutilizaveis da interface

  - Não possuem muita lógica.
  - Se comunicam principalmente por meio de Input e Outputs

<style>
.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>

---

# Arquitetura de Componentes - Exemplo

<div class="components-example">
<div class="legenda">

- <span class="page-comp">Page</span>
- <span class="cont-comp">Container</span>
- <span class="pres-comp">Presentational</span>
</div>
<img src="/imgs/twitch-page-components.png" class="twitch-image"/>
</div>

<style>
.components-example {
  height: 80%;
  display: flex;
}

.legenda {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-items: center;
}

.twitch-image {
  flex: 8;
  height: 100%
}

.page-comp {
  color: red;
}

.cont-comp {
  color: blue;
}

.pres-comp {
  color: lightgreen;
}
</style>

---
layout: two-cols
clicks: 1
---

# Estrutura do projeto

<div class="left-side" v-if="$slidev.nav.clicks === 0">
Os módulos de um projeto Angular podem ser divididos em três tipos:

- Feature modules: Agrupam os componentes de um contexto do projeto
- Core module: Módulo único que armazena classes e serviços globais
- Shared module: Armazena componentes, diretivas e pipes que são utilizados por toda a aplicação

</div>

<div class="left-side" v-if="$slidev.nav.clicks === 1">

```
src/app/
     home/
      pages/
      components/
      home.module.ts <-- shared.module.ts
     settings/
      pages/
      components/
      settings.module.ts <-- shared.module.ts
    ... outros modulos ..
     core/
      services/
      models/
      http-interceptors/
      guards/
      enumerations/
      utilities/
      core.module.ts
    shared/
      shared.module.ts
      components/
      directives/
      pipes/
```
</div>

::right::

<div class="right-side">
<img src="/imgs/angular-modules.png" class="modules-example"/>
</div>

<style>
h1 {
  margin-bottom: 10px !important;
}
.left-side {
  padding: 10px;
  height: 70%;
}

.right-side {
  padding: 10px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-side code {
}

.line {
  margin: 0px 0px !important;
  line-height: 10% !important;
}
</style>