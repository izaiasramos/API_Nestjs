API de Desenvolvedores (NestJS)

Esta é uma API simples feita com NestJS para gerenciar desenvolvedores (nome, e-mail e data de nascimento). Ela usa um banco de dados SQLite para salvar os dados. Como júnior, este README vai te guiar para rodar o projeto, entender como ele funciona e testar as rotas.

O que a API faz?


Criar: Adiciona um novo desenvolvedor.

Listar: Mostra todos os desenvolvedores.

Buscar: Pega um desenvolvedor pelo ID.

Atualizar: Edita os dados de um desenvolvedor.

Excluir: Remove um desenvolvedor.

Pré-requisitos

Você precisa ter instalado:


Node.js (v16 ou superior):

Comandos para Iniciar/Intalar projeto Nestjs:

1º npm instal -g @nestjs/cli  -  Vai instalar o nestjs cli te permitindo criar um repositorio nest ou usar qualquer comando nestjs pela cli.

2º nest new .    - Cria o projeto nestjs dentro da pasta atual.


Instale a extensão REST Client para testar a os Endpoints da sua API(Rotas GET/POST/PUT/PATCH/DELETE).

Instale as dependências:

Rode:

npm i nanoid@3 sqlite3 typeorm @nestjs/typeorm class-validator class-transformer 

Isso instala bibliotecas como NestJS, TypeORM e outras.

Rode:

nest generate resource developers - vai gerar/criar uma pasta chamada "developers" já com o CRUD completo criado caso voce aceite

Inicie o servidor:


Execute:

npm run start:dev


O servidor vai rodar em http://localhost:3000. Se você editar o código, ele reinicia sozinho.

Como testar a API


Use a extensão do VsCode REST Client no VS Code:       https://marketplace.visualstudio.com/items?itemName=humao.rest-client

Dentro da nova pasta developers criar um novo arquivo chamado:

developers.http    -    dentro desse arrquivo vc cria seus endpoints CRUD:

POST http://localhost:3000/developers
Content-Type: application/json

{
  "name": "Izaias",
  "email": "izaias@example.com",
  "age": 30,
  "dataOfBirth": "1993-04-15"
}

###    -- em arquivos .http deve ter ### separando cada requisição HTTP

GET http://localhost:3000/developers/3

###

DELETE http://localhost:3000/developers/{id}

###

PUT http://localhost:3000/developers/{id}

###

PATCH http://localhost:3000/developers/1
Content-Type: application/json

{
  "name": "Izaias Ramos",
  "email": "izaias@ramos.com",
  "age": 30,
  "dataOfBirth": "1993-04-15"
}

E a extenção Rest Client vai criar um botão acima de cada endpoint chamado "Send Request" e com isso voce consegue testar cada endpoint


Abra o arquivo src/developers/developers.http


Clique em Send Request acima de cada requisição (ex.: 

POST http://localhost:3000/developers).


vai te retornar:

Criar um desenvolvedor:

POST http://localhost:3000/developers
Content-Type: application/json

{
    "name": "Luana França",
    "email": "luana-bessa@gmail.com",
    "dateOfBirth": "2005-05-14"
}


Resposta: Dados do desenvolvedor com um ID único (ex.: dev_rR7mb5NfZwO6iWHI5yOAO). Johnson: Lista todos os desenvolvedores.



Listar desenvolvedores:

GET http://localhost:3000/developers



Resposta: Lista de todos os desenvolvedores.

Como o projeto foi feito

Aqui está como criei e configurei a API:



Criei o projeto:



Usei o Nest CLI:

nest new meu-projeto


Isso criou a estrutura inicial (pastas e arquivos como main.ts).


Criei o módulo de desenvolvedores:



Usei:

nest g resource developers


Isso gerou arquivos para rotas, lógica e validações do módulo developers.


Instalei bibliotecas:


Adicionei dependências com:

npm install nanoid@3 sqlite3 typeorm @nestjs/typeorm class-validator class-transformer


nanoid@3: Cria IDs únicos.


sqlite3: Banco de dados leve (salva em db.sqlite).


typeorm e @nestjs/typeorm: Conectam a API ao banco.


class-validator e class-transformer: Validam dados (ex.: e-mail válido).


Configurei o banco (TypeORM):



Em app.module.ts, configurei o SQLite:

TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true
})


Isso cria um arquivo db.sqlite e a tabela developers.


Configurei validações:



Em create-developer.dto.ts, usei class-validator para validar:



name: Deve ser uma string não vazia.


email: Deve ser um e-mail válido.


dateOfBirth: Deve ser uma data (ex.: 2005-05-14).


Em main.ts, ativei o ValidationPipe para aplicar essas regras.


Configurei as rotas:



Em developers.controller.ts, defini rotas como:


POST /developers: Cria um desenvolvedor.


GET /developers: Lista todos.


GET /developers/:id: Busca um.


PATCH /developers/:id: Atualiza.


DELETE /developers/:id: Exclui.


Adicionei lógica:


Em developers.service.ts, escrevi a lógica para salvar, buscar, atualizar e excluir dados no banco usando TypeORM.


Testei com REST Client:


Instalei a extensão REST Client no VS Code para testar as rotas.


Criei developers.http com exemplos de requisições.

O que cada arquivo faz


src/main.ts: Inicia o servidor e ativa validações.


src/app.module.ts: Conecta o módulo developers e configura o TypeORM.


src/developers/developers.module.ts: Organiza o módulo de desenvolvedores.


src/developers/entities/developer.entity.ts: Define a tabela developers (colunas: id, name, email, dateOfBirth).


src/developers/dto/create-developer.dto.ts: Regras para criar um desenvolvedor.


src/developers/dto/update-developer.dto.ts: Regras para atualizar (campos opcionais).


src/developers/developers.controller.ts: Define as rotas da API.


src/developers/developers.service.ts: Lógica para interagir com o banco.


src/developers/developers.http: Arquivo para testar rotas com REST Client.


src/developers/developers.controller.spec.ts: Testes do controlador.

Como os arquivos trabalham juntos


Uma requisição (ex.: POST /developers) chega ao developers.controller.ts.


O controlador usa o create-developer.dto.ts para validar os dados.


O controlador chama o developers.service.ts para salvar no banco.


O serviço usa o developer.entity.ts para definir como os dados são salvos no SQLite.

