var btn = document.querySelector("button")
var h2 = document.querySelector("h2")
var main = document.querySelector("main")
var flag = 0;
btn.addEventListener('click', function(){
    if(flag === 0){
        h2.innerHTML = 'Sending Request...'
        btn.style.backgroundColor = 'red';
        setTimeout(function(){
            h2.innerHTML = 'Friend';
            btn.style.backgroundColor = 'yellow';
            btn.innerHTML='Remove'
            main.style.backgroundColor='white'
            
        }, 3000);
        flag = 1;
    }
    else{
        h2.innerHTML='Stranger'
        btn.style.backgroundColor='aqua'
         btn.innerHTML='Add Friend'
        flag = 0;
    }
});
