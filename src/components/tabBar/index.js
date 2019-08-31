import React, { Component } from 'react'
import {TabBarWrapper} from "./styled"
import {tabBarRoute} from "@router";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux"
import { mapStateToProps, mapDispatchToProps } from './connect';

class TabBar extends Component {
    render() {
        let {cartsGoods} =this.props;
        let num=this.props.totalNum(cartsGoods);
        return (
            <TabBarWrapper>
                    <ul>
                        {
                            tabBarRoute.map((item,index)=>(
                                <li key={index}>
                                    <NavLink to={item.path}>
                                        <i className="iconfont">{item.icon}</i>
                                        <span>{item.name}</span>
                                        <b style={{display:item.meta.shoNum===true&&num!==0?"block":"none"}}>{num}</b>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
            </TabBarWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabBar);