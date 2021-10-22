let singleImage=document.querySelectorAll(".col-lg-3 a");
let BigImage = document.querySelector(".bigImage");

singleImage.forEach(item =>{
    item.addEventListener("click",function(e){
        e.preventDefault();
        let hrefImage = item.getAttribute("href");
        BigImage.setAttribute("src",hrefImage);
    })
})