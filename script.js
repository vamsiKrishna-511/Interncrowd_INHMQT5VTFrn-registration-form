let y= document.getElementById("register");
let z= document.getElementById("btn");

function register(){
    y.style.left="50px";
    z.style.left="110px";
}


const passwordEl = document.getElementById("password");
const cpasswordEl = document.getElementById("c-password");
const buttonEl = document.getElementById("submit-button");

buttonEl.addEventListener("click", ()=>{
    
        if(cpasswordEl.value == passwordEl.value){
            alert("Registration successful");

        }
        else{
            alert("Try again, passwords do not match");
        }
    
    
});
