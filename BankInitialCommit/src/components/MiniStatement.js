import React from 'react'
import { useState, useEffect } from 'react';

export default function MiniStatement() {

    const [data, setdata] = useState('')


    useEffect(() => {
        const url = '';     // Get ministatement url
        fetch(url).then(resp => resp.json())
            .then(resp => setdata(resp))
    }, [])

    return (
        <div className="App" style={{ paddingTop: "20px", paddingBottom: "80px" }}>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Txn ID</th>
                        <th scope="col">Transaction Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map(element => {
                        return (
                            <tr>
                                <td>{element.txnid}</td>
                                <td>{element.date}</td>
                                <td>{element.bal}</td>
                                <td>{element.currency}</td>
                            </tr>
                        )
                    })} */}


                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
