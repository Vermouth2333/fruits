import React, { Component } from 'react'
import { CartsWrapper } from "./styled"
import "../iconfont/iconfont.css"
export default class CartsLeft extends Component {  
    render() {       
        // console.log(greennum)
        return (
            <CartsWrapper>
                <a className="cart-btn" href="#/carts" style={{ display: "inline" }}>
                    <i className="iconfont icon-gouwuche"></i>
                    <span id="cart-num">0</span>
                </a>
            </CartsWrapper>
        )
    }
    handleUpdate(){
      
    }
}
