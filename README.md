# Aula 1 - 12/11/2022

## Resumo de Git e Github


Git:
* Git é um VCS (Version Control System) que permite que você tenha controle de versão de seus arquivos. Com ele você pode criar um repositório local.
* Os arquivos podem ter 5 estados: untracked, unmodified, modified, staged e committed.

  * Untracked: arquivos que não estão sendo rastreados pelo git.

  * Unmodified: arquivos que estão sendo rastreados pelo git, mas não foram modificados.

  * Modified: arquivos que foram modificados, mas não foram adicionados ao stage.

  * Staged: arquivos que foram adicionados ao stage, mas não foram commitados.

  * Committed: arquivos que foram commitados.

* Comandos básicos do git:

  * <code>git init</code>: inicializa um repositório local.

  * <code>git add \<nome do arquivo\></code>: adiciona arquivos ao stage. Para adicionar o diretório todo use "git add .".

  * <code>git commit</code>: commita os arquivos do stage.

  * <code>git push</code>: envia os arquivos do repositório local para o repositório remoto.

  * <code>git status</code>: mostra o estado dos arquivos.

  * <code>git log</code>: mostra o histórico de commits.

  * <code>git --help</code>: mostra a lista de comandos do git.


## Baixando o repositório

Para baixar o repositório, você deve ter o git instalado em sua máquina. Para isso, siga as instruções do site oficial do git: [Tutorial de instalação do git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Após a instalação, você deve criar uma conta no github. Para isso, siga as instruções do site oficial do github: [Tutorial de criação de conta no github](https://help.github.com/en/github/getting-started-with-github/signing-up-for-a-new-github-account)

Para baixar o repositório, você deve clonar o repositório remoto para o seu computador. Para isso, abra o terminal e digite:

```console
> git clone https://github.com/Escritorio-de-Engenharia/trilha-dev.git
```

Após isso você deve ter uma pasta chamada "trilha-dev" no seu computador. Dentro dessa pasta você deve encontrar uma pasta chamada "aula-1". Utilize o terminal para navegar até essa pasta.

Use o comando pwd para verificar se você está na pasta correta.

```console
> pwd
```
Caso não esteja, use o comando cd para navegar até a pasta correta.

```console
> cd nome-da-pasta
```

## Instalando o Node.js

Para instalar o Node.js, siga as instruções do site oficial do [Node.js](https://nodejs.org/en/download/).


O node instal o npm (Node Package Manager), que é um gerenciador de pacotes para o node. Com ele você pode instalar pacotes de terceiros para o node.

Nesse projeto o arquivo package.json contém a lista de pacotes que devem ser instalados. Para instalar os pacotes, use o comando:

```console
> npm install
```

## Rodando o projeto

Para rodar o projeto, use o comando:

```console
> npm run dev
```

Você deve ver uma mensagem parecida com essa:

```console
> trilha-dev@1.0.0 dev
> nodemon src/app.ts

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/app.ts`
[nodemon] clean exit - waiting for changes before restart
```

Isso significa que o projeto está rodando. A partir de agora qualquer mudança no arquivo app.ts será refletida no console.

## TypeScript

O TypeScript é uma linguagem de programação que é transpilada para JavaScript. Isso significa que o código TypeScript é convertido para JavaScript antes de ser executado. Isso permite que você escreva código JavaScript de forma mais segura e com mais recursos.

### Tipos de dados

O TypeScript possui tipos de dados que são verificados em tempo de compilação. Isso significa que se você tentar atribuir um valor de um tipo de dado a uma variável de outro tipo de dado, o compilador irá mostrar um erro.

Você pode utilizar tanto var ou let para declarar variáveis. A diferença entre elas é que o let vai pertencer ao escopo da função, enquanto o var vai pertencer ao escopo global.

```typescript
var a: number = 1;
var b: string = "Hello World";
let c: boolean = true;
let d: number[] = [1, 2, 3];
let e: { } = { a: 1, b: 2, c: 3 };
```

Você também pode declarar variáveis atribuindo um valor a elas e não informando o tipo explicitamente. Nesse caso, o tipo de dado da variável será inferido pelo compilador.

```typescript
var a = 1 // number 
var b = "Hello World" // string
let c = true // boolean
```

Você tem também a declaração de constantes, que são variáveis que não podem ser alteradas.

```typescript
const PI = 3.14
```

### Operadores matemáticos

O TypeScript possui os operadores matemáticos básicos: +, -, \*, /, %, **.

```typescript
var a = 1 + 1 // 2
var b = 1 - 1 // 0
var c = 1 * 1 // 1
var d = 1 / 1 // 1
var e = 1 % 1 // 0
var f = 2 ** 3 // 8
```

### Operadores lógicos

O TypeScript possui os operadores lógicos básicos: &&, ||, !.

```typescript
var a = true && true // true
var b = true && false // false
var c = true || true // true
var d = true || false // true
var e = !true // false
```

### Operadores de comparação

O TypeScript possui os operadores de comparação básicos: ==, ===, !=, !==, >, <, >=, <=.

```typescript
var a = 1 == 1 // true
var b = 1 === 1 // true
var c = 1 != 1 // false
var d = 1 !== 1 // false
var e = 1 > 1 // false
var f = 1 < 1 // false
var g = 1 >= 1 // true
var h = 1 <= 1 // true
null == undefined // true
null === undefined // false
```

### Condicionais

O TypeScript possui as estruturas condicionais if e switch.

```typescript
if (true) {
    console.log("Hello World")
}

var a = 1
switch (a) {
    case 1:
        console.log("Hello World")
        break
    case 2:
        console.log("Hello World")
        break
    default:
        console.log("Hello World")
}
```
Tamém é possível utilizar o operador ternário para fazer comparações.

```typescript
var a = 1
var b = 2
console.log(a == b ? "a é igual a b" : "a é diferente de b")
```

### Laços de repetição

O TypeScript possui as estruturas de repetição for, while e do while.

```typescript
for (var i = 0; i < 10; i++) {
    console.log(i)
}

var i = 0
while (i < 10) {
    console.log(i)
    i++
}

var i = 0

do {
    console.log(i)
    i++
} while (i < 10)
```

### Funções

O TypeScript possui as funções.

```typescript
// function nomeDaFuncao(parametro1: tipo, parametro2: tipo): tipoDeRetorno { codigo a ser executado pela função }

function soma(a: number, b: number): number {
    return a + b
}

var soma = function (a: number, b: number): number {
    return a + b
}

// Arrow function
var soma = (a: number, b: number): number => {
    return a + b
}
```

### Template strings

O TypeScript possui as template strings.

```typescript
var a = 1
var b = 2
console.log(`a + b = ${a + b}`) // a + b = 3
```

## Exercício passado no dia da aula
``` 
Escolher dois valores, um inicial e um final
Percorrer todos os valores dentro desse intervalo de forma decrescente, ou seja,
do maior valor para o menor
Guardar em uma variável a soma de todos os valores pares
Guardar em uma variável a quantidade de valores ímpares
Printar a variável contendo a soma dos valores pares da seguinte forma:
 A soma dos números pares é x
Printar a variável contendo a quantidade de valores ímpares da seguinte forma:
 Existem x números ímpares
Lembre-se de aplicar tudo que você aprendeu
```
Forma de resolução aplicando tudo que foi aprendido
```typescript
const initialValue: number = 100;
const finalValue: number = 0;

let oddQuantity: number = 0;
let evenAccumulator: number = 0;

const sumValue = (sumAccumulator: number, value: number): number => sumAccumulator + value;

const printEvenSum = (sumAccumulator: number): string => `A soma dos números pares é ${sumAccumulator}\n`;

const printOddQuantity = (quantity: number): string => `Existem ${quantity} números ímpares\n`;

function main(): void {
    for(let currentValue = initialValue; currentValue >= finalValue; currentValue--) {
        currentValue % 2 == 0 ? evenAccumulator = sumValue(evenAccumulator, currentValue) : oddQuantity++;
    }

    console.log(printEvenSum(evenAccumulator));
    console.log(printOddQuantity(oddQuantity));
}

main();
```
