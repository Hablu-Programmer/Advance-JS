// const btn = document.querySelector("#btn"); //button slected 

// const radioButton = document.querySelectorAll("input[type='radio']"); // input filed accesed 

// const output  = document.querySelector("#output"); 

// btn.addEventListener("click", ()=> {
//     let selectedLanguage; 

//     for (const RadioBTN of radioButton){
//         if(RadioBTN.checked){
//             selectedLanguage = RadioBTN.value ;
//             break; 
//         }
//     }

//     output.innerHTML = selectedLanguage ;

// })



// part 2 
// const accept = document.querySelector("#accept"); 

// accept.addEventListener("click", ()=> {
    
//     accept.checked = true;

//     if(accept.checked){
//         alert("check mark succesfull")
//     }
    
// })


// part 3 


// const LanguageName = document.querySelector("#LanguageName"); 

// const btn = document.querySelector("#btn"); 

// btn.addEventListener("click", ()=> {
//     alert(LanguageName.value)
// })


const framework = document.querySelector("#framework");
const btnAdd = document.querySelector("#btnAdd"); 

const list = document.querySelector("#list"); 
const btnRemove = document.querySelector("#btnRemove"); 

btnAdd.addEventListener("click", (event)=> {
    event.preventDefault()

    if(framework.value == ""){
        alert("input filed is empty");

        return; 
    }

    const option = new Option(framework.value, framework.value);

    list.add(option, undefined);

    framework.value = ""; 
 


})


btnRemove.addEventListener("click", (e)=> {
e.preventDefault(); 

  // save the selected options
    let selected = []; 

    for ( let i = 0; i <list.options.length; i++ ){
        selected[i] = list.options[i].selected;
    }


      // remove all selected option
let index = list.options.length;

while (index--){
    if(selected[index]){
        list.remove(index)
    }
}


})