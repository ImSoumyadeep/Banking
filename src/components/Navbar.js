import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
    var [log, setlog] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid col-md-3">
                    <a className="navbar-brand" href="#">
                        <img src="https://www.fintechfutures.com/files/2016/04/EdgeVerve-Infosys.png" alt="" width="100" height="37" />
                    </a>
                </div>
                <div className="container-fluid">
                    
                    <a className="navbar-brand" style={{paddingLeft:'180px'}} href="#">Edgeverve Banking Solution</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">View Balance</a>
                            <a className="nav-link" href="#">Mini Statement</a>
                            <a className="nav-link" href="#">Fund Transer</a>
                        </div>
                    </div> */}
                    {/* <button className="btn btn-danger float-right" type="submit">Logout</button> */}

                    {/* <button className="btn btn-danger float-right" onClick={() => {
                        ((window.confirm('Are you sure you want to logout ?') == true) &&
                            (<Link to="/login" />))
                    }}>Logout</button> */}

                    <button className="btn btn-danger float-right" onClick={() => {
                        log = (window.confirm('Are you sure you want to logout ?')) ;
                        setlog(log);
                        (log === true) && (window.location.href = '/login')
                    }}>Logout</button>

                    {/* <Link className="btn btn-danger float-right" onClick={()=>{
                        window.confirm('Are you sure you want to logout ?')
                    }}  to="/login">Logout</Link> */}
                    {/*This is giving hooks error */}
                </div>
            </nav>
        </>

    )
}
