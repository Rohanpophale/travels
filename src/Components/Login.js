import React from 'react';
import '../Login.css';

export default function Login() {

    const login = () => {
        const signin = document.querySelector(".signin")
        const movebtn = document.querySelector(".movebtn")
        const signinjs = document.querySelector(".signinjs")
        const signupjs = document.querySelector(".signupjs")
        signin.addEventListener("click", () => {
            movebtn.classList.remove("rightbtn");
            signinjs.classList.add("signinform");
            signupjs.classList.remove("signupform");
            movebtn.innerHTML = "Login";
        })
    }

    const register = () => {
        const signup = document.querySelector(".signup")
        const movebtn = document.querySelector(".movebtn")
        const signinjs = document.querySelector(".signinjs")
        const signupjs = document.querySelector(".signupjs")
        signup.addEventListener("click", () => {
            movebtn.classList.add("rightbtn");
            signinjs.classList.remove("signinform");
            signupjs.classList.add("signupform");
            movebtn.innerHTML = "Register";
        })
    }

    return (
        <>
            <div class="main">
                <div class="main2">
                    <div class="header">
                        <h2>Login / Register</h2>
                    </div>
                    <div class="sliding-btn">
                        <button class="actionbtn signin" onClick={login}>Login</button>
                        <button class="actionbtn signup" onClick={register}>Register</button>
                        <button class="movebtn">Login</button>
                    </div>
                    <div class="formpart">
                        <form action="" class="form signinjs signinform">
                            <ul>
                                <li><input type="text" placeholder="Username" required /></li>
                                <li><input type="password" placeholder="Password" required /></li>
                                <li><input type="submit" value="Login" class="submit" /></li>
                            </ul>
                        </form>
                        <form action="" class="form signupjs">
                            <ul>
                                <li><input type="text" placeholder="Name" required /></li>
                                <li><input type="number" placeholder="Mobile No" required /></li>
                                <li><input type="text" placeholder="Address" required /></li>
                                <li><input type="email" placeholder="Email Address" required /></li>
                                <li><input type="text" placeholder="Username" required /></li>
                                <li><input type="password" placeholder="Password" required /></li>
                                <li><input type="password" placeholder="Re-enter Password" required /></li>
                                <li><input type="submit" value="Register" class="submit" /></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Helmet>
                <script src='../LoginJS.js'></script>
            </Helmet> */}
        </>
    )

}