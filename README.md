![Roadmap dos repositórios que representam o caminho de aprendizagem: mongodb, node.js, apis, segurança em aplicações web e projeto mão na massa](assets/men-stack-project-roadmap.jpeg)


Vamos começar a criação da nossa primeira API em Node.js?

![Menina digitando em um computador](assets/dev-type.gif)

Usaremos: [Node.js](https://nodejs.org/), utilizando [Express](https://www.npmjs.com/package/express) e conectada ao [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/). 

Vem conferir um pouquinho sobre cada um desses tópicos!

# Node.js

Node.js é um ambiente de tempo de execução (runtime) JavaScript de código aberto, multiplataforma e orientado a eventos. Ele permite que os desenvolvedores escrevam código do lado do servidor em JavaScript, que tradicionalmente é uma linguagem de script do lado do cliente. O Node.js foi criado por Ryan Dahl em 2009 e é construído em cima do mecanismo JavaScript V8, que também é usado pelo navegador da web Google Chrome.

Uma das principais características do Node.js é que ele usa um modelo de I/O não bloqueante e orientado a eventos, o que o torna muito escalável e eficiente em termos de recursos. Ele também inclui um sistema de gerenciamento de pacotes, o npm, que é um dos maiores repositórios de bibliotecas de software abertas disponíveis para desenvolvedores.

O Node.js é amplamente utilizado para desenvolvimento de aplicativos da web e APIs RESTful, bem como para construir aplicativos de rede e streaming, aplicativos de linha de comando, ferramentas de desenvolvimento e muito mais. Como uma plataforma de servidor altamente flexível e poderosa, o Node.js é amplamente adotado em grandes empresas e startups em todo o mundo.


## Histórico

A história do Node.js começa em 2009, quando Ryan Dahl apresentou o projeto pela primeira vez em uma conferência de desenvolvedores. Dahl estava frustrado com as limitações das tecnologias de servidor existentes e queria criar uma plataforma que fosse escalável, eficiente em termos de recursos e permitisse que os desenvolvedores usassem JavaScript no lado do servidor.

Dahl usou o mecanismo de JavaScript V8 do Google Chrome para construir o Node.js, que é um ambiente de tempo de execução JavaScript. O V8 é altamente otimizado para o desempenho e executa o código JavaScript muito rapidamente, permitindo que o Node.js seja altamente escalável.

O Node.js foi lançado oficialmente em 27 de maio de 2009, com a versão 0.1.0. Desde então, o projeto cresceu rapidamente em popularidade e se tornou uma das plataformas de servidor mais usadas em todo o mundo. O Node.js é mantido por uma comunidade ativa de desenvolvedores e tem um ecossistema rico de bibliotecas e ferramentas de desenvolvimento.

Nos anos seguintes ao lançamento do Node.js, surgiram várias empresas que se concentraram no desenvolvimento de ferramentas e serviços para a plataforma, incluindo a npm, Inc. em 2014, que é responsável pelo gerenciador de pacotes npm, um dos maiores repositórios de pacotes de software do mundo.
<details>

<br />
<summary>
Vantagens
</summary>

- *Velocidade:* O Node.js é conhecido por ser muito rápido e eficiente no processamento de solicitações. Isso ocorre porque ele utiliza o motor V8 do Google Chrome para executar o código JavaScript.

- *Escalabilidade:* O Node.js foi projetado para lidar com muitas conexões simultâneas, tornando-o uma escolha popular para aplicativos e APIs escaláveis.

- *Compartilhamento de código:* O Node.js permite que os desenvolvedores usem o mesmo idioma tanto no lado do cliente quanto no lado do servidor, tornando mais fácil para eles compartilhar código e reutilizar soluções.

- *Grande comunidade:* O Node.js possui uma grande comunidade de desenvolvedores e mantenedores de pacotes, o que significa que há uma ampla variedade de recursos e ferramentas disponíveis.

- *Flexibilidade:* O Node.js é altamente flexível, porque ele é baseado em módulos. Os desenvolvedores podem usar pacotes e bibliotecas existentes para adicionar recursos ao seu aplicativo ou API, ou podem criar seus próprios módulos personalizados. 

- *Compatibilidade:* É altamente adaptável em termos de sistema operacional e ambiente de hospedagem. Ele pode ser executado em várias plataformas, incluindo Windows, Linux e macOS, e pode ser hospedado em servidores físicos, virtuais ou na nuvem.
</details>
<br />

<details>
<summary>
Desvantagens
</summary>

- *Não é adequado para todas as tarefas:* Embora o Node.js seja muito bom em lidar com muitas conexões simultâneas, ele pode não ser a melhor escolha para tarefas que exigem muita computação ou processamento intensivo.

- *Single-threaded:* O Node.js é single-threaded, o que significa que ele pode não ser tão eficiente em lidar com tarefas que exigem muitos processos em paralelo.

- *Dependências:* Como o Node.js é dependente de pacotes e bibliotecas externas, é importante monitorar as dependências e atualizá-las regularmente para evitar problemas de segurança ou compatibilidade.

- *Curva de aprendizado:* Embora o Node.js seja relativamente fácil de aprender para quem já conhece JavaScript, ainda pode haver uma curva de aprendizado para quem é novo na plataforma.

- *Problemas de gerenciamento de memória:* O Node.js pode ter problemas com o gerenciamento de memória, especialmente quando há muitas solicitações simultâneas. No entanto, existem ferramentas e práticas recomendadas que podem ajudar a lidar com esses problemas.

</details>
<br />

## Module e Require

Em Node.js, *um módulo é uma unidade de código reutilizável que encapsula uma funcionalidade específica*. Um módulo pode incluir variáveis, funções, objetos ou outras estruturas de código que são encapsuladas em um escopo separado, tornando-as mais fáceis de gerenciar e reutilizar.

O Node.js utiliza o sistema de módulos CommonJS, que permite aos desenvolvedores criar e compartilhar módulos de maneira fácil e eficiente. Para usar um módulo em um arquivo Node.js, você precisa usar a função "require", que é um método para carregar módulos no Node.js. A função "require" recebe um parâmetro que é o nome do módulo que você deseja carregar e retorna o objeto exportado pelo módulo.

Por exemplo, se você quiser usar o módulo "http" do Node.js para criar um servidor web, você pode usar a função "require" para carregar o módulo no seu arquivo, como mostrado abaixo:

```
const http = require('http');
```

Nesse exemplo, a função "require" carrega o módulo "http" e atribui o objeto exportado do módulo à constante "http". Isso permite que você use as funções e objetos do módulo "http" em seu arquivo.

Os módulos em Node.js geralmente exportam uma função ou objeto específico que pode ser usado em outros arquivos Node.js. Para fazer isso, os módulos usam a variável global "module.exports" para exportar a função ou objeto desejado.

Por exemplo, um módulo que exporta uma função pode ser definido como:

```
function minhaFuncao() {
  // código da função
}

module.exports = minhaFuncao;
```

Isso permite que outros arquivos Node.js usem a função "minhaFuncao" ao carregar o módulo.

<details>
<summary>
Empresas que utilizam Node.js
</summary>

- *Netflix:* utiliza o Node.js para construir e gerenciar serviços de streaming de vídeo em grande escala.

- *LinkedIn:* utiliza o Node.js para o desenvolvimento de diversas aplicações, incluindo o seu aplicativo de desktop.

- *Walmart:* utiliza o Node.js para criar aplicações escaláveis e em tempo real para gerenciamento de estoque e atendimento ao cliente.

- *PayPal:* utiliza o Node.js em sua plataforma de pagamentos e em outras aplicações internas.

- *Uber:* utiliza o Node.js para a construção de diversas aplicações, incluindo a plataforma de gerenciamento de pagamentos.

- *NASA:* utiliza o Node.js para processar e analisar grandes quantidades de dados em tempo real.

- *Mozilla:* utiliza o Node.js em diversos projetos, incluindo o Firefox Developer Edition.

</details>

<br />
<br />

# Usando Node.js para construir uma API

Há várias razões pelas quais o Node.js é uma excelente escolha para construir APIs. Aqui estão algumas delas:

- *Velocidade e eficiência:* O Node.js foi projetado para lidar com muitas conexões simultâneas de forma escalável e eficiente. Isso significa que o Node.js pode lidar com muitas solicitações de API ao mesmo tempo sem sobrecarregar o servidor.

- *JavaScript em todo lugar:* O JavaScript é a linguagem de programação mais popular do mundo, e o Node.js permite que os desenvolvedores usem o mesmo idioma tanto no lado do cliente quanto no lado do servidor. Isso significa que os desenvolvedores podem escrever APIs e aplicativos web em uma única linguagem de programação, o que pode simplificar muito o desenvolvimento e manutenção de software.

- *Grande ecossistema de pacotes e bibliotecas:* O Node.js tem um grande ecossistema de pacotes e bibliotecas, muitos dos quais são projetados para ajudar os desenvolvedores a construir APIs rapidamente e com menos esforço. Por exemplo, o framework Express.js simplifica a criação de APIs em Node.js.

- *Facilidade de uso:* O Node.js é relativamente fácil de aprender e usar, especialmente se você já está familiarizado com JavaScript. Isso significa que os desenvolvedores podem começar a criar APIs em Node.js com pouco tempo e esforço.

- *Flexibilidade:* O Node.js é altamente flexível e pode ser usado para criar APIs em uma variedade de plataformas e sistemas operacionais. Além disso, ele pode ser facilmente integrado com outras tecnologias, como bancos de dados e serviços de terceiros.

Por todas essas razões, o Node.js é uma escolha popular para a construção de APIs. Ele é *rápido, eficiente e fácil de usar*, permitindo que os desenvolvedores criem APIs escaláveis e eficientes em pouco tempo e com menos esforço.

## API

Uma API web (Application Programming Interface) é *uma interface de programação que permite a comunicação entre diferentes sistemas de software*. Em outras palavras, é um *conjunto de regras e protocolos que permitem que aplicativos ou sistemas diferentes se comuniquem e compartilhem dados uns com os outros*.

Uma API web é uma API que utiliza a arquitetura web para se comunicar, geralmente utilizando o *protocolo HTTP* (Hypertext Transfer Protocol). Isso significa que as solicitações de dados são feitas através da internet e são respondidas com dados estruturados em formatos comuns, como JSON (JavaScript Object Notation) ou XML (Extensible Markup Language).

As APIs web são usadas em muitos cenários diferentes, incluindo:

- *Integração de diferentes sistemas de software:* as APIs web permitem que diferentes aplicativos se comuniquem e compartilhem dados uns com os outros, mesmo que eles tenham sido desenvolvidos em plataformas diferentes.

- *Criação de serviços web:* muitos serviços web populares, como o Twitter e o Google Maps, disponibilizam suas funcionalidades através de APIs web para que outros desenvolvedores possam integrá-los em seus próprios aplicativos.

- *Desenvolvimento de aplicativos móveis:* muitos aplicativos móveis dependem de APIs web para obter dados e funcionalidades a partir de serviços online.

- *Automação de processos empresariais:* as APIs web podem ser usadas para automatizar processos empresariais, como o gerenciamento de estoques, o processamento de pagamentos e muito mais.

> 👉 Em resumo, *uma API web é uma interface de programação que permite a comunicação entre diferentes sistemas de software através da internet*, e é uma parte fundamental da arquitetura de muitos aplicativos modernos e serviços online.

# O que mais usaremos nessa API?

Para construir essa API, utilizaremos algumas outras tecnologias. Abaixo você pode ler um pouquinho sobre cada uma delas:

## Express
Express é um *framework para Node.js que facilita a criação de aplicativos web e APIs*. Ele fornece uma série de recursos e ferramentas para lidar com solicitações HTTP, gerenciar sessões de usuário, criar rotas de navegação, definir middleware e muito mais.

É amplamente utilizado devido à sua simplicidade, flexibilidade e comunidade ativa. Algumas das principais características do Express incluem:

- *Criação de rotas de navegação:* Express fornece uma maneira fácil de criar rotas para diferentes URLs em seu aplicativo web, permitindo que você defina como o servidor deve lidar com as solicitações de cada URL.

- *Gerenciamento de middleware:* o Express permite que você defina middleware para seu aplicativo, que é executado em cada solicitação HTTP antes de ser enviada ao seu controlador. Isso permite que você defina facilmente funções que manipulam as solicitações, adicionam cabeçalhos HTTP ou executam outras tarefas.

- *Gerenciamento de sessão:* o Express inclui suporte para gerenciar sessões de usuário, permitindo que você armazene dados do usuário em cada solicitação. Isso é útil para criar aplicativos web que exigem autenticação de usuário ou para manter o estado do aplicativo entre as solicitações.

- *Suporte para middleware de terceiros:* o Express é compatível com uma grande variedade de middleware de terceiros, permitindo que você estenda facilmente as funcionalidades do seu aplicativo.

- *Compatibilidade com outros pacotes:* o Express é compatível com muitos outros pacotes Node.js, incluindo pacotes para lidar com solicitações de banco de dados, manipulação de arquivos, processamento de imagens e muito mais.

> 👉 Em resumo, o Express é um framework popular e versátil para Node.js que permite a criação rápida e fácil de aplicativos web e APIs. Com suas muitas ferramentas e recursos, o Express pode ajudar a simplificar o processo de desenvolvimento web em Node.js.


## NPM

O NPM (Node Package Manager) é um *gerenciador de pacotes para o Node.js*, que permite instalar, compartilhar, atualizar e gerenciar dependências de pacotes de maneira fácil e eficiente. 

É a maior biblioteca de pacotes de código aberto do mundo, e os desenvolvedores podem acessar milhares de pacotes de código aberto através do NPM. Esses pacotes podem incluir bibliotecas, frameworks, utilitários e outros softwares desenvolvidos para serem usados com Node.js. Alguns exemplos de pacotes populares no NPM incluem o Express, o Socket.io, o Babel e muitos outros.

Além disso, o NPM permite que os desenvolvedores criem seus próprios pacotes e compartilhem com a comunidade. Para fazer isso, eles podem usar o comando "npm init" para criar um arquivo "package.json" que descreve o pacote, suas dependências e outras informações relevantes. Em seguida, eles podem enviar o pacote para o registro público do NPM usando o comando "npm publish".

> 👉 Em resumo, o NPM é uma ferramenta fundamental para o desenvolvimento de aplicativos Node.js, pois permite aos desenvolvedores gerenciar facilmente dependências de pacotes e acessar uma grande biblioteca de pacotes de código aberto.

## MongoDB Atlas

O [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/) é um *serviço de banco de dados gerenciado oferecido pela MongoDB, a empresa por trás do banco de dados NoSQL MongoDB*. É uma plataforma em nuvem que oferece hospedagem, gerenciamento e monitoramento do MongoDB em uma infraestrutura altamente escalável e segura.

Com o MongoDB Atlas, é possível criar e gerenciar clusters de banco de dados MongoDB com facilidade, sem precisar se preocupar com tarefas de gerenciamento de infraestrutura, como provisionamento de servidores, configuração de redes e backups de dados. O serviço também oferece recursos avançados de segurança, como autenticação, criptografia de dados em repouso e em trânsito, além de monitoramento e alertas em tempo real.

O MongoDB Atlas é altamente escalável e flexível, permitindo que os usuários aumentem ou diminuam a capacidade de armazenamento e processamento de seus clusters de acordo com as necessidades do negócio. Além disso, ele oferece integração com várias ferramentas populares de desenvolvimento, como o MongoDB Compass, o MongoDB Stitch e outros.

Para este projeto, usaremos o plano gratuito para fins de teste e desenvolvimento.

### Diferença de librarie, framework e package

Library, framework e package são termos relacionados à programação que descrevem diferentes tipos de software ou recursos que podem ser usados em projetos de desenvolvimento de software. Embora esses termos sejam frequentemente usados de forma intercambiável, eles se referem a conceitos distintos.

- *Biblioteca (Library):* é um conjunto de código que fornece um conjunto de funcionalidades específicas para serem reutilizadas em outros projetos. Uma biblioteca é geralmente uma coleção de classes, funções ou objetos que fornecem uma funcionalidade específica e que pode ser incorporada em um aplicativo existente. As bibliotecas, geralmente, *não têm um fluxo de controle predefinido e o desenvolvedor tem mais controle sobre como usá-las*.

- *Framework:* é uma estrutura que define um conjunto de regras, padrões e diretrizes para construir aplicativos de software. Um framework é, geralmente, uma *coleção de bibliotecas, APIs e outras ferramentas que permitem aos desenvolvedores criar aplicativos de software mais rapidamente e de forma mais consistente*. Ao contrário de uma biblioteca, um framework geralmente possui um fluxo de controle predefinido e define a estrutura e as convenções que devem ser seguidas pelo desenvolvedor.

- *Pacote (Package):* é um *arquivo ou conjunto de arquivos que contém um software, biblioteca ou framework e que pode ser instalado em um projeto para fornecer funcionalidades adicionais*. Um pacote pode ser uma biblioteca, um framework, um aplicativo ou uma ferramenta de linha de comando. É comum que um pacote seja distribuído através de um gerenciador de pacotes, como o npm no caso do Node.js, que permite aos desenvolvedores instalar e gerenciar pacotes em seus projetos de forma fácil e consistente.

> 👉 Em resumo, uma biblioteca é um conjunto de recursos específicos que podem ser reutilizados em projetos de software, um framework é uma estrutura para desenvolver aplicativos que define padrões e convenções, enquanto um pacote é um arquivo ou conjunto de arquivos que contém um software, biblioteca ou framework e pode ser instalado em um projeto para fornecer funcionalidades adicionais.

# Prática

Vamos CRUDAR em Node.js!

- Entender as regras de negócio

- Começando do zero: definir a arquitetura, criar as pastas, iniciar repositório e /ou pacotes

- Conectar o servidor

- Conectar o banco de dados

- Codar o CRUD (:
