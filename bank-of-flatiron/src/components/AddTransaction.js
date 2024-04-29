import React, {useState} from "react";
import '../AddTransaction.css'
import Transaclist from "./Transaclist";
import Table from "./Table";
function AddTransaction(){
const[transaction,SetTransaction]=useState({
  date: "",
  description: "",
  category: "",
  amount: ""   
})
const [newTransac, setNewTransac] = useState([])
const newTransactionArray = newTransac.map((transaction, index) => (
  <tr key={index}> 
    <td>{transaction.date}</td>
    <td>{transaction.description}</td>
    <td>{transaction.category}</td>
    <td>{transaction.amount}</td>
  </tr>))
    
function handleInput(e){
SetTransaction(transaction=>({
  ...transaction,
    [e.target.name]:e.target.value
}))

console.log(e.target.value)}
function buttonHandler(){
 
//    newTransac = [...Transaclist]
//   newTransac.push({date: transaction.date,
//     description: transaction.description,
//     category: transaction.category,
//     amount: transaction.amount})
// SetTransaction(newTransac)
//  console.log(newTransac)
// 
const updatedTransaction = {
  date: transaction.date,
  description: transaction.description,
  category: transaction.category,
  amount: transaction.amount
}
setNewTransac(Transaclist => [...Transaclist,updatedTransaction])}
return(
<>
<div className="inputCont">
<form  className="form" onChange={handleInput}>
<span>Date:<input type="Date" placeholder="Date" onChange={handleInput} className="input" name="date"/></span>
<input type="Text" placeholder="Description"onChange={handleInput} className="input" name="description"/>
<input type="Text" placeholder="Category" onChange={handleInput} className="input" name = "category"/>
<input type="Number" placeholder="Amount" onChange={handleInput} className="input" name="amount"/>
</form>
</div>
<div className="button">
<button  onClick={buttonHandler} >Add Transaction</button>
<table>
          
          <tbody>
            {newTransactionArray}
          </tbody>
          </table>
</div>
        
</>
    )
}
export default AddTransaction
