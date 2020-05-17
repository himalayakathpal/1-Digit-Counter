var button=document.querySelector("button");
var next=document.querySelector(".next");
var current=document.querySelector(".present");

button.addEventListener('click',function(){
    current.innerText=0;
    next.innerText=1;
    var input=document.querySelector("input");
var value=input.value;
if(value>9){
    window.alert("Please Enter a Number From 1 To 9");
    return;
}
var interval=setInterval(anim,1000);
function anim(){
    
    next.classList.add('animate');
    
    setTimeout(function(){
    
        next.classList.remove('animate');
        current.innerText=+current.innerText+1;
    
        next.innerText=+next.innerText+1;
        if(current.innerText==value){
            clearInterval(interval);
            window.alert("Counter has Stopped");
        }
    
    },500);
    
    
    
    
    
    
    }


});
