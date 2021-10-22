let sendBtn= document.querySelector(".sendBtn");
let cardShow =document.querySelector(".cardShow");

sendBtn.addEventListener("click",function(){
    cardShow.classList.toggle("d-none");

    if(cardShow.classList.contains("d-none")){
        sendBtn.innerText="GÖSTƏR"
    }else{
        sendBtn.innerText="GİZLƏT"
    }
})