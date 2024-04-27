import React , {useState} from "react";
import '../Table.css'
function Table(){
 return(
    <>
    <table>
     <tbody>   
    <tr className="row">
     <th className="date">Date</th>
    <th className="description">Description</th>
    <th className="category">Category</th>    
    <th className="amount">Amount</th>
    </tr>
    <tr> 
    <td>2024</td>
         </tr>
    <tr>
        <td>Music </td></tr>
    <tr> <td>News</td></tr>
    <tr> <td>schyeah!</td></tr>
    </tbody>
    </table>
    </>
 )   
}
export default Table