import { Router } from 'express';
const endpoints = Router();


endpoints.get('/helloworld',(req, resp)=>{
    //código endpoint
    resp.status(404).send({
      mensagem:'Hello world!!!'
  })
  
  })
  
  endpoints.get('/mensagem/boasvindas' , (req , resp)=>{
      resp.send ({
          mensagem:'Olá sejam bem vindos!!!'
      })
  })
  
  endpoints.get ('/v2/mensagem/boasvindas',(req,resp)=>{
      resp.send({
          mensagem:'Que bom que você está aqui! s2'
      })
  })

  endpoints.get('/mensagem/ola', (req,resp) =>{
    if(!req.query.nome){
        resp.status(400).send({
        error:'É obrigatório o envio do nome'
        })
    return;
    }

    let pessoa = req.query.nome ?? 'joia rara';

    resp.send({
        mensagem:'olá '+ pessoa
    })
})
  

export default endpoints;