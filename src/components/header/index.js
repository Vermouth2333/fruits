import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"
import logo from "@static/logo.png"
export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper >
                <div className="header_l">分类</div>
                <div className="header_c">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="header_r">
                    <div>登陆</div>
                    <div>
                        <i className="iconfont">&#xe62a;</i>
                    </div>
                </div>
            </HeaderWrapper>
        )
    }
}
