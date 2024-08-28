const message = document.querySelector("#message"); 
const result  = document.querySelector("#result"); 

message.addEventListener("input", ()=> {
    result.innerHTML = message.value
})