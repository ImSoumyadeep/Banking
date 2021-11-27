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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Txn ID</th>
                        <th scope="col">Account No</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date of Transaction</th>
                    </tr>
                </thead>
                <tbody>


                    {props.transactionDataArray.map(element => {
                        return (
                            <tr>
                                <td>{element.txnid}</td>
                                <td>{element.debit_acid}</td>
                                <td>{element.amount}</td>
                                <td>{element.date_of_transaction}</td>
                            </tr>
                        )
                    })}


                    {/* <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr> */}

                </tbody>
            </table>
        </div>
    )
}
