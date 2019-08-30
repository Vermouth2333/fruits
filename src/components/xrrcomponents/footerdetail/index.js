import React, { Component } from 'react'
import { FooterWrapper } from "./styled"
import CartsLeftBottom from "../cartsleftbottom/index"
import { sendAsyncDataToCarts } from "@actions/xrractions/actionCreator.js"
import store from "@store"

export default class Footer extends Component {
    constructor(){
        super()

        this.state = {
            footerlist:[],
            ...store.getState()
        }
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {footerlist}=this.state.TypeList;
        this.state.footerlist=footerlist
        console.log(this.state.footerlist)

        return (
            <FooterWrapper>
                <footer className="main-nav" id="cart-nav">
                    <CartsLeftBottom/>
                    <a className="add-cart" href="">
                        <span id="deliver">明日达</span>
                        <em onClick={this.handlesendcarts.bind(this)}>加入购物车</em>
                    </a>
                </footer>
            </FooterWrapper>
        )
    }
    handlesendcarts(e){
        e.stopPropagation();
        e.preventDefault();

        console.log(this.state.footerlist)
        let obj = {};
        obj.name = this.state.footerlist.product_name;
        obj.id = this.state.footerlist.product_id;
        obj.num = 1;
        obj.flag = true;
        obj.pic = "https://imgqn9.fruitday.com/images/product_pic/12258/1/1-100x100-12258-2D9W9947.jpg";
        obj.price = this.state.footerlist.price;
        obj.weight = this.state.footerlist.product_desc
        store.dispatch(sendAsyncDataToCarts(obj))
    }
    handleUpdate(){
        this.setState(store.getState());
    }

}
