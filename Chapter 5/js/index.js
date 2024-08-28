// part 1 
// let app = document.querySelector("#app"); 

// app.insertAdjacentHTML("beforebegin", "<h2> Before Ul List </h2>")
// app.insertAdjacentHTML("afterbegin", "<li>Home Page </li>")
// app.insertAdjacentHTML("beforeend", "<li>Signup Now </li>")
// app.insertAdjacentHTML("afterend", "<h2>After Ul List </h2>")


// part 2 replace node 
// let menu =  document.querySelector("#menu");

// let h1 =  document.createElement("h1");
// h1.textContent = "Home"

// menu.replaceChild(h1, menu.firstElementChild)


// part 3  clone node

// let menu = document.querySelector("#menu"); 

// let cloneMenu = menu.cloneNode(true); 
// cloneMenu.id = "small-Menu"
// document.body.appendChild(cloneMenu)


// let menu = document.querySelector("#menu"); 

// menu.removeChild(menu.lastElementChild)



// part 4 insert before and after 

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

let app =  document.querySelector("#menu");

let li = document.createElement("li"); 
li.textContent = "Home"; 

insertAfter(li, app.lastElementChild)

