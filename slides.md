---
# try also 'default' to start simple
theme: dracula
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Apresentacao de conceitos basicos do angular
# persist drawings in exports and build
drawings:
  persist: false
colorSchema: 'dark'
# page transition
transition: slide-left
# use UnoCSS
css: unocss

fonts:
  mono: 'Fira Code'
---

# <carbon-logo-angular color="red" /> Angular <carbon-logo-angular color="red" />

<h3>Conceitos básicos</h3>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

<h1> 
Fundamentos do <span class="angular-name">Angular</span>
</h1>

O Angular é um framework de componentização de interfaces, similar ao React e Vue, que permite 
a arquitetura escalável de páginas web.

<br>

- Possui cinco pilares principais: <span class="components">componentes</span>, <span class="directives">diretivas</span>, <span class="pipes">pipes</span>, <span class="services">serviços</span> e <span class="modules">módulos.</span>
- Uso do framework RxJS para implementação de reatividade e gerenciamento de estados
- Uníco framework de frontend que emprega container de injeção de dependências


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
.angular-name {
  color: #ff726f;
}

li {
  font-size: 1.2em;
}

span.components {
  color: blue;
  font-weight: bold;
}

span.directives {
  color: darkgreen;
  font-weight: bold;
}

span.services {
  color: darkred;
  font-weight: bold;
}

span.modules {
  color: purple;
  font-weight: bold;
}

span.pipes {
  color: gold;
  font-weight: bold;
}
</style>

<!--
Here is another comment.
-->

---
src: ./pages/basics.md
---

---
src: ./pages/di.md
---

---
src: ./pages/rxjs.md
---

---
layout: center
---

# Ferramentas do Angular


---
src: ./pages/forms.md
---

---
src: ./pages/httpclient.md
---


---
src: ./pages/router.md
---

---
src: ./pages/best-practices.md
---
