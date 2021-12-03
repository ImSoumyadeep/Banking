import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Balance from './Balance'
import MiniStatement from './MiniStatement'
import Transfer from './Transfer'

export default function Home() {

    const [view, setview] = useState('0')
    const [data, setdata] = useState('')
    const [ministatement, setministatement] = useState('')

    const { id } = useParams()

    // if(auth==='0') id = 'fakeId';


    useEffect(() => {
        const url = `http://localhost:8080/customer`;     // Get user data url
        // fetch(url).then(resp => resp.json())
        //     .then(resp => setdata(resp))
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": `${id}` })
        }).then(resp => resp.json())
            .then(resp => setdata(resp))
    }, [])



    // useEffect(() => {
    //     const url = `http://localhost:8080/ministatement/${id}`;     // Get ministatement url
    //     fetch(url).then(resp => resp.json())
    //         .then(resp => setministatement(resp))
    // }, []) 


    useEffect(() => {
        const url = `http://localhost:8080/ministatement`;     // Get user data url
        // fetch(url).then(resp => resp.json())
        //     .then(resp => setdata(resp))
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "id": `${id}` })
        }).then(resp => resp.json())
            .then(resp => setministatement(resp))
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
                <button type="button" onClick={() => { setview('1') }} style={{ marginRight: "100px", backgroundColor: "purple", color: "white" }} className="btn btn-success">View Balance</button>
                <button type="button" onClick={() => { setview('2') }} className="btn btn-success" style={{ marginRight: "100px" }}>Mini Statement</button>
                <button type="button" onClick={() => { setview('3') }} style={{ marginRight: "100px" }} className="btn btn-warning">Fund Transfer</button>
                <button type="button" onClick={() => { setview('0') }} className="btn btn-danger">Clear</button>
                {/* </div> */}
            </div>

            <div className="container">
                {view === '1' && (
                
                    <Balance balance={data.bal} />
                )}
                {view === '2' && (

                    <MiniStatement transactionDataArray={ministatement} />
                )}
                {view === '3' && (
                    <Transfer id={id} key="id" />
                )}

                {view === '0' && (
                    <div></div>
                )}

            </div>
        </div>
    )
}

