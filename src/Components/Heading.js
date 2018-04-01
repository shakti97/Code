import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Css/Header.css"
export const Heading = (props)=>{
    return (
        <div >
            <img src="https://cdn.shopify.com/assets/images/logos/shopify-bag.png" alt="logo" />
            <h1>{props.title}</h1>
        </div>
    )
}