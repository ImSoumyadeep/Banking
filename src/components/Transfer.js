import React from 'react'
import { useState } from 'react'

export default function Transfer() {

    const [id, setid] = useState('')
    const [amount, setamount] = useState('')
    const [modal, setmodal] = useState('0')


    let data = { id, amount }


    function successModal() {
        setmodal('0')
        return (
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">PAYMENT SUCCESSFULL !!!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            An amount of ${amount} INR has been sent to Account No ${id} successfully. You can check your updated balance and transaction details now....
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Got It</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function transfer() {

        if (id && amount) {

            fetch(`http://localhost:8080/transfer/${id}/${amount}`, {                  // link to transfer
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((result) => {
                result.json().then((response) => {

                    response = JSON.stringify(response)

                    if (response === 'true') {
                        alert("Payment Successful !!!!")
                        document.getElementById('amount').value = ''
                        document.getElementById('id').value = ''
                        // document.getElementById('checkbox').checked = false
                        // successModal()
                    }
                    else
                        alert("Either receiver's Account No is incorrect or your balance is insufficient !!!!")
                        
                })
            })
        }
        else {
            alert('Please fill both Account No and amount is required format !!!')
        }

    }



    return (
        <div>
            <div className="container">
                <div className="input-group mb-3" style={{ marginTop: "50px" }}>
                    <input type="" id="id" className="form-control" style={{ marginRight: "200px" }} placeholder="Beneficiary Account Number" value={id} onChange={(e) => { setid(e.target.value) }} aria-label="accno" required />

                    <input type="number" step="0.01" className="form-control" placeholder="Enter Amount" aria-label="amount" id="amount" value={amount} onChange={(e) => { setamount(e.target.value) }} required />
                    <span className="input-group-text">INR</span>

                </div>
            </div>
            <div className="container input-group mb-3">
                <input className="form-check-input rounded" id="checkbox" type="checkbox" value="" id="flexCheckChecked" checked required />
                <label className="form-check-label font-monospace text-muted" htmlFor="flexCheckChecked">
                    &nbsp; I have checked the receiver's A/C No and amount before transacting
                </label>
            </div>
            <div className="container" style={{ marginTop: "20px", paddingBottom: "100px" }}>
                <button id="transferButton" className="btn btn-dark" onClick={transfer} >Make Payment</button>
                {/* {(id && amount)?(document.getElementById('transferButton').disabled = false):''} */}
                {/* {(modal === '1')?(successModal):''} */}
            </div>
        </div>
    )
}
