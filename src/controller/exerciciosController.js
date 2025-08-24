import { Router } from 'express';

const endpoints = Router();

endpoints.post('/media' , (req,resp) =>{

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


endpoints.post('/dobros',(req,resp)=>{
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


export default endpoints;
