import { Router } from 'express';
const endpoints = Router();

endpoints.get('/calculadora/somar/:n1/:n2',(req,resp) =>{
    if (isNaN(req.params.n1) || isNaN(req.params.n2)){
        resp.status(400).send({
            error:'Erro: os dois valores precisam ser numéricos'
        })
        return
    }
    
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

endpoints.get('/calculadora/subtrai/:n1/:n2',(req,resp) =>{

    if (isNaN(req.params.n1) || isNaN(req.params.n2)){
        resp.status(400).send({
            error:'Erro: os dois valores precisam ser numéricos'
        })
        return;
    }

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

endpoints.get('/calculadora/divisao/:n1/:n2',(req,resp) =>{

    if (isNaN(req.params.n1) || isNaN(req.params.n2)){
        resp.status(400).send({
            error:'Erro: os dois valores precisam ser numéricos'
        })
        return;
    }

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

endpoints.get('/calculadora/multiplicacao/:n1/:n2',(req,resp) =>{
if(isNaN(req.params.n1) || isNaN(req.params.n2)){
    resp.status(400).send({
        error:'Erro: os dois valores precisam ser numéricos'
    })
    return
}
    let operacao = 'multiplicacao'
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2)
    let mult = n1*n2;
 
    resp.send({
        entradas:{
            num1:n1,
            num2:n2,
            operacaofeita:operacao
        },
        resultado:mult
    })
}) 

endpoints.get('/calculadora/soma2',(req,resp) =>{

    if(!req.query.n1 || !req.query.n2){
        resp.status(400).send({
            error:'Erro: é obrigatório o envio dos dois números'
        })
        return;
    }

    if (isNaN(req.query.n1) || isNaN(req.query.n2)){
        resp.status(400).send({
            error:'Erro: os dois valores precisam ser numéricos'
        })
        return;
    }

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


export default endpoints;