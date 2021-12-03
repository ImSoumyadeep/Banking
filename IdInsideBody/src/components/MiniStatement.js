import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function MiniStatement(props) {

    const [data, setdata] = useState('')



    // useEffect(() => {
    //     const url = `http://localhost:8080/ministatement/${id}`;     // Get ministatement url
    //     fetch(url).then(resp => resp.json())
    //         .then(resp => setdata(resp))
    // }, [])

    // console.log(props.dataArray)

    return (
        <div className="App" style={{ paddingTop: "20px", paddingBottom: "80px" }}>
            <br />
            <h6 className="card-subtitle mb-2 text-muted">Showing last 10 transactions</h6>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sender A/C</th>
                        <th scope="col">Beneficiary A/C</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date of Transaction</th>
                    </tr>
                </thead>
                <tbody>

                    {/* {(props.transactionDataArray).length>10?
                props.transactionDataArray.slice(0,10):''    
                } */}
                    {/* {console.log(props.transactionDataArray[1])} */}

                    {props.transactionDataArray.slice(0, 10).map(element => {
                        return (
                            <tr>
                                <td>{element.debit_acid}</td>
                                <td>{element.credit_acid}</td>
                                <td>{element.amount}</td>
                                <td>{element.date_of_transaction}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
