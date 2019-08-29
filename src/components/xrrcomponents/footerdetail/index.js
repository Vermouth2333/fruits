import React, { Component } from 'react'
import { FooterWrapper } from "./styled"
import CartsLeftBottom from "../cartsleftbottom/index"
export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <footer className="main-nav" id="cart-nav">
                    <CartsLeftBottom/>
                    <a className="add-cart" href="">
                        <span id="deliver">明日达</span>
                        <em>加入购物车</em>
                    </a>
                </footer>
            </FooterWrapper>
        )
    }
}
