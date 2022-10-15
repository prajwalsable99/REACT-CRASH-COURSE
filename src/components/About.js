import React from 'react'

export default function About() {
    return (
        <div className='container my-5 py-4'>

            <div className="row mt-2">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">My first react project</h5>


                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Thanks to code with harry yt</h5>


                        </div>
                    </div>
                </div>
            </div>

            
            <div className="progress my-3">
                <div className="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress my-3">
                <div className="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress my-3">
                <div className="progress-bar bg-primary" role="progressbar" aria-label="Basic example" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="progress my-3">
                <div className="progress-bar bg-success" role="progressbar" aria-label="Basic example" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

        </div>
    )
}


