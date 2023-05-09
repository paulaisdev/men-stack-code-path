```
**Objetivo:** Entender o que são banco de dados. Neste cenário, será construído a partir de um arquivo excel, a introdução a banco de dados relacionais e não relacionais. Elas conseguirão distinguir a diferença entre banco de dados relacionais e não relacionais.
```

# Conceito de dados e banco de dados

## Dados
Dados são fatos brutos, informações ou estatísticas que podem ser coletadas, armazenadas e processadas em um computador ou sistema de armazenamento de dados. Eles podem assumir muitas formas, incluindo números, palavras, imagens, áudio e vídeo.

Os dados são geralmente considerados a matéria-prima da informação, pois são a base para a geração de conhecimento e insights. Eles podem ser usados para tomar decisões informadas, identificar tendências e padrões, avaliar o desempenho, conduzir pesquisas e muito mais.

Os dados podem ser classificados em diferentes tipos, dependendo de sua natureza e finalidade. Por exemplo, dados estruturados são organizados em tabelas e colunas em um banco de dados relacional, enquanto os dados não estruturados podem incluir informações de texto livre, imagens e vídeos.

Com o avanço da tecnologia e da computação, a quantidade de dados gerados e armazenados tem aumentado exponencialmente, o que levou ao desenvolvimento de tecnologias de análise de dados, como a mineração de dados e a inteligência artificial, que ajudam a extrair informações valiosas a partir desses dados.

## E as informações?

Embora os termos dados e informações sejam frequentemente usados ​​de forma intercambiável, eles têm significados diferentes.

Dados são fatos brutos, sem contexto ou significado intrínseco. Eles podem ser números, palavras, imagens, sons ou qualquer outra coisa que possa ser armazenada e processada eletronicamente. Por exemplo, um banco de dados pode armazenar informações de vendas de uma empresa em uma tabela com colunas para o nome do produto, quantidade vendida, preço unitário e data da venda.

Informações, por outro lado, são dados que foram processados, analisados ou interpretados para adquirir um significado ou contexto. As informações geralmente são o resultado da organização, estruturação e interpretação dos dados para gerar uma compreensão útil ou relevante. Usando o exemplo anterior, as informações podem incluir relatórios de vendas que mostram as tendências de vendas, o desempenho do produto ou o comportamento do cliente.
 
> :point_right: Em resumo, os dados são os fatos brutos e informações são os dados processados que adquiriram um significado útil ou relevante. Os dados são necessários para gerar informações, mas as informações são o que realmente importa para a tomada de decisões e a criação de conhecimento.

<br />

## Banco de Dados

Um banco de dados é um **conjunto organizado de dados armazenados eletronicamente em um ou mais dispositivos de armazenamento de dados, como discos rígidos, memória flash ou servidores de nuvem**. Os dados são organizados em uma estrutura que permite a recuperação e o gerenciamento eficiente e seguro das informações.

Os bancos de dados são amplamente utilizados em sistemas de software para armazenar, gerenciar e recuperar informações de forma eficiente e confiável. Eles são usados em uma ampla gama de aplicativos, desde sistemas bancários e financeiros até sistemas de gerenciamento de inventário e de recursos humanos.

Existem vários tipos de bancos de dados, cada um com suas próprias características e usos específicos. Abaixo estão alguns dos tipos mais comuns de bancos de dados:

+ **Bancos de dados relacionais:** são os mais populares e usam a linguagem SQL para gerenciar e manipular dados em tabelas relacionais.

+ **Bancos de dados NoSQL:** diferentemente dos bancos de dados relacionais, os bancos de dados NoSQL são projetados para lidar com grandes quantidades de dados não estruturados e variáveis. Eles oferecem escalabilidade e flexibilidade, além de permitir o armazenamento de dados em vários formatos.

+ **Bancos de dados de colunas:** organizam os dados em colunas, em vez de linhas. Eles são especialmente úteis para análises de dados em larga escala, como em empresas de tecnologia.

+ **Bancos de dados em memória:** como o nome sugere, os dados são armazenados na memória do computador, em vez de serem armazenados em discos rígidos ou outras formas de armazenamento permanente. Isso os torna muito rápidos em termos de acesso e processamento de dados.

+ **Bancos de dados de pesquisa:** usados para lidar com grandes volumes de informações não estruturadas, como documentos, e-mails e páginas da web.

+ **Bancos de dados orientados a objetos:** são projetados para lidar com objetos complexos, em vez de tabelas simples. Eles são frequentemente usados em aplicativos de programação orientada a objetos. São amplamente utilizados em aplicativos da web, como em comércio eletrônico e gerenciamento de conteúdo.

+ **Bancos de dados orientados a documentos (ou document-oriented):** são um tipo de banco de dados NoSQL que armazenam dados em documentos semelhantes a JSON. Cada documento contém todos os dados relacionados a uma entidade específica, como um cliente ou um produto, por exemplo. Esses documentos são armazenados em coleções, que são semelhantes às tabelas em um banco de dados relacional.

+ **Bancos de dados de grafos:** armazenam dados em nós e arestas, permitindo a representação de relacionamentos complexos entre entidades. Eles são usados ​​em redes sociais e sistemas de recomendação.

+ **Bancos de dados colunar:** (também conhecidos como bancos de dados de colunas) são um tipo de banco de dados projetado para armazenar e recuperar grandes volumes de dados estruturados com eficiência. Eles são particularmente adequados para trabalhar com dados que requerem análise em larga escala e que podem ser organizados em colunas. São frequentemente usados ​​em aplicativos que exigem análises de dados em larga escala, como em empresas de tecnologia, finanças e saúde. 

+ **Bancos de dados chave-valor (ou key-value):** são um tipo de banco de dados NoSQL que armazena dados como pares de chave-valor. Cada valor é associado a uma chave exclusiva, que é usada para recuperar o valor posteriormente. Esse modelo de dados é extremamente simples, mas também muito poderoso, permitindo uma alta escalabilidade e eficiência no armazenamento e recuperação de dados.

Esses são apenas alguns dos tipos de bancos de dados disponíveis. Cada tipo tem seus próprios benefícios e limitações, e a escolha do tipo certo depende das necessidades específicas do usuário ou da organização.

<br />
<br />

# SQL e NoSQL

<br />

## SQL

Banco de dados SQL é um **tipo de banco de dados relacional que usa a linguagem SQL (Structured Query Language) para gerenciar e manipular dados**. É um dos tipos mais populares de banco de dados usados atualmente em empresas, organizações governamentais e outras aplicações de dados em larga escala.

Os bancos de dados SQL são baseados em tabelas, onde cada tabela contém linhas de dados relacionados a uma entidade específica. As colunas na tabela representam os atributos da entidade. Por exemplo, uma tabela de clientes pode ter colunas para nome, endereço, e-mail e número de telefone.

O SQL é a linguagem padrão usada para consultas, atualizações e manipulações de bancos de dados SQL. Ele permite que os usuários criem, modifiquem e excluam dados em tabelas, realizem consultas sofisticadas e gerenciem a estrutura geral do banco de dados.

Alguns dos principais recursos dos bancos de dados SQL incluem:

+ Integridade de dados, que garante que os dados armazenados no banco de dados sejam precisos e consistentes;

+ Capacidade de consulta e filtragem de dados complexos;

+Suporte para várias transações simultâneas, garantindo a integridade dos dados durante a manipulação;

+ Capacidade de normalizar os dados, reduzindo a redundância e melhorando a eficiência do armazenamento e recuperação de dados;

+ Capacidade de criar índices para acelerar a recuperação de dados.

Alguns exemplos de bancos de dados SQL incluem MySQL, Oracle, Microsoft SQL Server e PostgreSQL.


### ACID
Os Bancos de Dados relacionais aplicam o conceito ACID. **ACID é um acrônimo para um conjunto de propriedades que garantem a confiabilidade e integridade dos dados em um banco de dados transacional**. 

As propriedades ACID são as seguintes:

+ **Atomicidade (Atomicity):** Uma transação é tratada como uma única unidade de trabalho e é concluída integralmente ou não é concluída. Isso significa que, se uma parte da transação falhar, a transação inteira é revertida para o estado anterior à sua execução.

+ **Consistência (Consistency):** Uma transação deve deixar o banco de dados em um estado consistente, ou seja, todas as regras de integridade referencial, validação de dados e outras restrições devem ser aplicadas durante a execução da transação.

+ **Isolamento (Isolation):** Cada transação deve ser isolada de outras transações em execução simultaneamente. Isso garante que as transações sejam executadas como se fossem as únicas em execução no banco de dados.

+ **Durabilidade (Durability):** Uma vez que uma transação é concluída com sucesso, seus efeitos devem ser permanentes e resistentes a falhas, mesmo em caso de falha do sistema.
Juntos, esses requisitos garantem que as transações em um banco de dados ACID sejam tratadas de forma confiável, consistente e com integridade de dados.

<details>
<summary>Benefícios </summary>

+ **Estrutura bem definida:** o modelo de dados relacional é bem definido e fácil de entender, permitindo que os desenvolvedores criem esquemas claros para armazenamento de dados.
Integridade de dados: os bancos de dados relacionais têm recursos de integridade de dados que garantem que apenas dados válidos e consistentes sejam armazenados no banco de dados.

+ **Normalização de dados:** a normalização de dados ajuda a evitar a duplicação de dados no banco de dados, o que economiza espaço e melhora a eficiência do banco de dados.
Suporte de ferramentas: existem muitas ferramentas de desenvolvimento e gerenciamento de banco de dados disponíveis que suportam bancos de dados relacionais, tornando a manutenção e a administração de bancos de dados mais fácil.
</details>

<details>
<summary>
Desvantagens
</summary>

+ **Escalabilidade limitada:** os bancos de dados relacionais são difíceis de escalar horizontalmente, o que pode torná-los menos adequados para aplicativos de grande escala que exigem alta disponibilidade e desempenho.

+ **Restrições de esquema:** os bancos de dados relacionais são altamente dependentes do esquema do banco de dados e não permitem muita flexibilidade em relação à adição de novos campos ou tabelas.

+ **Desempenho inferior com dados não estruturados:** os bancos de dados relacionais são menos eficientes em lidar com dados não estruturados, como imagens, áudio ou vídeo.

+ **Custo:** os bancos de dados relacionais geralmente são mais caros do que os bancos de dados NoSQL devido às suas características avançadas e complexidade.
</details>

<details>
<summary>Empresas que utilizam banco de dados SQL</summary>

+**Amazon:** A Amazon usa bancos de dados SQL em seus vários serviços, como Amazon Web Services (AWS) e Amazon Marketplace.

+**IBM:** A IBM usa o banco de dados SQL em seus vários produtos, como IBM DB2 e IBM Informix.

+**Microsoft:** A Microsoft usa o banco de dados SQL em seus produtos, como Microsoft SQL Server e Azure SQL Database.

+**Oracle:** A Oracle é uma das maiores empresas de banco de dados do mundo e usa o banco de dados SQL em seus produtos, como Oracle Database e MySQL.

+**SAP:** A SAP é uma das principais empresas de software empresarial do mundo e usa o banco de dados SQL em seus produtos, como SAP HANA e SAP ASE.

+**Uber:** A Uber usa o banco de dados SQL em seus serviços de gerenciamento de dados e armazenamento de dados.

+**Facebook:** O Facebook usa o banco de dados SQL em seus produtos, como MySQL e Hive.

+**Twitter:** também utiliza o MySQL para gerenciar seu grande volume de dados.

+**Airbnb:** utiliza o MySQL como seu banco de dados principal para armazenar informações sobre listagens de imóveis e reservas.
</details>

> 👉 Em resumo, bancos relacionais são altamente estruturados e confiáveis, mas podem ser menos flexíveis e mais caros em relação a outros tipos de bancos de dados. 

<br />


## NoSQL
Bancos de dados orientados a documentos **são um tipo de banco de dados NoSQL que armazenam dados em documentos no formato JSON (JavaScript Object Notation), BSON (Binary JSON) ou outros formatos semelhantes**. Em vez de armazenar dados em tabelas com linhas e colunas, como acontece nos bancos de dados relacionais, **os dados são armazenados em documentos que contêm campos e valores**.

Cada documento em um banco de dados orientado a documentos é tratado como uma unidade independente de dados, que pode ser facilmente adicionada, editada ou excluída sem afetar outros documentos. Cada documento pode ter uma estrutura diferente, permitindo que os desenvolvedores armazenem dados sem ter que seguir um esquema rígido.

Os bancos de dados orientados a documentos são particularmente úteis para aplicativos que trabalham com dados semiestruturados ou não estruturados, como conteúdo da web, arquivos de log, perfis de usuários e feeds de redes sociais. Eles também são escaláveis e permitem que os desenvolvedores adicionem novos campos aos documentos sem afetar o desempenho geral do banco de dados.

Alguns exemplos de bancos de dados orientados a documentos incluem MongoDB, Couchbase e Apache CouchDB.

<details>
<summary>Benefícios
</summary>

+ **Escalabilidade horizontal:** os bancos de dados NoSQL foram projetados para dimensionar horizontalmente, o que significa que eles podem lidar com grandes volumes de dados e cargas de trabalho pesadas com facilidade.

+ **Flexibilidade de esquema:** os bancos de dados NoSQL permitem que os usuários adicionem novos campos ou tabelas sem a necessidade de alterar o esquema do banco de dados. Isso torna os bancos de dados NoSQL mais flexíveis em relação aos bancos de dados relacionais.

+ **Melhor desempenho com dados não estruturados:** os bancos de dados NoSQL são altamente eficientes em lidar com dados não estruturados, como imagens, áudio ou vídeo.

+ **Baixo custo:** muitos bancos de dados NoSQL de código aberto estão disponíveis gratuitamente, e mesmo as versões comerciais são geralmente mais baratas do que os bancos de dados relacionais.

</details>

<details>
<summary>Desvantagens</summary>

+ **Modelagem complexa de dados:** os bancos de dados NoSQL têm uma modelagem de dados mais complexa, o que pode tornar a implementação e a manutenção mais desafiadoras.

+ **Falta de consistência:** alguns tipos de bancos de dados NoSQL não oferecem consistência forte, o que significa que os dados podem não ser atualizados em tempo real.

+ **Falta de recursos de integridade de dados:** muitos bancos de dados NoSQL não têm recursos integrados para garantir que apenas dados válidos e consistentes sejam armazenados no banco de dados.

+ **Suporte limitado de ferramentas:** as ferramentas de desenvolvimento e gerenciamento de bancos de dados NoSQL são menos comuns e menos maduras do que as ferramentas de bancos de dados relacionais.
</details>

<details>
<summary>Exemplo de empresas que utilizam banco de dados não relacionais</summary>

+**Amazon:** utiliza o DynamoDB, um banco de dados NoSQL totalmente gerenciado que é escalável, rápido e flexível, para suportar suas operações de comércio eletrônico.

+**Netflix:** utiliza o Apache Cassandra, um banco de dados NoSQL distribuído, para armazenar informações de perfil de usuário, histórico de visualização e outros dados importantes.

+**Twitter:** utiliza o Apache HBase, um banco de dados NoSQL baseado em colunas, para armazenar informações sobre usuários, tweets e outras atividades.

+**Airbnb:** utiliza o Apache Cassandra para armazenar informações de reservas e disponibilidade de imóveis em tempo real.

+**LinkedIn:** utiliza o Apache Kafka, um sistema de processamento de fluxo de dados distribuído, para processar e armazenar grandes quantidades de dados de rede social em tempo real.

+**Uber:** utiliza o MongoDB, um banco de dados NoSQL baseado em documentos, para armazenar informações de viagem e motorista.

+**Facebook:** utiliza o Apache HBase, o Cassandra e outros bancos de dados NoSQL para armazenar uma variedade de informações do usuário, incluindo postagens, fotos e mensagens.

</details>

> 👉 Em resumo, os bancos de dados NoSQL têm vantagens e desvantagens. Eles são altamente escaláveis e flexíveis, mas podem ser mais complexos em termos de modelagem de dados e podem não ter recursos integrados de integridade de dados. A escolha do banco de dados mais adequado para um determinado aplicativo depende das necessidades específicas do projeto e dos requisitos de escalabilidade, desempenho e segurança.

<br />

# Resumo: comparativo SQL x NoSQL

Os bancos de dados SQL e NoSQL possuem diferenças significativas em termos de estrutura, funcionalidades, escalabilidade e flexibilidade. Aqui estão algumas comparações entre esses dois tipos de bancos de dados:

+ **Estrutura:** Os bancos de dados SQL são estruturados, ou seja, utilizam tabelas com linhas e colunas, e seguem um esquema definido. Já os bancos de dados NoSQL são não estruturados ou semi-estruturados, ou seja, utilizam diferentes modelos de dados, como documentos, grafos e chave-valor.

+ **Linguagem de consulta:** Os bancos de dados SQL utilizam a linguagem de consulta SQL (Structured Query Language) para executar consultas e gerenciar os dados. Já os bancos de dados NoSQL possuem suas próprias linguagens de consulta, que podem variar dependendo do modelo de dados utilizado.

+ **Escalabilidade:** Os bancos de dados SQL possuem escalabilidade vertical, ou seja, a escalabilidade ocorre adicionando mais recursos de hardware a um único servidor. Já os bancos de dados NoSQL possuem escalabilidade horizontal, ou seja, a escalabilidade ocorre adicionando mais servidores para lidar com grandes volumes de dados.

+ **Flexibilidade:** Os bancos de dados SQL possuem um esquema definido e rigidez na estrutura dos dados. Já os bancos de dados NoSQL são mais flexíveis, permitindo alterações na estrutura dos dados sem a necessidade de alterações no esquema.

+ **Aplicações:** Os bancos de dados SQL são amplamente utilizados em aplicações de negócios e em sistemas que requerem transações complexas e confiabilidade. Já os bancos de dados NoSQL são mais adequados para aplicações de escala web, mobile, IoT, Big Data e outras aplicações que exigem alta velocidade de leitura e gravação e flexibilidade na modelagem de dados.

> 👉 Em resumo, os bancos de dados SQL são ideais para aplicações de negócios que requerem transações complexas e segurança de dados. Já os bancos de dados NoSQL são mais adequados para aplicações web, mobile, Big Data e IoT que exigem escalabilidade, velocidade, flexibilidade e facilidade de uso.

<br />
<br />

# Sistema de Gerenciamento de Banco de Dados

Sistema de Gerenciamento de Banco de Dados (SGBD) é um **software que permite criar, gerenciar e manipular bancos de dados**. Ele fornece uma interface entre as aplicações e o banco de dados, permitindo que as aplicações acessem os dados de forma segura e eficiente.

Os SGBDs oferecem vários recursos para gerenciar dados, incluindo:

+ Criação e definição de esquemas de banco de dados;
+ Manipulação de dados, como inserção, atualização, exclusão e consulta;
+ Controle de transações para garantir a integridade dos dados;
+ Implementação de recursos de segurança, como autenticação e autorização de usuários;
+ Gerenciamento de backup e recuperação de dados;
+ Otimização de desempenho, como indexação de dados e otimização de consultas.

Existem vários tipos de SGBDs, como os bancos de dados relacionais (SQL), bancos de dados NoSQL, bancos de dados orientados a objetos, bancos de dados em memória, entre outros. Cada tipo de SGBD tem suas próprias vantagens e desvantagens, e deve ser escolhido com base nos requisitos específicos de cada aplicação.

Os SGBDs são amplamente utilizados em várias aplicações, desde sistemas de gerenciamento de conteúdo até aplicativos de finanças e saúde. Alguns exemplos populares de SGBDs incluem MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, entre outros.

<br />
<br />

# MongoDB

MongoDB é um **sistema de gerenciamento de banco de dados NoSQL baseado em documentos**. Ele foi projetado para ser escalável, flexível e fácil de usar, tornando-se uma das opções mais populares para aplicativos modernos que exigem escalabilidade e flexibilidade.

Uma das principais características do MongoDB é a sua estrutura de dados baseada em documentos, onde os dados são armazenados em documentos JSON. Isso permite que os dados sejam modelados de forma flexível e facilmente escaláveis para aplicativos que precisam armazenar grandes volumes de dados. O MongoDB também é capaz de lidar com dados semiestruturados e não estruturados, o que é um grande diferencial em relação aos bancos de dados SQL tradicionais.

Outra característica importante do MongoDB é a sua capacidade de escalabilidade horizontal. Isso significa que é possível adicionar mais servidores ao cluster do MongoDB para lidar com grandes volumes de dados, sem afetar o desempenho do sistema.

O MongoDB também oferece recursos avançados de consulta, incluindo suporte a índices, agregação e consultas de texto completo. Ele também inclui recursos de segurança e autenticação, backup e recuperação de dados, monitoramento e gerenciamento de clusters.

O MongoDB é amplamente utilizado em aplicações web, móveis e Big Data, bem como em empresas em todo o mundo. Grandes empresas como Google, Forbes, Cisco, eBay, Salesforce, LinkedIn e outras usam o MongoDB para seus aplicativos e sistemas.

## BSON

BSON (Binary JSON) é um **formato de serialização binária utilizado pelo MongoDB para armazenar e transmitir dados**. Ele é baseado na sintaxe JSON, mas adiciona suporte para tipos de dados adicionais e estruturas mais complexas que não são suportadas pelo JSON padrão.

O BSON é usado pelo MongoDB como formato de armazenamento padrão para documentos, índices e metadados. Ele é mais compacto e mais rápido do que o JSON, tornando o MongoDB mais eficiente em termos de espaço em disco e desempenho.

Além disso, suporta uma variedade de tipos de dados, incluindo strings, números, booleanos, datas, arrays, objetos e valores nulos. Também suporta tipos de dados específicos do MongoDB, como ObjectID, BinData e Date. Também pode representar valores complexos, como referências a outros documentos e arrays aninhados.

Uma das principais vantagens do BSON é que ele é facilmente parseável em várias linguagens de programação, incluindo JavaScript, Python, Ruby, Java, C# e outras. Isso torna mais fácil para os desenvolvedores trabalharem com dados armazenados no MongoDB em suas aplicações.

> 👉 Em resumo, o BSON é um formato de serialização binária usado pelo MongoDB para armazenar e transmitir dados. Ele é mais compacto e mais rápido do que o JSON, suporta uma variedade de tipos de dados e é facilmente parseável em várias linguagens de programação.

<details>

<summary>Vantagens</summary>

+ **Flexibilidade:** o MongoDB é flexível em relação à estrutura dos dados, permitindo que os documentos tenham diferentes campos e tamanhos, sem a necessidade de definir esquemas rígidos. Isso torna mais fácil trabalhar com dados não estruturados ou semi-estruturados.

+ **Escalabilidade:** o MongoDB é escalável horizontalmente, permitindo que a carga seja distribuída em vários servidores, o que pode melhorar o desempenho e a disponibilidade do sistema.

+ **Desempenho:** o MongoDB é rápido em operações de leitura e gravação, especialmente em ambientes com grande volume de dados. Ele também suporta consultas complexas e recursos avançados, como índices em segundo plano, que podem melhorar ainda mais o desempenho.

+ **Comunidade ativa:** o MongoDB tem uma grande comunidade de usuários ativos, oferecendo suporte, documentação e recursos de aprendizado para desenvolvedores.

+ **Custo:** o MongoDB é um software de código aberto, o que significa que é gratuito para uso em produção e oferece planos pagos opcionais para suporte e recursos adicionais.
</details>

<details>
<summary>
Desvantagens
</summary>

+ **Escalabilidade vertical limitada:** o MongoDB tem limitações em relação à escalabilidade vertical, o que significa que pode não ser adequado para cargas de trabalho com grande volume de transações em um único servidor.

+ **Suporte limitado a transações:** o MongoDB oferece suporte a transações apenas em nível de documento, o que pode ser limitante em algumas aplicações que requerem transações mais complexas.

+ **Gerenciamento de dados:** como o MongoDB é um banco de dados orientado a documentos, pode ser necessário gerenciar os dados mais cuidadosamente do que em um banco de dados SQL tradicional, a fim de garantir a integridade dos dados e evitar redundância.

+ **Dificuldade de migração:** a migração de dados de um banco de dados SQL para o MongoDB pode ser um processo complicado, especialmente se os dados forem altamente estruturados e normalizados.
</details>

> 👉 Em resumo, o MongoDB oferece várias vantagens em termos de flexibilidade, escalabilidade, desempenho e custo, mas também tem algumas limitações em relação à escalabilidade vertical e suporte a transações. É importante avaliar cuidadosamente os requisitos da aplicação antes de escolher um banco de dados específico.

# CRUD

CRUD é um **acrônimo que representa as quatro principais operações básicas em sistemas de gerenciamento de banco de dados (SGBDs): Create (Criação), Read (Leitura), Update (Atualização) e Delete (Exclusão)**.

Essas operações são usadas para manipular dados em um banco de dados.

- **Create (Criação):** cria novos registros em um banco de dados.

- **Read (Leitura):** lê e recupera os registros existentes de um banco de dados. 

- **Update (Atualização):** atualiza registros existentes em um banco de dados.

- **Delete (Exclusão):** exclui registros existentes de um banco de dados.

Essas quatro operações são consideradas básicas porque muitas outras operações em bancos de dados podem ser construídas a partir delas. Por exemplo, a operação de pesquisa é uma extensão da operação de leitura, e a operação de filtragem é uma extensão da operação de leitura e pode ser usada para recuperar apenas registros específicos de um banco de dados. O CRUD é um conceito fundamental para o desenvolvimento de aplicativos que interagem com bancos de dados.

## Create

Create (Criação) é a primeira operação do CRUD e é usada para criar novos registros em um banco de dados. Essa operação é usada quando um novo objeto ou registro precisa ser adicionado ao banco de dados.

Para executar a operação de criação (Create), o aplicativo envia uma solicitação para o SGBD com as informações do novo registro. O SGBD, por sua vez, valida as informações, cria um novo registro na tabela do banco de dados e retorna uma resposta para o aplicativo indicando se a operação foi bem-sucedida ou não.

Por exemplo, suponha que você queira criar um novo registro em um banco de dados de funcionários com as seguintes informações: nome, endereço, cargo e salário. Para criar um novo registro, você precisaria enviar uma solicitação ao SGBD com essas informações. O SGBD então validaria as informações e criaria um novo registro na tabela de funcionários com esses dados.

> 👉 Em resumo, a operação de criação (Create) é usada para adicionar novos dados ao banco de dados e é fundamental para a construção de aplicativos que interagem com bancos de dados.

<br />

## Read
Read (Leitura) é a segunda operação do CRUD e é usada para ler e recuperar registros existentes de um banco de dados. Essa operação é usada para recuperar informações de um banco de dados.

Para executar a operação de leitura (Read), o aplicativo envia uma solicitação para o SGBD com os critérios de pesquisa ou com o identificador único do registro que deseja ler. O SGBD, por sua vez, consulta a tabela do banco de dados usando esses critérios de pesquisa e retorna os registros correspondentes para o aplicativo.

Por exemplo, suponha que você queira recuperar todos os registros de funcionários que ganham mais de R$5000 por mês. Para fazer isso, você enviaria uma solicitação ao SGBD com um critério de pesquisa que inclua o salário mínimo desejado. O SGBD então consultaria a tabela de funcionários usando esse critério e retornaria todos os registros que correspondem a ele.

> 👉 Em resumo, a operação de leitura (Read) é usada para recuperar informações de um banco de dados e é fundamental para a construção de aplicativos que exibem informações aos usuários.
<br />

## Update
Update (Atualização) é a terceira operação do CRUD e é usada para atualizar registros existentes em um banco de dados. Essa operação é usada quando um registro precisa ser modificado com novas informações.

Para executar a operação de atualização (Update), o aplicativo envia uma solicitação para o SGBD com as informações atualizadas e os critérios de pesquisa que definem quais registros devem ser atualizados. O SGBD, por sua vez, busca os registros correspondentes na tabela do banco de dados e atualiza as informações com os novos dados.

Por exemplo, suponha que você queira atualizar o endereço de um funcionário no banco de dados de funcionários. Você precisaria enviar uma solicitação ao SGBD com as informações atualizadas, incluindo o novo endereço, e os critérios de pesquisa definindo qual registro deve ser atualizado. O SGBD então buscaria o registro correspondente na tabela de funcionários e atualizaria o endereço com os novos dados.

> 👉 Em resumo, a operação de atualização (Update) é usada para modificar registros existentes em um banco de dados e é fundamental para a construção de aplicativos que permitem aos usuários editar dados.

## Delete
Delete (Exclusão) é a quarta operação do CRUD e é usada para remover registros existentes de um banco de dados. Essa operação é usada quando um registro não é mais necessário ou quando precisa ser removido por algum motivo.

Para executar a operação de exclusão (Delete), o aplicativo envia uma solicitação para o SGBD com os critérios de pesquisa que definem quais registros devem ser excluídos. O SGBD, por sua vez, busca os registros correspondentes na tabela do banco de dados e remove os registros do banco de dados.

Por exemplo, suponha que você queira excluir um funcionário do banco de dados de funcionários. Você precisaria enviar uma solicitação ao SGBD com os critérios de pesquisa definindo qual registro deve ser excluído. O SGBD então buscaria o registro correspondente na tabela de funcionários e o removeria do banco de dados.

> 👉 Em resumo, a operação de exclusão (Delete) é usada para remover registros existentes de um banco de dados e é fundamental para a construção de aplicativos que permitem aos usuários excluir dados. É importante lembrar que essa operação pode ser irreversível e deve ser usada com cuidado para evitar a perda de dados importantes.

# Prática

