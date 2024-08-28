// const menu =  document.querySelector("#menu"); 


// menu.addEventListener("click", (event)=>{
//     let target = event.target; 

//     switch(target.id){
//         case "Home":
//             console.log("You Have Clicked Home Button");
//             break;
//         case "About":
//             console.log("you have cliicked about button");
//             break;
//         case "report": 
//             console.log("you have clicked report button");
//             break; 
//     }
// })



// const myButton =  document.querySelector("#myButton"); 

// myButton.addEventListener("click", ()=> {
//     alert("button was clicked")
// })


// const event = new Event("click"); // cons

// myButton.dispatchEvent(event) // method 




const myButton = document.querySelector("#myButton"); // bututon 

myButton.addEventListener("click", ()=> {

   let event =   new CustomEvent("Notify"); // cons
   
   document.dispatchEvent(event) // dispath 
})



document.addEventListener("Notify", ()=> {
    alert("custom event fired")// Listen for the custom event
})