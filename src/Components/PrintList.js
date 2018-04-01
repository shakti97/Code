import React from "react";
import {PrintItem} from "../Components/PrintItem"
export const PrintList = (props)=>{
    return (
        <div>
            <span>Name</span>
            <span>Price</span>
            <span>Quantity</span>
            {props.items.map(itemObject=><PrintItem item={itemObject} SnoRetriving={props.SnoRet}/>)}
        </div>
    )
}