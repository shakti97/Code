import React, { Component } from "react";
import {Search} from "../Components/Search";
import {Heading} from "../Components/Heading";
import {ItemOperation} from "../models/itemOperation";
import {PrintList} from "../Components/PrintList";
import {Sort} from "../Components/Sort";
import { PrintCartList } from "../Components/PrintCartList";
export class Main extends Component{
    constructor(props){
        super(props);
        this.Search="";
        this.cartValue=0;
        this.cartShow=false;
        this.cartList=[];
        this.itemList = ItemOperation.loadItem();
        this.state={Search : this.Search,itemList : this.itemList, cartList : this.cartList,cartValue : this.cartValue, cart :this.cartShow};
        console.log("main",this.itemList);
        
    }
    takeInput(event){
        this.Search=event.target.value;
        this.setState({Search : this.Search,itemList : this.itemList,cartList : this.cartList, cartValue : this.cartValue, cart :this.cartShow});

    }
    SnoRetrival(event){
        this.Id=event.target.value;
        console.log("id",this.Id);
        this.cartList=ItemOperation.AddToCart(this.Id);
        console.log("this.cartList",this.cartList);
        this.cartValue++;
        this.setState({Search : this.Search,itemList : this.itemList,cartList : this.cartList, cartValue : this.cartValue, cart :this.cartShow});
    }
    SnoChahiye(event){
        this.Id=event.target.value;
        this.cartValue--;
        this.cartList=ItemOperation.RemoveFromCart(this.Id);
        this.setState({Search : this.Search,itemList : this.itemList,cartList : this.cartList, cartValue : this.cartValue, cart :this.cartShow});
    }
    SearchRetrival(event){
        console.log(this.Search)
        this.itemList=ItemOperation.SearchProduct(this.Search);
        this.setState({Search : this.Search,itemList : this.itemList,cartList : this.cartList, cartValue : this.cartValue, cart :this.cartShow});
    }
    ShowCart(event){
        console.log("I get Invoked");
        this.cartShow=!this.cartShow;
        console.log(this.cartShow);
        this.setState({Search : this.Search,itemList : this.itemList, cartValue : this.cartValue, cart :this.cartShow});
    }
    SortList(event){
        console.log("hey I m invoked");
        var e = document.getElementById("selectList");
        var strUser = e.options[e.selectedIndex].text;
        console.log("StrUser",strUser);
        this.itemList=ItemOperation.SortItem(strUser);
        this.setState({Search : this.Search,itemList : this.itemList, cartValue : this.cartValue, cart :this.cartShow});

    }
    render(){
        return (
            <div>
                <Heading title="Shopify"/>
                <Search value={this.takeInput.bind(this)} InCart={this.cartValue} search={this.SearchRetrival.bind(this)} cart={this.ShowCart.bind(this)}/>
                <Sort sort={this.SortList.bind(this)} />
                {this.cartShow ? <PrintCartList items={this.cartList} SnoRet={this.SnoChahiye.bind(this)}/> : <PrintList items={this.itemList} SnoRet={this.SnoRetrival.bind(this)}/>}   
            </div>
        )
    }
    
}