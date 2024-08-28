// // const clickMe = document.querySelector("#clickMe"); 

// // clickMe.addEventListener("mousedown", ()=> {
// //   console.log("You Have Clicked Mouse Down Button")
// // })

// // clickMe.addEventListener("mouseup", ()=>{
// //   console.log("mouse button is released")
// // })

// // clickMe.addEventListener("click", ()=>{
// //   console.log("mouse button is clicked")
// // })

// // clickMe.addEventListener("dblclick", ()=>{
// //   console.log("mouse button is dblClick")
// // })



// const clickMe = document.querySelector("#clickMe"); 
// const ChangeColor = document.querySelector("#ChangeColor");
// let body =  document.querySelector("body"); 
// let Text  = document.querySelector("#Text"); 


// clickMe.addEventListener("click", ()=> {
//   body.style.backgroundColor = "red"
// })

// ChangeColor.addEventListener("click", ()=> {

//   body.style.backgroundColor = "black"
// })

// Text.addEventListener("click", ()=> {
//   Text.style.color = "tomato"
// })



let controler  = document.querySelector("#controler"); 

controler.addEventListener("click", function (e) {
    const ScrollExample = document.querySelector("#ScrollExample");  
    console.log(ScrollExample)
    let event = e.target; 

    switch(event.id){
        case "btnScrollLeft":
            ScrollExample.scrollLeft  += 50; 
            break; 

        case "btnScrollTop":
            ScrollExample.scrollTop  += 100;
            break;

    }

})