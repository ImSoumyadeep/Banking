import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Balance from './Balance'
import MiniStatement from './MiniStatement'
import Transfer from './Transfer'

export default function Home() {

    const [view, setview] = useState('0')
    const [data, setdata] = useState('')



    useEffect(() => {
        const url = '';     // Get user data url
        fetch(url).then(resp => resp.json())
            .then(resp => setdata(resp))
    }, [])

    return (
        <div>
            <div className="container card" style={{ width: "8rem;", alignItems: "center", marginTop: "20px" }}>
                <div className="card-body">
                    <h5 className="card-title">{`Welcome ${data.name}`}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Your account details:</h6>
                    <p className="card-text">{`Your A/C No - ${data.acid}`} <br />{`Your DOB - ${data.dob}`}</p>
                    <h6 className="card-subtitle mb-2 text-muted">Don't share your details with anyone...</h6>

                </div>
            </div>

            <div className="container d-flex justify-content-center" style={{ marginTop: "30px" }}>
                {/* <div class="btn-group" role="group" aria-label="Basic mixed styles example"> */}
                <button type="button" onClick={() => { setview('1') }} style={{ marginRight: "100px" }} className="btn btn-primary">View Balance</button>
                <button type="button" onClick={() => { setview('2') }} className="btn btn-success" style={{ marginRight: "100px" }}>Mini Statement</button>
                <button type="button" onClick={() => { setview('3') }} style={{ marginRight: "100px" }} className="btn btn-warning">Fund Transfer</button>
                <button type="button" onClick={() => { setview('0') }} className="btn btn-danger">Clear</button>
                {/* </div> */}
            </div>

            <div className="container">
                {view === '1' && (
                    <Balance userId={data.acid} />
                )}
                {view === '2' && (
                    <MiniStatement userId={data.userid} />
                )}
                {view === '3' && (
                    <Transfer />
                )}

                {view === '0' && (
                    <div></div>
                )}

            </div>
        </div>
    )
}
