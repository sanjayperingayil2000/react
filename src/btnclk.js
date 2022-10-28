
import './index.css';
import React, { useState } from "react"; 

const Btnclk = () => {
    const [style, setStyle] = useState("flbx");

    const Toggle1 = () =>{
        if(style ==="flbx") {
        setStyle("flbx1");
        }
        else if(style ==="flbx1"){
            setStyle("flbx");
        }

    } 

    const [show, setShow]= useState("clbx")
    const toggle2=()=>{
        if(show ==="clbx") {
            setShow("clbx1");
            }
            else if(show ==="clbx1"){
                setShow("clbx");
            }
    }

    return (
        <>
    
    <h1 className="text-center txtshdw">Styling using functional and class component</h1>
    <div className="d-flex justify-content-around mrgbt">
        <button className='bttno' onClick={Toggle1}><b>To see styling in functional components</b></button>
        <button className='bttno' onClick={toggle2}><b>To see styling in class components</b></button><br/><br/>
    </div>
    <div className="d-flex justify-content-around mrgbt">
    <div id="bttno1" className={style}><br /><br/>
        <h1>This is created using functional component</h1><br/><br/>
        <h5>This is done using external css</h5><br/>
        <h5 style={{color:"red"}}>This is done using internal css</h5>
    </div>
    <div id="bttno2" className={show} style={{backgroundColor:"cyan"}}><br /><br/>
        <h1>This is created using class component</h1><br/><br/>
        <h5>This is done using external css</h5><br/>
        <h5 style={{color:"red"}}>This is done using internal css</h5>
    </div>
    </div>
    </>
    );
}

export default Btnclk;
