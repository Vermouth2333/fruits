import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"
import {NavLink} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper >
               <div className="header_left">
                    <img src="https://huodongjd1.fruitday.com/sale/appxx/send_to_2.png"/> 
                    <div className="text">沙河镇<i className="iconfont icon-arrowdown"></i></div>
                </div>
               <NavLink to="/search">
                    <div className="header_right"><i className="iconfont icon-fangdajing"></i></div>
                </NavLink>
               
            </HeaderWrapper>
        )
    }
}
