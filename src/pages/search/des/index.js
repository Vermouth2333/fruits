import React, { Component } from 'react'
import Header from '../header_search'
import { ContentSWrapper } from './styled'
import {NavLink} from 'react-router-dom'
export default class componentName extends Component {
    render() {
        return (
            <div>
                <Header />
                <ContentSWrapper>
                    <div className="content">
                        <div className="main">
                            <NavLink to='/detail' className='item'>                           
                                <img className="good-img" src='https://imgqn8.fruitday.com/images/product_pic/4001/1/1-370x370-4001-XTUR7FCK.jpg' alt="" />
                                <dl >
                                    <dt>韩式花枝丸(九生堂)（请于2019年10月22日前食用）</dt>
                                    <dd>大颗目鱼粒 轻松自制关东煮</dd> <dd>160g（临期）</dd>
                                    <div>
                                        <small>￥</small>
                                        <big>24.</big>
                                        <small>50</small>
                                        <span style={{ background: "#FF8000" }}>明日达  </span>
                                    </div>
                                </dl>
                            </NavLink>
                        </div>
                    </div>

                </ContentSWrapper>
            </div>
        )
    }
}
//   <div className="count">
// <span className="plus">
// <i className="iconfont icon-add_circle" ></i>
// </span>
// </div>
