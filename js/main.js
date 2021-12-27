let btn = document.getElementById("btn");
let box = document.querySelectorAll(".info")[0];
let load = document.querySelectorAll(".loading")[0];
let last = document.querySelectorAll(".last")[0];
console.log(box)
btn.addEventListener("click", (e)=>{
    box.style.display="none"
    load.style.display="flex"
    setTimeout(() => {
    load.style.display="none";
    last.style.display="flex";
    }, 5000);
})