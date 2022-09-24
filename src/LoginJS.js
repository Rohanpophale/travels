const signin = document.querySelector(".signin")
const signup = document.querySelector(".signup")
const movebtn = document.querySelector(".movebtn")
const signinjs = document.querySelector(".signinjs")
const signupjs = document.querySelector(".signupjs")

signup.addEventListener("click",()=>{
    movebtn.classList.add("rightbtn");
    signinjs.classList.remove("signinform");
    signupjs.classList.add("signupform");
    movebtn.innerHTML = "Register";
}) 

signin.addEventListener("click",()=>{
    movebtn.classList.remove("rightbtn");
    signinjs.classList.add("signinform");
    signupjs.classList.remove("signupform");
    movebtn.innerHTML = "Login";
}) 