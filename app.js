import express from 'express';
import cors from 'cors'

const servidor = express();
servidor.use(express.json());
servidor.use(cors())

let uploadoPerfil = multer({dest:'./storage/perfil'})

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

servidor.get('/calculadora/subtrai/:n1/:n2',(req,resp) =>{

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

servidor.get('/calculadora/divisao/:n1/:n2',(req,resp) =>{

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

servidor.get('/calculadora/multiplicacao/:n1/:n2',(req,resp) =>{
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

servidor.get('/calculadora/soma2',(req,resp) =>{

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


servidor.get('/mensagem/ola', (req,resp) =>{
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


servidor.post('/media' , (req,resp) =>{

    try{
        if((!req.body.nota1) || isNaN(req.body.nota1)){
            throw new Error('O campo nota1 é obrigatório e precisa ser numérico')
        }
        if((!req.body.nota2) || isNaN(req.body.nota2)){
            throw new Error('O campo nota2 é obrigatório e precisa ser numérico')
        }
        if((!req.body.nota3) || isNaN(req.body.nota3)){
            throw new Error('O campo nota3 é obrigatório e precisa ser numérico')
        }

        let n1 = req.body.nota1
        let n2 = req.body.nota2
        let n3 = req.body.nota3
        let media = (n1+n2+n3)/3
        resp.send({
            resultado:media
        })
    }
    catch(err){
        resp.status(400).send({
            error:err.message
        })
    }

})


servidor.post('/dobros',(req,resp)=>{
    try{
        if((!req.body.numeros)){
            throw new Error('O campo numeros é obrigatório e precisa ser numérico')
        }

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

    }
    catch(err){
        resp.status(400).send({
            error:err.message
        })
    }

})


servidor.post('/loja/pedido' , (req,resp)=>{
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

servidor.post('/loja/pedido/completo',(req,resp)=>{
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


servidor.post('perfil/capa', uploadoPerfil.single('imagem'),(req,resp)=>{
    let caminho = req.file.path;
    let extensao= req.file.mimetype;
    let nome = req.file.originalname;
    
    resp.send({
        caminho:caminho,
        extensao:extensao,
        nome:nome
    })
})
 



servidor.listen(
    5004,
    () =>console.log('----> API SUBIU COM SUCESSO!!! <----'))