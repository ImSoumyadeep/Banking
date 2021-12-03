import React, { useState, useEffect } from 'react'

export default function Balance(props) {

    // userid = props.

    const [data, setdata] = useState('')

    useEffect(()=>{
        const url = '';     // Get balance url
        fetch(url).then(resp=>resp.json())
        .then(resp=>setdata(resp))
    },[])  

    // Get indivisual data-> data.map(e=>console.log(e.balance))



    return (
        <div className="App">
            <div style={{ marginTop: "30px" }}>
                <h4>{`Balance is: ${data.bal} INR`}</h4>

                {/* <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul> */}
            </div>

        </div>
    )
}
