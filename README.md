# holi-app

## Índice
<!--ts-->
   * [Informações Gerais](#informações-gerais)
      * [Framework Utilizada](#framework-utilizada)
      * [API Externa Utilizada](#api-externa-utilizada)
      * [Rotas](#rotas)
   * [Servindo o projeto](#servindo-o-projeto)
<!--te-->

## Informações Gerais

Olá, amigues! Bem vindos ao HoliApp!

A ideia desta aplicação é um sistema simples de consulta onde o usuário escolhe dia, mês, ano e país para a consulta e o sistema retorna se há (ou não) um feriado no país e na data escolhida. A entidade é apenas Date.

### Framework Utilizada
- [Laravel](https://laravel.com/docs/8.x)
- [Ionic](https://ionicframework.com/docs/)

### API Externa Utilizada
- [Calendarific Holiday API](https://calendarific.com/api-documentation)

### Rotas

Na API, a entidade Date possui suas rotas seguindo o conceito e as regras da API Rest, ou seja, estas rotas estão associadas as funções para criação, atualização, leitura e exlusão (create, read, update, delete) dos dados. Apesar do aplicativo não se utilizar de todas elas.

Para testar as rotas, a URL utilizada é `` http://localhost:8000/api/ ``. Caso haja dúvidas, no arquivo `` routes\api.php `` estão todas desta aplicação.
  
## Servindo o projeto


