# Documentação Server
<br>

<div align="center">

## Iniciar projeto em node

</div>

Para iniciar o projeto em Node, é necessário ir até a pasta root do projeto e digitar o seguinte comando: 
```
  npm init -y
```
Esse comando irá gerar o arquivo package.json que contém algumas informações importantes sobre o projeto.

<br><hr><br>

<div align="center">

## Framework: Fastify

</div>

<br>

### O que é o Fastify?

> Fastify é um framework Back-End para JavaScript e pode ser utilizado com o ecossistema NodeJS, bem parecido com o express e inspirado no Hapi com seu modelo de plug-ins. 
<br><br>
> Fastify realmente cumpre o que promete, que é a velocidade nas requisições de suas aplicações. 
<br><br>
> Isso acontece porque o framework possui uma arquitetura baseada em plugins.
<br><br>
> Dessa forma, há menor sobrecarga, o que ajuda em muito no desenvolvimento de aplicações baseadas em microsserviços.
<br><br>
> Além disso, devido a sua arquitetura, a ferramenta também garante maior segurança e performance, constituindo-se em uma boa experiência para a pessoa desenvolvedora.
<br><br>
> O encapsulamento permite que cada plug-in use suas próprias dependências e hooks se houver necessidade, e esse comportamento possibilita maior reusabilidade de software. Além disso, o completo encapsulamento para os plug-ins fornece um roteamento mais rápido devido a renderização mais veloz do JSON.

<br><br>

### Principais recursos

> - Alto desempenho: até onde sabemos, Fastify é um dos mais rápidos web frameworks 'na área', dependendo da complexidade do código, com o Fastify, você pode servir mais de 76 mil requisições por segundo.
<br><br>
> - Extensível: Fastify é completamente extensível via hooks, plugins e decorators.
<br><br>
> - Baseado em Schema: mesmo não sendo obrigatório, recomendamos o uso de JSON Schema para validar suas rotas e serializar seus retornos, internamente o Fastify compila o schema em funções de alto desempenho.
<br><br>
> - Logging: logs são extremamente importantes mas são dispendiosos; escolhemos o melhor logger para quase remover esse 'custo'!
<br><br>
> - Amigável ao Desenvolvedor: o framework foi construido para ser significante ao mesmo tempo que realmente ajuda o desenvolvedor no uso dia após dia, sem sacrificar desempenho ou segurança.

<br>

<div align="center">

### Mais sobre [Fastify](https://github.com/fastify/docs-portuguese)...

</div>

<br><hr><br>

<div align="center">

## TypeScript

</div>

<br>

### O que é?


> TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.

<br>

### Principais vantagens

> A principal vantagem do TypeScript em relação ao JavaScript “tradicional” é adicionar recursos importantes e úteis para a construção de projetos em larga escala, como tipagem estática, forte e automática, orientação a objetos e a possibilidade de descobrir e corrigir erros em tempo real durante o desenvolvimento.

<br>

### Como funciona?

```ts
  //Sintaxe
  const varName: varType = valor;
```

```ts
  const valor: number = 5;

  // Erro, a função só pode retornar um number e essa função retornaria uma String
  function soma(): number {
    return valor + '5'; 
  }

  // Retorna '55'
  function concat(): String {
    return valor + '5'; 
  }

  // Crio um tipo estático de um objeto  
  type User {
    name: String,
    age: Int,
  }

  // Crio uma função colocando uma tipagem nela (User)
  function showUserName(user : User) {
    return user.name
  }

  // Crio um objeto com name e age
  const user1 = {
    name: 'Rhogger',
    age: 20,
  }

  // retorna 'Rhogger'
  showUserName(user1)

  // Crio um objeto somente com age
  const user 2 = {
    age: 25
  }

  // Erro, pois esse objeto não é identico a tipagem User
  showUserName(user2)
```

<br>

### Configurações

<br>

#### **Instalação como Dependência de Desenvolvimento**

```
  npm i typescript -D
```

<br>

#### **Configuração do TypeScript no projeto**

> Cria o arquivo **```tsconfig.json```** que é a configuração do TypeScript no projeto.

```
  npx tsc --init
```

> Dentro desse arquivo, é necessário mudar o **```target```** de **```"es2016"```** para **```"es2020"```**, pois o Node suporta features mais recentes do JavaScript

<br>

#### **Executando arquivo do Node com TypeScript**

> Agora para executar algum código sem termos que fazer alguma conversão do Node para o TS, bastamos instalar uma outra depêndencia de desenvolvimento.

```
  npm i tsx -D 
``` 

> Após isso, podemos configurar esse comando através do **```package.json```**, deixando mais simples a execução.

```json
  // package.json

  // Original
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }

  // Modificado
  "scripts": {
    "server": "tsx watch src/server.ts"
  }

  // Onde "test" você coloca o nome que quiser;
  // O valor é: 
  // 1° - Comando tsx (que executa o arquivo),
  // 2° - watch é o comando que irá fazer o console entrar em modo watch, ou seja, a cada alteração feita no código, o arquivo será executado automáticamente,
  // 3° - Caminho do arquivo (src/server.ts)
```
<br>

#### **Sair do modo Watch nos consoles**

> Para sair do modo Watch, basta clicar **```Ctrl```** + **```C```**.

<br><hr><br>

<div align="center">

## Sobre o Back-End da aplicação

</div>

<br>

> Nosso back-end será uma [API RESTful](https://www.hostinger.com.br/tutoriais/api-restful), ou seja, uma API que provê recursos, acessos à entidades, funcionalidades (criação, edição, remoção, etc) através de rotas http.

> Ele terá algumas rotas, que são recursos que o Front-End vai acessar dentro da aplicação.

