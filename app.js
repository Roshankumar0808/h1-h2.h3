const write = document.querySelector("#text");
const first = document.querySelector("#h1");
const second = document.querySelector("#h2");
const third = document.querySelector("#h3");

let number = 16;
first.addEventListener("click",add)
function add(){
    number =number*2;
    write.style.fontSize= `${number}px`
}

second.addEventListener("click",add)
function sub(){
    number =number*1.5;
    write.style.fontSize= `${number}px`
}

third.addEventListener("click",mul)
function mul(){
    number =number*1.3 ;
    write.style.fontSize= `${number}px`
}