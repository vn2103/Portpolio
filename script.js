let menu=document.querySelector("#menu");
let cut=document.querySelector("#cut");
let lbar=document.querySelector(".left-bar");
menu.addEventListener("click",()=>{
    lbar.classList.add("lefto");
    lbar.classList.remove("left-bar");
});
cut.addEventListener("click",()=>{;
    lbar.classList.remove("lefto");
    lbar.classList.add("left-bar");
});