let header = document.querySelector("header")
let liA = document.querySelectorAll("header ul li a")

window.addEventListener("scroll",()=>{
    if (window.pageYOffset != 0){
        header.style.backgroundColor = "rgba(0,0,0,0.5)"
        header.style.color="white"
        liA.forEach(a=>{
            a.style.color="white"
        })
    }
    else{
        header.style= ""
        liA.forEach(a=>{
            a.style=""
        })
    }
})