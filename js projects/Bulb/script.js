var btn = document.querySelector("button")
var bulb = document.querySelector(".bulb")
var main = document.querySelector("main")
var flag = 0;
btn.addEventListener('click', function(){
    if(flag === 0){
        bulb.style.backgroundColor = "red"
        btn.style.backgroundColor = 'red';
        btn.innerHTML = 'OFF'
      
        flag = 1;
    }
    else{
         bulb.style.backgroundColor = "black"
        btn.style.backgroundColor='black'
         btn.innerHTML='On'
        flag = 0;
    }
});
