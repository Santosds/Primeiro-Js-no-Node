//Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//definição de endereço / URL
const hostname = '127.0.0.1'; //localhost
const port = 3000;

//Implementação da regra de negócio
const server = http.createServer((req, res) => {

  //pegar a pergunt na url
  const params = queryString.parse(url.parse(req.url, true).search);
 
  //verificar a pergunta e escolher uma resposta
  let resposta;
  if(params.pergunta == 'melhor-filme'){
    resposta = 'star wars';
  }
  else if(params.pergunta == 'melhor-tecnologia-backend'){
    resposta = 'nodejs';
  }
  else {
    resposta = 'nao sei, desculpe : ';
  }

  //retornar a resposta escolhoda

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

//execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//localhost:3000/?pergunta=melhor-filme