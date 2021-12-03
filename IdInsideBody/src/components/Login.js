
import React, { useState } from 'react';



import './Login.css'

export default function Login() {

    const [id, setid] = useState('')
    const [password, setpassword] = useState('')
    const [token, settoken] = useState('')


    // Password encryption
    function encryption() {
        let encrypted, x, p, i; encrypted = ""
        x = document.getElementById("password").value;
        for (i = 0; i < x.length; i++) {
            if (i % 2 == 0) {
                p = String.fromCharCode(x[i].charCodeAt(0) + 1);
            }
            else {
                p = String.fromCharCode(x[i].charCodeAt(0) - 1);
            }
            encrypted += p
        }
        console.log(encrypted);
        return encrypted;
    }



    function userLogin() {

        let password; password = encryption()

        let data = { id, password }

        console.log(password)

        fetch('http://localhost:8080/login', {                  // link to login
            method: 'POST',                         // Api is returning data 'true' or 'false'
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": `${id}`, "encPassword": `${password}` })
        }).then((result) => {
            result.json().then((resp) => {

                resp = JSON.stringify(resp)
                // console.log(result)

                if (resp === 'true') {
                    settoken('1');

                    window.location.href = `http://localhost:3000/home/${id}`


                }
                // else window.location.href = "https://www.google.com"
                else alert("Account No or Password is incorrect !!!")
            }
            )
        })

        encryption();

    }


    // var encrypted = CryptoJS.AES.encrypt("Soumyadeep", "Secret Passphrase");
    // //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

    // var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    // //4d657373616765

    // let answer;

    // document.getElementById("login").innerHTML = encrypted;
    // document.getElementById("password").innerHTML = decrypted;
    // answer = decrypted.toString(CryptoJS.enc.Utf8);
    // console.log(answer)




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
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} required />

                    {/* <Link className="btn btn-warning" style={{marginBottom:"25px",marginTop:"10px"}} to="/home" onClick={
                        userLogin
                    }>Login</Link> */}

                    <button id="loginButton" className="btn btn-warning" style={{ marginBottom: "25px", marginTop: "10px" }} onClick={
                        userLogin
                    }>Login</button>

                </div>
            </div>
        </div>
    )
}
