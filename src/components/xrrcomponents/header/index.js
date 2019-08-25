import React, { Component } from 'react'
import { HeaderWrapper } from "./styled"
import "../iconfont/iconfont.css"
export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div className="category-search">
                    <div>
                        <i className="iconfont icon-icon-">
                        </i>奇异果
                    </div>
                </div>
            </HeaderWrapper>
        )
    }
}
