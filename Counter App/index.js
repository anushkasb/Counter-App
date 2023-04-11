let decBtn=document.getElementById("dec");
let incBtn=document.getElementById("inc");
let resetVal=document.getElementById("reset");
let displayVal=document.getElementById("result");




decBtn.addEventListener("click",() =>
{
    let present_val= Number(displayVal.innerText);
    if(present_val>0){
     displayVal.innerText= present_val-1;
    }
    else 
    alert("negative value not allowed");

});

incBtn.addEventListener("click",() =>
{
    let present_val= Number(displayVal.innerText);
    if(present_val>=0){
     displayVal.innerText= present_val+1;
    }
    else 
    alert("negative value not allowed");

});

resetVal.addEventListener("click",()=>{
    displayVal.innerText=0;
})