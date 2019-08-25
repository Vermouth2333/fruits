import React, { Component } from 'react'
import {NoShopCenterWrapper} from './styled'
import {Page} from "@common/commonStyled"
import {Link} from "react-router-dom";

export default class NoShop extends Component {
    render() {
        return (
            <Page>
                <NoShopCenterWrapper>
                    <img src="https://wap.fruitday.com/content/images/main/cart_empty-172251d77c.png" alt="显示错误"/>
                    <h3>还没找到心仪的商品吗?</h3>
                    <Link to="/home">去逛逛吧</Link>
                </NoShopCenterWrapper>
            </Page>
        )
    }
}
