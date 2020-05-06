import React, { useState, useRef } from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import './des.css';

function App() {
  const [val, setVal] = useState('')
  const speedIn = useRef()

  function handleSpeed(e){

    var sp = speedIn.current.value
    if(sp>200){
      sp=200
      alert("Speed limit exceeded.")
    }
    setVal(sp)
    speedIn.current.value = null
  }

  return (
    <div style={{backgroundColor:"#162252"}} class="form-style-9">
    <div style={{alignItems:"center", justifyContent:"center", display:"flex"}}>
      <h1 style={{color:"black"}}>Car Dashboard</h1>
    </div>
    <div style={{alignItems:"center", justifyContent:"center", display:"flex"}}>
      <ReactSpeedometer
        maxValue={200}
        value={val}
        needleColor="red"
        startColor="green"
        segments={10}
        endColor="red"
      />
    </div>
    <div style={{alignItems:"center", justifyContent:"center", display:"flex"}}>
      <input  ref={speedIn}type="text" placeholder="Enter Speed" style={{borderWidth:'5', borderBlockColor:'black'}}></input>
      <button onClick={handleSpeed} >Submit</button>
      <br></br>
      <br></br>
    </div> 
    </div> 
   

  );
}

export default App;
