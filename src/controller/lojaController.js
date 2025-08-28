import { Router } from 'express';
const endpoints = Router();


endpoints.post('/loja/pedido' , (req,resp)=>{
    try{

        if(isNaN(req.body.parcelas)|| !req.body.parcelas){
        throw new Error('O campo parcelas é obrigatório e precisa ser numérico')
    }

    if((!req.body.total) || isNaN(req.body.total)){
        throw new Error('O campo total é obrigatório e precisa ser numérico')
    }

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
    }
    catch(err){
        resp.status(400).send({
            error:err.message
        })
    }

   
})

endpoints.post('/loja/pedido/completo',(req,resp)=>{
/// o IF pode ficar sem a chaves {} caso a linha de código seja apenas uma linha
//os dois ifs abaixo estão certos um deixa mais facil de entender e ooutro menos acumulo de linhas. 

        try{

         if(!req.body.parcelas || isNaN(req.body.parcelas)){
            throw new Error('O campo parcelas é obrigatório e precisa ser numérico')
         }

         if(!req.body.itens) throw new Error('O campo itens é obrigatório')

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
    }

    catch(err){
         resp.status(400).send({
            error: err.message
         })
    } 
})
 

export default endpoints;