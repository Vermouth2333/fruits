import React, { Component } from 'react'
import {ShopCenterWrapper} from "./styled"
import List from '@components/carts/list'
import BScrollComponent from "@common/bscroll";
import "./icon/iconfont.css"


export default class Shop extends Component {
    render() {
        return (
                <ShopCenterWrapper>
                    <BScrollComponent>
                        <div className="bsc">
                            <div className="address">
                                <div className="specific">
                                    <i className="iconfont">&#xe61f;</i>
                                    <span>添加地址</span>
                                    <div></div>
                                </div>
                            </div>
                            <div className="detailedList">
                                <span>商品清单</span>
                            </div>
                            <List/>
                        </div>
                    </BScrollComponent>
                </ShopCenterWrapper>

        )
    }
}
