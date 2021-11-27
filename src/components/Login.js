
import React, { useState } from 'react';



import './Login.css'

export default function Login() {

    const [id, setid] = useState('')
    const [password, setpassword] = useState('')
    const [token, settoken] = useState('')
  


    function userLogin() {

        let data = { id, password }

        fetch(`http://localhost:8080/login/${id}/${password}`, {                  // link to login
            method: 'POST',                         // Api is returning data 'true' or 'false'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                
                resp=JSON.stringify(resp)
                // console.log(result)
                
                if(resp==='true') {
                settoken('1');
               
                window.location.href = `http://localhost:3000/home/${id}`
                
                
                }
                // else window.location.href = "https://www.google.com"
                else alert("Account No or Password is incorrect !!!")
                }
            )
        })
        
    }




    return (
        <div>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* <!-- Tabs Titles --> */}

                    {/* <!-- Icon --> */}
                    <div className="fadeIn first">
                        <img src="https://www.fintechfutures.com/files/2016/04/EdgeVerve-Infosys.png" id="icon" alt="User Icon" />
                    </div>


                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Account Number" value={id} onChange={(e) => { setid(e.target.value) }} required />
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password (DOB as YYYY-MM-DD)" value={password} onChange={(e) => { setpassword(e.target.value) }} required />

                    {/* <Link className="btn btn-warning" style={{marginBottom:"25px",marginTop:"10px"}} to="/home" onClick={
                        userLogin
                    }>Login</Link> */}

                    <button id="loginButton" className="btn btn-warning" style={{marginBottom:"25px",marginTop:"10px"}} onClick={
                        userLogin 
                    }>Login</button>


                </div>
            </div>
        </div>
    )
}
