import express from 'express'
const api = express();
api.use(express.json()); // permite o uso de BODY


// Ex.: http://localhost:5010/calculadora/somar/10/5
api.get('/calculadora/somar/:n1/:n2', (req, resp) => {
  let n1 = Number(req.params.n1);
  let n2 = Number(req.params.n2);

  let soma = n1 + n2;
  resp.send({
    resultado: soma
  });
})


// Ex.: http://localhost:5010/calculadora/subtrair?num1=10&num2=3
api.get('/calculadora/subtrair', (req, resp) => {
  let n1 = Number(req.query.num1);
  let n2 = Number(req.query.num2);

  let sub = n1 - n2;
  resp.send({ resultado: sub });
})


// Ex.:  http://localhost:5010/calculadora/multiplicar
// Body: { "num1": 3, "num2": 7 }
api.post('/calculadora/multiplicar', (req, resp) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;

  let mult = n1 * n2;
  resp.send({ resultado: mult });
})


//Tentando fazer a de dobro
api.post('calcular/dobro', (req,resp)=>{
    let n1 = req.body.n1

    let dobro = n1*2
    resp.send({resultado:dobro})
})

// Ex.:  http://localhost:5010/calculadora/media
// Body: { "notas": [10, 8, 0, 4, 3, 2, 1, 1] }
api.post('/calculadora/media', (req, resp) => {
  let notas = req.body.notas;
  let soma = 0;
  for (let item of notas) {
    soma += item;
  }
  let media = soma / notas.length;

  resp.send({ resultado: media });
})


api.listen(5010, () => console.log('API subiu com sucesso!'));