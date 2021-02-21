# holi-app

## Índice
<!--ts-->
   * [Informações Gerais](#informações-gerais)
      * [Desenvolvedora](#desenvolvedora)
      * [Frameworks Utilizada](#frameworks-utilizada)
      * [API Externa Utilizada](#api-externa-utilizada)
      * [Rotas](#rotas)
   * [Servindo o projeto](#servindo-o-projeto)
      * [Front](#2-para-o-front)
      * [Back](#3-para-o-back)
<!--te-->

## Informações Gerais

Olá, amigue! Bem vindos ao HoliApp!

A ideia desta aplicação é um sistema simples de consulta onde o usuário escolhe dia, mês, ano e país para a consulta e o sistema retorna se há (ou não) um feriado no país e na data escolhida. A entidade é apenas Date.

### Desenvolvedora

- Adrielly Balbino

### Frameworks Utilizada
- [Laravel](https://laravel.com/docs/8.x)
- [Ionic](https://ionicframework.com/docs/)

### API Externa Utilizada
- [Calendarific Holiday API](https://calendarific.com/api-documentation)

### Rotas

Na API, a entidade Date possui suas rotas seguindo o conceito e as regras da API Rest, ou seja, estas rotas estão associadas as funções para criação, atualização, leitura e exlusão (create, read, update, delete) dos dados. Apesar do aplicativo não se utilizar de todas elas.

Para testar as rotas, a URL utilizada é `` http://localhost:8000/api/ ``. Caso haja dúvidas, no arquivo `` routes\api.php `` estão todas desta aplicação.
  
## Servindo o projeto

### 1. Clonando o projeto

Primeiramente, é que você clone o repositório em sua máquina, por isso utilize o comando

```bash 
git clone https://github.com/adriellyb/holi-app.git
```

### 2. Para o front

Para servir o front corretamente, é necessário que você tenha instalado nas dependências de seu computador o [NodeJS](https://nodejs.org/en/download/).

Depois no terminal, escreva os comandos:

```bash
npm install
ionic serve
```

### 3. Para o back

Já para servir o back, necessário que você tenha instalados nas dependências de seu computador o [XAMPP](https://www.apachefriends.org/download.html) e o [Composer](https://getcomposer.org/download/)

No terminal:

```bash
composer install
cp .env.example .env
```

- Crie um BD no ``phpMyAdmin``
- Mude o nome do BD no arquivo ``.env`` na variável ``DB_DATABASE`` de acordo com o criado anteriormente

```bash
php artisan key:generate
php artisan migrate:fresh
```


