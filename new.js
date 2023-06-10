let clearit=document.querySelector(".clear");
let equalto =document.querySelector(".equal");
let mainoutput=document.querySelector(".mainoutput span")
let allnumberbtn=document.querySelectorAll("button.gray");
let mainallnumbtnarray=Array.from(allnumberbtn);
let allsignbtn=document.querySelectorAll("button.organge");
let mainallsignarray=Array.from(allsignbtn);

mainallnumbtnarray.forEach((btn)=>{
  btn.addEventListener("click",function(){
    mainoutput.innerHTML += `${btn.dataset.number}`
  })
})

mainallsignarray.forEach((btn)=>{
  btn.addEventListener("click",function(){
    mainoutput.innerHTML += ` ${btn.dataset.number} `
  })
})

clearit.addEventListener("click",function(){
  mainoutput.innerHTML = "";
})

equalto.addEventListener("click",function(){
  if(mainoutput.innerHTML == ""){
    mainoutput.innerHTML = "";
  }else{
    let anwer = eval(mainoutput.innerHTML);
    mainoutput.innerHTML = "";
    mainoutput.innerHTML = anwer;
  }
})