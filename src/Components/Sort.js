import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Css/Sort.css"
export const Sort = (props)=>{
    return(
        <div class="form-group">
                    <select class="form-control sort" id="selectList">
                      <option id="SelectName">Name</option>
                      <option id="SelectPrice">Price</option>
                    </select>
                    <button className="btn btn-success" onClick={props.sort}>Sort</button>
                  </div>
    )
}