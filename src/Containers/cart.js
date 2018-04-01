import React, { Component } from 'react';
import {itemList, PrintList} from "../Components/PrintList";
export class Cart extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Heading title="Shopify" />
                <PrintList items={this.cartList}/>
            </div>
        )
    }
}