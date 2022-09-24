import React from 'react';
import '../Login.css';

export default function Login() {
  return (
      <div class="main">
        <div class = "main2">
            <div class="header">
                <h2>SIGN-IN_SIGN-UP_PAGE</h2>
            </div>
            <div class="sliding-btn">
                <button class="actionbtn signin">signin</button>
                <button class="actionbtn signup">signup</button>
                <button class="movebtn">signin</button>
            </div>
            <div class="formpart">
                <form action="" class="form signinjs signinform">
                    <ul>
                        <li><input type="text" placeholder="Enter Your Username" required /></li>
                        <li><input type="password" placeholder="Enter The password" required /></li>
                        <li><input type="submit" value="Login" class="submit" /></li>
                    </ul>                
                </form>
                <form action="" class="form signupjs">
                    <ul>
                        <li><input type="text" placeholder="Enter Your Name" required /></li> 
                        <li><input type="number" placeholder="Enter Mobile No" required /></li>
                        <li><input type="text" placeholder="Enter Your Address" required /></li>
                        <li><input type="email" placeholder="Enter Email Address" required /></li>
                        <li><input type="text" placeholder="Enter Your Username" required /></li>
                        <li><input type="password" placeholder="Enter The password" required /></li>      
                        <li><input type="password" placeholder="Enter The password Agin" required /></li>  
                        <li><input type="submit" value="Register" class="submit" /></li>      
                    </ul> 
                </form>
            </div>
        </div>
    </div>
  )
}
