import express from 'express';
import cors from 'cors'

const servidor = express();
servidor.use(express.json());
servidor.use(cors())

servidor.get('  /helloworld',(req, resp)=>{
  //código endpoint
  resp.status(404).send({
    mensagem:'Hello world!!!'
})

})

servidor.get('/mensagem/boasvindas' , (req , resp)=>{
    resp.send ({
        mensagem:'Olá sejam bem vindos!!!'
    })
})

servidor.get ('/v2/mensagem/boasvindas',(req,resp)=>{
    resp.send({
        mensagem:'Que bom que você está aqui! s2'
    })
})

servidor.get('/calculadora/somar/:n1/:n2',(req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let soma = n1+n2;

    resp.send({ 
        entradas:{
            num1:n1,
            num2:n2
        },
       resultado: soma
    })
})

servidor.get('/calculadora/subtrai/:n1/:n2',(req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let sub = n1-n2;

    resp.send({ 
        entradas:{
            num1:n1,
            num2:n2
        },
        resultado: sub
    })
})

servidor.get('/calculadora/divisao/:n1/:n2',(req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let div = n1/n2;

    resp.send({
        entradas:{
            num1:n1,
            num2:n2
        },
        resultado:div
    })
})

servidor.get('/calculadora/multiplicacao/:n1/:n2',(req,resp) =>{
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let mult = n1*n2;
 
    resp.send({
        entradas:{
            num1:n1,
            num2:n2
        },
        resultado:mult
    })
}) 

servidor.get('/calculadora/soma2',(req,resp) =>{
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2)
    let soma = n1+n2;

    resp.send({
        entradas:{
            num1:n1,
            num2:n2
        },
        resultado: soma
    })
})


servidor.get('/mensagem/ola', (req,resp) =>{
    let pessoa = req.query.nome ?? 'joia rara';

    resp.send({
        mensagem:'olá '+ pessoa
    })
})


servidor.post('/media' , (req,resp) =>{
    let n1 = req.body.nota1
    let n2 = req.body.nota2
    let n3 = req.body.nota3
    let media = (n1+n2+n3)/3
    resp.send({
        resultado:media
    })
})


servidor.post('/dobros',(req,resp)=>{
    let nums = req.body.numeros;

    let nums2 = [];
    for(let i = 0; i<nums.length;i++){
        nums2[i] = nums[i] * 2;
    }

    let nums3=[]
    for(let j = 0; j<nums.length;j++){
        nums3[j] = nums[j] * 3
    }

    let nums4=[]
    for(let x = 0; x< nums.length;x++){
        nums4[x] = nums[x] * 4
    }

    resp.send ({
        entrada:nums,
        dobros: nums2,
        triplos: nums3,
        quadruplos:nums4
    })
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
    
    let parcela = total/parcelas
    
    resp.send({
        total:total,
        valorParcela:parcela
    })
})

servidor.post('/loja/pedido/completo',(req,resp)=>{
    let parcelas = req.body.parcelas 
    let itens = req.body.itens
    let cupom = req.query.cupom
    let total = 0


    for(let produto of itens){
        total+= produto.preco
    }

    if( parcelas > 1 ){
        let juros = total*0.05
        total+=juros
    }

    if(cupom == 'QUERO100'){
        total -=100
    }

    let parcela = total/parcelas

    resp.send({
        total: total,
        qtdParcelas:parcelas,
        valorParcela:parcela
    })
})
 



servidor.listen(
    5003,
    () =>console.log('----> API SUBIU COM SUCESSO!!! <----'))