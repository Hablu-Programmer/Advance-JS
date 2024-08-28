let info = document.querySelector("#app");

let MyLanguage= ["JS","TS","Py","C"];


let nodes = MyLanguage.map((para)=>{
    let li =  document.createElement("li"); 
    li.textContent = para;
    return li; 
})

info.append(...nodes)