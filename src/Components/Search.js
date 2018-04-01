import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Css/Search.css"
export const Search = (props)=>{
    return (
        <div className="form-group" >
            <input type="text" className="form-control" placeholder="Search item here" onChange={props.value} />
            <button type="button" className="btn btn-success" onClick={props.search}>Search</button>
            <button type="button" className="btn btn-primary cart" onClick={props.cart}>Cart {props.InCart}</button>
        </div>
    )
}