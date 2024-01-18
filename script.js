let sample=document.querySelector(".sample");

let prebtn=document.querySelector(".prebtn");
let nxtbtn=document.querySelector(".nxtbtn");
let counter=0;
function goback(){
    counter--;
    slideback();
    
}
function gonext()
{
    counter++;
    slide();
    
}
function slideback(){
    let img=document.querySelectorAll(".sample img");
    img.forEach((echimg)=>{
        echimg.style.transform=`translateX(${counter*100}%)`;
    // })
})
}
function slide(){
    // nxtbtn.addEventListener("click",(event)=>{
    let img=document.querySelectorAll(".sample img");
    img.forEach((echimg)=>{
        echimg.style.transform=`translateX(-${counter*100}%)`;
    // })
})
}
