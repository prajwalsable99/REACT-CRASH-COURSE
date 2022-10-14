import React, { useState } from 'react'



export default function TextForm(props) {
    const [txt, setTxt] = useState('...');
    
    const toU = () => {

        console.log("upper case button clicked");
        let Utxt = txt.toUpperCase();
        setTxt(Utxt)
        props.showalert("upper case conversion","success");
        // // console.log(Utxt);
    }
    const toL = () => {

        console.log("lower case button clicked","success");
        let Ltxt = txt.toLowerCase();
        setTxt(Ltxt)
        // // console.log(Utxt);
        props.showalert("lower case conversion","success");
    }

    const myonChange = (event) => {
        setTxt(event.target.value);
    }

    return (
        <>
            <div className='container my-4' style={{color: props.mode ==='dark'?'white':'black'}}>



                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.formtitle} 
                    
                    </label>
                    <textarea className="form-control" style={{backgoundColor : props.mode ==='dark'?'grey':'white'}} id="exampleFormControlTextarea1" rows="7" value={txt} onChange={myonChange} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary m-3" onClick={toU}>TO UPPER CASE</button>
                <button type="submit" className="btn btn-primary m-3" onClick={toL}>TO LOWER CASE</button>
            </div>

            <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>

                <h1>OUTPUT </h1>
                <p>{txt}</p>

            </div>

            <div className='container' style={{color: props.mode ==='dark'?'white':'black'}}>
                <h3>SUMMARY</h3>

                <li>words count : {txt.split(" ").length} </li>

                <li>length of message  : {txt.length} </li>

            </div>

            



        </>

    )
}
