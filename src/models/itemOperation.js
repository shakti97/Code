import React from "react";
import {Item, CartItem} from "./Item";
var index=0;
export const ItemOperation = {
    objson : [{Name : "Iphone 8",Img : "https://www.t-mobile.com/images/png/products/phones/Apple-iPhone-8-Space-Gray/250x270_1.png", Price : 80000, Quantity : 20},{Name : "G5s plus",Img : "https://cdn2.gsmarena.com/vv/bigpic/motorola-moto-g5s-plus.jpg", Price : 20000, Quantity : 35},{Name : "Iphone X",Img : "https://images-na.ssl-images-amazon.com/images/I/61f26tMduUL._SY355_.jpg", Price : 100000, Quantity : 10},{Name : "Mi Max 2",Img : "https://i.ebayimg.com/images/g/mjYAAOSwbl5ZgXU4/s-l300.jpg", Price : 50000, Quantity : 15},{Name : "One +5t",Img : "https://cdn2.gsmarena.com/vv/bigpic/oneplus-5.jpg", Price : 60000, Quantity : 25}],
    itemList:[], 
    cartList : [], 
    newList : [],        
    loadItem(){
        var Name;
        var Img;
        var Price;
        var Quantity;
        var Sno=0;
        this.objson.forEach((object)=>{
            Sno++;
            this.itemList.push(new Item(Sno,object.Name,object.Img,object.Price,object.Quantity)); 
        }); 
        console.log("operation",this.itemList);
        return this.itemList;
    },
    AddToCart(Id){
        // console.log("Sno",Sno)
        // console.log("addTOCart",this.itemList);
        // console.log(this.itemList[Sno-1].Quantity--);
        var i=1;
        this.itemList[Id-1].Quantity--;
        if(this.cartList.length==0){
            var Quantity;
            var Billing;
            var cart=new CartItem(this.itemList[Id-1].Sno,this.itemList[Id-1].Name,this.itemList[Id-1].Img,this.itemList[Id-1].Price,Quantity,Billing);
            cart.Quantity++;
            cart.Billing=cart.Quantity*cart.Price;
            console.log(cart.Billing);
            this.cartList.push(cart);
            index++;
            console.log(this.cartList);
            return this.cartList;
        }
        else{
            this.cartList.forEach((object)=>{
                console.log("object.Sno",object.Sno);
                console.log("id",Id);
                if(object.Sno==Id){
                    object.Quantity+=1;
                    object.Billing=object.Quantity*object.Price;
                    console.log(object.Billing);
                    console.log("Same Item",this.cartList);
                    return this.cartList;

                }
                else if(i==(this.cartList.length)){
                    console.log("i",i);
                    console.log("this.cartList.length",this.cartList.length);
                    var cart=new CartItem(this.itemList[Id-1].Sno,this.itemList[Id-1].Name,this.itemList[Id-1].Img,this.itemList[Id-1].Price,Quantity,Billing);
                    cart.Quantity++;
                    cart.Billing=cart.Quantity*cart.Price;
                    console.log(cart.Billing);
                    this.cartList.push(cart);
                    console.log("Diff Item",this.cartList);
                    index++;
                    return this.cartList;
                    
                }
                else{

                }
                i++;
                
            })
            return this.cartList;
        }
    },
    SearchProduct(value){
        this.itemList =[];
        this.objson.forEach((object)=>{
            for(let key in object){
                if(object[key]==value){
                    this.itemList.push(object);
                }
            }
            
        })
        return this.itemList;
    },
    SortItem(strUser){
        if(strUser=="Name"){
            var newList=this.itemList.sort((a,b)=>(a[strUser]).localeCompare(b[strUser]));
        }
        if(strUser=="Price"){
            var newList=this.itemList.sort((a,b)=>(a[strUser])-(b[strUser]));
        }
        return newList;
    },
    RemoveFromCart(Id){
        this.cartList.forEach(object=>{
            if(object.Sno==Id){
                object.Quantity--;
                object.Billing=object.Quantity*object.Price;
                if(object.Quantity<=0){
                    object.Quantity=0;
                    object.Billing=object.Quantity*object.Price;
                    var index=this.cartList.indexOf(object);
                    console.log("index",index);
                    this.cartList.splice(index,1);
                    return this.cartList;
                }
                
            }
            else{
               
            }
        })
        this.itemList.forEach(object=>{
            if(object.Sno==Id){
                object.Quantity++;
            }
            else{
                
            }
        })
        return this.cartList;
    }
}