import React, { Component } from 'react'
import {Wrapper} from "./styled"

export default class Information extends Component {
    render() {
        return (
            <Wrapper>
                <img src="#" alt=""/>
                <div>
                    <h2>123456789</h2>
                    <span>签到送好礼</span>
                </div>
                <div>
                    <i></i>
                    <p>会员码</p>
                </div>
            </Wrapper>
        )
    }
}
