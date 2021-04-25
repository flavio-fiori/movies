# Project Movies

O Projeto tem como base o [NextJs](https://nextjs.org). O nextJs disponibiliza uma camada em Node que podemos utiliza-lo como uma Rota de API.

O objetivo do projeto é listar quantidade de filmes no ano a partir de seu Título. Para o retorno dessas informação é necessario consumir o seguinte endpoint:

```
https://jsonmock.hackerrank.com/api/movies/search/?Title={titulo_do_filme}
```

A partir do retorno acima é necessário tratar os dados e retornar os dados como exemplo abaixo:

```
{
    "moviesByYear": [
        {
            "year": 1995,
            "movies": 10
        },
        {
            "year": 1996,
            "movies": 12
        }
    ],
    "total": 35
}
```
## Demo

Você pode [visualizar aqui](https://movies-flaviofiori.vercel.app)

## Requisitos de sistema
- Node
## Comandos

Após o clone do projeto rode o comando abaixo para instalação de dependencias do projeto:

```
npm install
```

Start do ambiente de desenvolvimento: 
```
npm run dev
```

Gerar build do projeto: 
```
npm run build
```
## Ferramentas
- NextJs
- Chakra Ui
- Axios
- Async/Await
