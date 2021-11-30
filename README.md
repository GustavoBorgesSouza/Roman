# Welcome to project Roman

## Descrição do projeto
   
   O projeto Roman é um Aplicativo Mobile com fins pedagógicos.
   A escola de tecnologia, desenvolve exercícios com escopos 
   dedicado aos alunos, para não ser de forma individualizada o 
   apk foi projetado com  o intuito de auxiliar no compartilhamento
   das propostas de projetos entre os professores afim de tornar 
   algo mais dinâmico.

  ## Tecnologias utilizadas

  * React-native
  * Java script
  * SQL 
  * C# 

 ###  Banco de Dados
   O banco de dados foi criado apartir dos scripts de criação (DDL), manipulação (DML) 
   e consulta (DQL) utilizando MSSQL como linguagem.

 ###  Backend
   Web API utilizando C# como linguagem fornecendo e recebendo dados no formato JSON
   Estruturaa dividida em Domains, Controllers, Interfaces e Repositories
   Arquitetura no padrão REST;
   Documentação através do Swagger;
   Implementada autenticação e autorização utilizando JWT;

  ### Frontend
   O front-end do projeto Roman foi desenvolvido em JavaScript 
   utilizando a biblioteca React-Native

   Design desenvolvido através do Figma (layout de baixa e alta fidelidade)  

 ##  Como rodar o projeto 
   
 ### 1º Primeiro passo
   Caso não possuir as ferramentas que serão utilizadas instalar, recomendado:
   Visual Studio Code, Visual Studio, Microsoft SQL Server menagement
   obs: instalar o node e o Android studio (Fazer configuração com o auxilio de um desenvolvedor do projeto)
   contatar Gustavo Rezende, Gustavo Borges ou Leonardo Teles.

 ### 2º Segundo passo:
   Clonar o repositório do Git Hub: 
   https://github.com/GustavoBorgesSouza/Roman


 ### 3º Terceiro Passo 
   Abrir a pasta BancoDados/Scripts/
   abrir o arquivo "DDL" e DML" com o SQL Server
    
   selecionar o DDL e pressionar F5 para a criação do banco e das tabelas
   selecionar o DML e pressionar F5 para a inserção dos dados nas colunas.

 ### 4º Quarto Passo
   Na pasta /Backend abra o arquivo .sln com o Visual Studio
   entre na pasta Context localizada a direita abra RomanContext.cs

   Altere a optionsBuilder.UseSqlServer(Data Source=  --Passe o nome do servidor da sua máquina-- )
   
   altere também a senha e o user que estão dentro dos parênteses

   Depois execute a Api, clicando no botão de play.

  ### 5º Quinto Passo
   Uma opção é utilizar aplicativos para realizar as requisições como o 
   Postman, escolha qual tipo de requisição que deseja realizar, ou seja
   GET, POST, HEAD, OPTIONS, PUT, DELETE e TRACE. Copiando o caminho e passando
   {link/api/campo}.
   Execute a aplicação e faça requisições pelo domínio 
   http://localhost:5000

  ### 6º Sexto Passo
   Para rodar o projeto utlizamos o android studio, configuramos todas as configurações de ambiente, depois abrimos 
   o cmd para criar o projeto ultilizando "npx reacte-native init Roman" para criar o nosso projeto Roman, o proximo 
   passo é digitar "cd Roman" para entrarmos na pasta de nosso projeto, por último digitamos "npx react-native run-android"
   para abrirmos nossa aplicação, ai só ser feliz e estilizar as telas.
