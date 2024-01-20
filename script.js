let sample=document.querySelector(".sample");

let prebtn=document.querySelector(".prebtn");
let nxtbtn=document.querySelector(".nxtbtn");
let counter=0;
function goback(){
    counter--;
    if(counter>=0)
    {
       slideback(); 
    }
    
    else{
        counter=length-1;
        return;
    }
}
function gonext()
{
    let length=document.querySelector(".sample").childElementCount;
    console.log(length);
    counter++;
    if(counter<length){
slide();
    }
    else{
        counter=1;
    }
    
    
}
function slideback(){
    let img=document.querySelectorAll(".sample img");
    img.forEach((echimg)=>{
        echimg.style.transform = `translateX(-${counter * 100}%)`;
})
}
function slide(){
    let img=document.querySelectorAll(".sample img");
    img.forEach((echimg)=>{
        echimg.style.transform=`translateX(-${counter*100}%)`;
})
}


//work on icon for home page
let icon=document.querySelector(".list1 button");
icon.addEventListener("click",()=>{
   let homepage = document.querySelector(".list1 ul");
   let icon=document.querySelector(".list1  button i");
   icon.style.display="none";
   homepage.classList.remove('display');
   homepage.className="homepage";
})

