import React from 'react';
import { useState } from 'react';
import '../Login.css';
import axios from 'axios';

export default function Login() {

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [pass, setPass] = useState("")

    const loginForm = () => {
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

    const registerForm = () => {
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

    const handleRegister = (e) => {
        e.preventDefault();
        if (pass !== password) {
            alert("The passwords do not match! Please re-enter the password.")
            setPass("")
        }
        else {
            const newUser = {
                name: name,
                mobile: mobile,
                address: address,
                email: email,
                username: username,
                password: password
            }

            axios.post('http://localhost:4000/app/signup', newUser)
                .then(response => window.alert(response.data.message))
            setName("")
            setMobile("")
            setAddress("")
            setEmail("")
            setUsername("")
            setPassword("")
            setPass("")
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        }

        axios.post('http://localhost:4000/app/signin', user)
            .then(response => window.alert(response.data.message))
        setUsername("")
        setPassword("")
    }

    return (
        <>
            <div className="main">
                <div className="main2">
                    <div className="header">
                        <h2>Login / Register</h2>
                    </div>
                    <div className="sliding-btn">
                        <button className="actionbtn signin" onClick={loginForm}>Login</button>
                        <button className="actionbtn signup" onClick={registerForm}>Register</button>
                        <button className="movebtn">Login</button>
                    </div>
                    <div className="formpart">
                        <form onSubmit={handleLogin} className="form signinjs signinform">
                            <ul>
                                <li><input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} value={username} required /></li>
                                <li><input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} required /></li>
                                <li><input type="submit" value="Login" className="submit" /></li>
                            </ul>
                        </form>
                        <form onSubmit={handleRegister} className="form signupjs">
                            <ul>
                                <li><input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} value={name} required /></li>
                                <li><input type="text" placeholder="Mobile No." onChange={(e) => { setMobile(e.target.value) }} value={mobile} required /></li>
                                <li><input type="text" placeholder="Address" onChange={(e) => { setAddress(e.target.value) }} value={address} required /></li>
                                <li><input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} value={email} required /></li>
                                <li><input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} value={username} required /></li>
                                <li><input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} required /></li>
                                <li><input type="password" placeholder="Re-enter Password" onChange={(e) => { setPass(e.target.value) }} value={pass} required /></li>
                                <li><input type="submit" value="Register" className="submit" /></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}