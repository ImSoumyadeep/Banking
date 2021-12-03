import React from 'react'
import { useState } from 'react'

export default function Transfer(props) {

    const [recieverId, setrecieverId] = useState('')
    const [amount, setamount] = useState('')
    const [modal, setmodal] = useState('0')

    let id;
    id = props.id;
    let data = { "id": id, "amount": parseFloat(amount), "recieverId": recieverId }


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
        // console.log(data)
        // console.log(JSON.stringify(data))


        if (recieverId && amount) {

            if (amount <= 0) {
                alert('Please enter a valid amount > 0')
                document.getElementById('amount').value = ''
            }

            else {

                fetch('http://localhost:8080/transfer', {         // link to transfer
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then((result) => {
                    result.json().then((resp) => {

                        // alert(result.json())
                        alert(resp)

                        document.getElementById('receiverid').value = ''
                        document.getElementById('amount').value = ''
                    })
                })
            }
        }
        else {
            alert('Please fill both Account No and amount in required format to proceed the payment!!!')
        }


    }



    return (

        <>
            <div className="App" style={{ marginTop: "50px" }}>
                <h6 className="card-subtitle mb-2 text-muted">{`Amount will be debited from ${id}`}</h6>
            </div>
            <div>
                <div className="container">
                    <div className="input-group mb-3" style={{ marginTop: "50px" }}>
                        <input type="" id="receiverid" className="form-control" style={{ marginRight: "200px" }} placeholder="Beneficiary Account Number" value={recieverId} onChange={(e) => { setrecieverId(e.target.value) }} aria-label="accno" required />

                        <input type="number" min="1" step="0.01" className="form-control" placeholder="Enter Amount" aria-label="amount" id="amount" value={amount} onChange={(e) => { setamount(e.target.value) }} required />
                        <span className="input-group-text">INR</span>

                    </div>
                </div>
                <div className="container input-group mb-3">
                    <input className="form-check-input rounded" id="checkbox" type="checkbox" value="" id="flexCheckChecked" defaultChecked required />
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
        </>
    )
}
