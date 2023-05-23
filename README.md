![Roadmap dos repositórios que representam o caminho de aprendizagem: mongodb, node.js, apis, segurança em aplicações web e projeto mão na massa](assets/men-stack-project-roadmap.jpeg)


![Gif da construção de uma API](assets/build-api.gif)

Vamos consumir uma API de terceiros?

# API

As APIs (Application Programming Interfaces) têm suas origens nas primeiras etapas do desenvolvimento de software, quando os programadores começaram a buscar maneiras de reutilizar código e compartilhar funcionalidades entre diferentes programas.

No início, *as APIs eram frequentemente fornecidas por meio de bibliotecas, onde um conjunto de funções ou rotinas eram disponibilizados para que os desenvolvedores pudessem utilizá-los em seus programas. Essas bibliotecas permitiam que os desenvolvedores chamem funções específicas para realizar determinadas tarefas, sem precisar se preocupar com a implementação detalhada dessas tarefas.*

*Com o advento das redes de computadores e a evolução da internet, as APIs se tornaram uma parte essencial da comunicação entre sistemas distribuídos*. As APIs começaram a ser usadas para permitir que diferentes aplicativos e serviços se comunicassem entre si, compartilhando dados e funcionalidades. Essa abertura das funcionalidades de um sistema por meio de APIs permitiu a integração de diferentes aplicativos, possibilitando a criação de ecossistemas de software interconectados.

Portanto, *API (Application Programming Interface) é um conjunto de regras e protocolos que define como diferentes software e sistemas podem interagir e se comunicar entre si. Ela fornece uma interface bem definida que permite que os desenvolvedores acessem e utilizem as funcionalidades de um software, serviço ou plataforma específica.*

Uma API pode ser vista como um contrato entre diferentes componentes de software. Ela especifica as formas pelas quais as solicitações e as respostas devem ser estruturadas, os tipos de dados que podem ser enviados e recebidos, os métodos ou operações disponíveis, e as regras de autenticação e autorização.

À medida que a demanda por interoperabilidade e integração aumentava, surgiram abordagens padronizadas para a criação de APIs. Uma delas é a arquitetura REST (Representational State Transfer), que define um conjunto de princípios e convenções para o design de APIs web baseadas no protocolo HTTP.

Hoje em dia, as APIs são amplamente utilizadas em todos os setores da indústria de software. Elas permitem que aplicativos e serviços se comuniquem e interajam uns com os outros, seja para compartilhar dados, acessar serviços específicos ou realizar operações específicas. As APIs desempenham um papel fundamental na construção de aplicativos modernos, possibilitando a integração com terceiros, a criação de ecossistemas de desenvolvedores e a construção de produtos e serviços mais poderosos e flexíveis.

<br />
<br />

## Tipos de API

As APIs podem ser encontradas em diversos contextos, como:

- *APIs web:* são APIs projetadas para comunicação entre sistemas na web. Elas são geralmente baseadas em padrões como HTTP (Hypertext Transfer Protocol) e podem fornecer funcionalidades como acesso a dados, operações de CRUD (Create, Read, Update, Delete), integração com serviços externos, entre outros.

- *APIs de serviços e plataformas:* muitas empresas e provedores de serviços disponibilizam APIs que permitem que os desenvolvedores acessem e utilizem as funcionalidades e dados de suas plataformas e serviços. Por exemplo, APIs de redes sociais, APIs de pagamento, APIs de serviços de geolocalização, entre outras.

- *APIs de bibliotecas e frameworks:* muitas bibliotecas e frameworks de software fornecem APIs para que os desenvolvedores possam utilizar suas funcionalidades e recursos em seus próprios aplicativos. Por exemplo, APIs de frameworks web como Express.js ou Django, APIs de bibliotecas de processamento de imagem, APIs de bibliotecas de manipulação de banco de dados, entre outras.

As APIs podem ser documentadas e fornecidas aos desenvolvedores por meio de documentação técnica, incluindo especificações de endpoints, parâmetros e formatos de dados. Além disso, muitas APIs são acompanhadas de SDKs (Software Development Kits) ou bibliotecas cliente que facilitam a interação com a API em diferentes linguagens de programação.

### API Pública e API Privada

As APIs podem ser públicas ou privadas

A diferença entre uma API pública e uma API privada está relacionada à disponibilidade e ao acesso das APIs para os desenvolvedores.

- *API Pública (Public API):*
Uma API pública é projetada para ser acessível e utilizada por desenvolvedores externos à organização ou empresa que a disponibiliza. Essas APIs são geralmente destinadas a fins de integração de terceiros, permitindo que outros desenvolvedores criem aplicativos, serviços ou produtos que se integrem à plataforma ou serviço fornecido pela organização.

As APIs públicas são normalmente bem documentadas, possuem um processo de autenticação e autorização definido e podem ter limitações de acesso, como limites de taxa (rate limits) ou cotas de uso. As organizações que disponibilizam APIs públicas geralmente têm uma estratégia de desenvolvedores e oferecem suporte aos desenvolvedores que as utilizam.

Exemplos de APIs públicas incluem as APIs do Twitter, Facebook, Google Maps, Stripe, entre outras. Essas APIs são amplamente utilizadas por desenvolvedores externos para criar integrações com as plataformas e serviços dessas empresas.

- *API Privada (Private API):*
Uma API privada, por outro lado, é destinada a ser utilizada internamente dentro de uma organização ou empresa. Ela não é exposta publicamente para acesso externo e seu uso é restrito aos aplicativos e serviços desenvolvidos pela própria organização.

As APIs privadas são usadas para permitir a comunicação e integração entre diferentes sistemas internos, compartilhando dados e funcionalidades entre eles. Elas podem ser usadas para facilitar a troca de informações entre aplicativos, automatizar processos internos e melhorar a eficiência operacional.

As APIs privadas podem ter menos restrições em termos de documentação e suporte, uma vez que são destinadas ao uso interno. No entanto, ainda é importante que elas sejam bem projetadas e documentadas para facilitar a manutenção e o desenvolvimento de aplicativos internos.

> 👉  Em resumo, uma API pública é disponibilizada para desenvolvedores externos e permite a integração com uma plataforma ou serviço, enquanto uma API privada é usada internamente dentro de uma organização para permitir a comunicação entre sistemas internos. A API pública é focada em fornecer acesso a recursos para terceiros, enquanto a API privada é usada para facilitar a comunicação e integração interna.

<br />
<br />

# Prática

É possível consumir uma API dentro de outra API!

- Vamos utilizar a [API do studio ghibli](https://studio-ghibli-films-api.herokuapp.com/) e o npm package [axios](https://www.npmjs.com/package/axios) para testar

- Vamos instalar o pacote axios utilizando:

```

$ npm i bcrypt

```

- O código, no controller, fica mais ou menos assim: 

```

const getAllGhlibiMovies = async (req, res) => {
  const response = await axios.get("https://ghibliapi.herokuapp.com/films");
  const data = await response.data;

  res.status(200).send(data);
};

```

- Já no arquivo de rotas, criamos uma rota para conectar com a função assíncrona que gerencia a requisição e a reposta:

```
router.get("/ghlibi", controller.getAllGhlibiMovies);

```

- E no postman, ou similar, podemos testar o retorno utilizando:

```
http://localhost:PORT/movies/ghibli
```