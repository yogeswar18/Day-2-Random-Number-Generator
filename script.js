
const number=document.querySelector(".number");
const generate=document.querySelector(".generate");

const generateNumber=()=>{
    const rand=Math.floor(Math.random()*100000 +1);
    number.innerHTML=rand;
}
generate.addEventListener("click",generateNumber)

