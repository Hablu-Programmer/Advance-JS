const UpdateContent = ()=> {
    const content = document.querySelector("#content");
    const hash = window.location.hash.substring(1); 

    switch(hash){
        case "home":
            content.innerHTML = "<h1>This Is Home Page </h1>";
            break; 
        case "about":
            content.innerHTML = "<h2>this is about page </h2>";
            break;
        case "contact":
            content.innerHTML = "<h3>this is contact page";
            break; 
    }

}

window.addEventListener("hashchange",UpdateContent )