import React from 'react';
import '../Login.css';
// import '../LoginJS';
import { Helmet } from 'react-helmet';
export default function Login() {

    return (
        <>
            <div class="main">
                <div class="main2">
                    <div class="header">
                        <h2>Login / Register</h2>
                    </div>
                    <div class="sliding-btn">
                        <button class="actionbtn signin">Login</button>
                        <button class="actionbtn signup">Register</button>
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