import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"
import {NavLink} from "react-router-dom";
import '../xrrcomponents/iconfont/iconfont.css'
import {CityAsyncAction} from "../../action/action_syy/actionCreator"
import {store} from'../../store'
export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper >
               <div className="header_left">
                    <img src="https://huodongjd1.fruitday.com/sale/appxx/send_to_2.png" alt=''/> 
                    <NavLink to='/xrrcity' onClick={this.handleToCity.bind(this)}>  <div className="text">沙河镇<i className="iconfont icon-arrowdown"></i></div></NavLink>
                </div>
               <NavLink to="/search">
                    <div className="header_right"><i className="iconfont icon-icon-"></i></div>
                </NavLink>
            </HeaderWrapper>
        )
    }
    handleToCity(){
        store.dispatch(CityAsyncAction())
    }
}
