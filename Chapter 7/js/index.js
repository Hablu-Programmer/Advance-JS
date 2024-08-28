// const elements = document.querySelector("#elements"); 
// const body = document.querySelector("body")
// elements.style.backgroundColor = "green"; 
// elements.style.textAlign = "center"; 
// elements.style.color = "red"; 
// elements.style.padding = "10px"; 
// elements.style.margin = "0px"
// body.style.margin = "0px"; 


//  let Element = document.querySelector("#elements");  // select

//  let style = getComputedStyle(Element); // computed 


//  console.log(style.color) // access 


const container = document.querySelector("#container");

// for( let CssClass of container.classList){
//     console.log(CssClass)
// }

container.classList.add("Info"); 

console.log(container.className)

container.classList.remove("contentArea"); 

container.classList.replace("divElement", "HabluMama")