let allBodyTitle =document.querySelectorAll("#tab-menu .body div");
let allBodyItems=document.querySelectorAll("#tab-menu .content .item")

allBodyTitle.forEach(title=>{
    title.addEventListener("click",function(){
        let active =document.querySelector(".active");
        active.classList.remove("active");
        this.classList.add("active");

        let id = title.getAttribute("data-id");
        // console.log(id);
        allBodyItems.forEach(item=>{
            if(item.getAttribute("data-id") ==id){
               item.classList.remove("d-none")
            }else{
                item.classList.add("d-none")
            }
        })

    })
})
