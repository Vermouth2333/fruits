import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div>
                    <div></div>
                </div>
                <h2>购物车</h2>
                <span>编辑</span>
            </HeaderWrapper>
        )
    }
}
