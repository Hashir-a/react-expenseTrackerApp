import React, {useContext} from 'react'
import {GlobalContext, Globalcontext} from '../context/GlobalState';

export default function Transaction({transaction}) {
    const {deleteTransaction} =useContext(Globalcontext);


    const sign = transaction.amount <0? '-': '+';
        return (
               <li className= {transaction.amount <0 ?"minus":"plus"}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button></li>
    )
}