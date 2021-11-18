const express=require("express");
const app=express();
const dateformat=require('date-format');
const PORT=process.env.PORT||4000;

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const { application } = require("express");
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
app.get("/api/v1/instagram",(req,res)=>{
    console.log(); 
    res.status(200).send("request to instagram");
});

app.get("/api/v1/facebook",(req,res)=>{   
    console.log();
    res.status(200).send("request to facebook");
}); 

app.get("/api/v1/linkedin",(req,res)=>{     
    
    linkedinSocial={
        username:"mahendra kumar sahu",
        age:27,
        date:dateformat.asString("hh:mm:ss",new Date())
    }
    res.status(200).json(linkedinSocial);
});

app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token);
    let params=req.params.token;
    res.status(200).send(params);
});

app.get("/*",(req,res)=>{
    res.send("data is successfull");
    
})

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
})