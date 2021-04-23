# Project Movies

O Projeto tem como base o [NextJs](https://nextjs.org). O motivo da escolha é que a framework disponibiliza uma camada em Node que podemos utiliza-lo como uma Rota de API.

Seu objetivo é listar quantidade de filmes no ano a partir de seu Título. Para o retorno dessas informação é necessarios consumir o seguinte endpoint:

```
https://jsonmock.hackerrank.com/api/movies/search/?Title={titulo_do_filme}
```

A partir desse retorno exibir as informações necessárias. Abaixo segue exemplo:

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


## Requisitos de sistema

- Node
## Comandos

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
