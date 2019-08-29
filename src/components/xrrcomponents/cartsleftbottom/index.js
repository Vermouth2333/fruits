import React, { Component } from 'react'
import { CartsWrapper } from "./styled"
import "../iconfont/iconfont.css"
import store from "@store"
export default class CartsLeft extends Component {
    constructor(){
        super()

        this.state = store.getState();
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {greennum} = this.state.TypeList
        // console.log(greennum)
        return (
            <CartsWrapper>
                <a className="cart-btn" href="#/carts" style={{ display: "inline" }}>
                    <i className="iconfont icon-gouwuche"></i>
                    <span id="cart-num">{greennum}</span>
                </a>
            </CartsWrapper>
        )
    }
    handleUpdate(){
        this.setState(store.getState());
    }
}
