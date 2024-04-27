import React, {useState} from "react";
import '../AddTransaction.css'
function AddTransaction(){
function handleInput( e){
e.preventDefault()
}
return(
<>
<div className="inputCont">
<form  className="form">
<span>Date:<input type="Date" placeholder="Date" onChange={handleInput} className="input"/></span>
<input type="Text" placeholder="Description"onChange={handleInput} className="input"/>
<input type="Text" placeholder="Category" onChange={handleInput} className="input"/>
<input type="Number" placeholder="Amount" onChange={handleInput} className="input"/>
</form>
</div>
<div className="button">
<button >Add Transaction</button>
</div>        
</>
    )
}
export default AddTransaction
