import React, { Component } from 'react';
import {PrintCartItem} from "../Components/PrintCartItem";
export const PrintCartList = (props)=> {
    return (
        <div>
            <h2>Your Cart Item is Here</h2>
            <span>Name</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Billing</span>
            {props.items.map(itemObject=><PrintCartItem item={itemObject} SnoRetriving={props.SnoRet}/>)}
        </div>
    )
}