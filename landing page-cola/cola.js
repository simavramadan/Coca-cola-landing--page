const pep=document.querySelector(".pepsi")
const pep1=document.querySelector(".pepsi1")
const pep2=document.querySelector(".pepsi2")
const pep3=document.querySelector(".pepsi3")
const co=document.querySelector(".sec")
pep2.addEventListener("click",function(){ 
    pep.src=pep2.src;
    co.style.backgroundColor="rgb(230, 78, 73)";

})
pep1.addEventListener("click",function(){ pep.src=pep1.src
co.style.backgroundColor="#0062be"
})
pep3.addEventListener("click",function(){ pep.src=pep3.src
co.style.backgroundColor="rgb(82, 82, 82)"
}
)
