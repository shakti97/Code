import React from "react";
import "../Css/PrintItem.css";
export const PrintItem=(props)=>{
    return(
        
           <div>
                    <span>{props.item.Name}</span>
                    <br/>
                    <span><img src={props.item.Img} alt="Img"/></span>
                    <span>{props.item.Price}</span>
                    <span>{props.item.Quantity}</span>
                    <span><button value={props.item.Sno} onClick={props.SnoRetriving}>Add to Cart</button></span>
                    <hr/>
            </div>      
    )
}