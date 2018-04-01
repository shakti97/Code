import React from "react";
export class Item{
    constructor(Sno,Name,Img,Price,Quantity){
        this.Sno=Sno;
        this.Name=Name;
        this.Img=Img;
        this.Price=Price;
        this.Quantity=Quantity;
    }
    
}
export class CartItem{
    constructor(Sno,Name,Img,Price,Quantity){
        this.Sno=Sno;
        this.Name=Name;
        this.Img=Img;
        this.Price=Price;
        this.Quantity=0;
        this.Billing=0;
    }
}