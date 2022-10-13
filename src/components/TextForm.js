import React, { useState } from 'react'



export default function TextForm(props) {
    const [txt, setTxt] = useState('...');
    
    const toU = () => {

        console.log("upper case button clicked");
        let Utxt = txt.toUpperCase();
        setTxt(Utxt)
        // // console.log(Utxt);
    }
    const toL = () => {

        console.log("lower case button clicked");
        let Ltxt = txt.toLowerCase();
        setTxt(Ltxt)
        // // console.log(Utxt);
    }

    const myonChange = (event) => {
        setTxt(event.target.value);
    }

    return (
        <>
            <div className='container my-4'>



                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.formtitle}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={txt} onChange={myonChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary m-3" onClick={toU}>TO UPPER CASE</button>
                <button type="submit" className="btn btn-primary m-3" onClick={toL}>TO LOWER CASE</button>
            </div>

            <div className='container'>

                <h1>OUTPUT </h1>
                <p>{txt}</p>

            </div>

            <div className='container'>
                <h3>SUMMARY</h3>

                <li>words count : {txt.split(" ").length} </li>

                <li>length of message  : {txt.length} </li>

            </div>

            



        </>

    )
}
