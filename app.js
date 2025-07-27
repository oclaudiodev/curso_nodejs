import express from 'express';

const servidor = express();
servidor.use(express.json());

servidor.get('/helloworld',(req, resp)=>{
  //código endpoint
  resp.send('Hello world!!!')

})

servidor.get('/mensagem/boasvindas' , (req , resp)=>{
    resp.send ('Olá sejam bem vindos!!!')
})

servidor.get ('/v2/mensagem/boasvindas',(req,resp)=>{
    resp.send('Que bom que você está aqui! s2')
})

servidor.get('/calculadora/soma/:n1/:n2',(req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let soma = n1+n2;

    resp.send('A soma é ' + soma)
})

servidor.get('/calculadora/subtrai/:n1/:n2',(req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let sub = n1-n2;

    resp.send('A soma é ' + sub)
})

servidor.get('/calculadora/multiplicacao/:n1/:n2',(req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let div = n1/n2;

    resp.send('A soma é ' + div)
})

servidor.get('/calculadora/divisao/:n1/:n2',(req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let mult = n1*n2;

    resp.send('A soma é ' + mult)
}) 

servidor.get('/calculadora/soma',(req,resp) =>{
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2)
    let soma = n1+n2;

    resp.send('A soma é ' + soma)
})


servidor.get('/mensagem/ola', (req,resp) =>{
    let pessoa = req.query.nome ?? 'joia rara';

    resp.send('olá '+ pessoa)
})


servidor.post('/media' , (req,resp) =>{
    let n1 = req.body.nota1
    let n2 = req.body.nota2
    let n3 = req.body.nota3
    let media = (n1+n2+n3)/3
    resp.send('A média é '+ media)
})


servidor.post('/dobros',(req,resp)=>{
    let nums = req.body.numeros;

    let nums2 = [];
    for(let i = 0; i<nums.lenght;i++){
        nums2[i] = nums[i] * 2;
    }

    resp.send ('Os dobros dos números são '+ nums2)
})


servidor.post('/loja/pedido' , (req,resp)=>{
    let total = req.body.total
    let parcelas = req.body.parcelas;
    let cupom = req.query.cupom

    if(parcelas>1){
        let juros = total * 0.05
        total+=juros
    }

    if(cupom == 'QUERO100'){
        total -= 100
    }

    resp.send('O total do pedido ficou em ' + total)
})

servidor.listen(
    5001,
    () =>console.log('----> API SUBIU COM SUCESSO!!! <----'))