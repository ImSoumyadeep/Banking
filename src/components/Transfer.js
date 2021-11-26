import React from 'react'
import { useState } from 'react'

export default function Transfer() {

    const [id, setid] = useState('')
    const [amount, setamount] = useState('')


    let data = { id, amount }

    function transfer(){

        fetch(`https://reqres.in/${id}/${amount}`, {                  // link to transfer
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)
                if(resp==='success') 
                alert("Payment Successful !!!!")
                else 
                alert("Either receiver's Account No is incorrect or the balance is insufficient !!!!")
            })
        })

    }



    return (
        <div>
            <div className="container">
                <div className="input-group mb-3" style={{ marginTop: "50px" }}>
                    <input type="" className="form-control" style={{ marginRight: "200px" }} placeholder="Receiver Account Number" value={id} onChange={(e) => { setid(e.target.value) }} aria-label="accno" required />
                    
                    <input type="number" className="form-control" placeholder="Enter Amount" aria-label="amount" value={amount} onChange={(e) => { setamount(e.target.value) }}  required />
                    <span className="input-group-text">INR</span>
                    
                </div>
            </div>
            <div className="container input-group mb-3">
                <input className="form-check-input rounded" type="checkbox" value="" id="flexCheckChecked" required />
                <label className="form-check-label font-monospace text-muted" htmlFor="flexCheckChecked">
                    &nbsp; I have checked the receiver's A/C No and amount before transacting
                </label>
            </div>
            <div className="container" style={{ marginTop: "20px", paddingBottom: "100px" }}>
                <button className="btn btn-dark" onClick={transfer}>Make Payment</button>
            </div>
        </div>
    )
}
