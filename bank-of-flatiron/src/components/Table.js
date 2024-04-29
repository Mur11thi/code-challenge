import React , {useState} from "react";
import '../Table.css'
import Transaclist from "./Transaclist";
function Table(props){
 return(
    <>
    <table>
    <thead>
    <tr className="row"> 
     <th className="date">Date</th>
    <th className="description">Description</th>
    <th className="category">Category</th>    
    <th className="amount">Amount</th>
    </tr>
    </thead>
    <tbody>
    {props.Transaclist.map((transaction,index)=>(  
    <tr key={index}> 
    <td>{transaction.date}</td>
    <td>{transaction.description}</td>
     <td>{transaction.category}</td>
     <td>{transaction.amount}</td>
     </tr>))}
    </tbody>
    </table>
    </>
 )   
}
export default Table