import React, { Component } from 'react'
import { DetailsWrapper } from "./styled"
import "../iconfont/iconfont.css"
import { withRouter } from "react-router-dom";
import store from "@store"
import { sendFlagAsyncToDetail } from "@actions/xrractions/actionCreator.js"

class HeaderDetail extends Component {
    constructor() {
        super();
        this.state = {
            flag: false,
            activestatus: 1,
        }
    }
    render() {
        let { flag, activestatus } = this.state
        return (
            <DetailsWrapper>
                <nav>
                    <div className="back">
                        <p className="iconfont icon-zuojiantou" onClick={this.handleback.bind(this)}></p>
                    </div>
                    <div className="tab">
                        <ul className="tab-menu">
                            <li className={activestatus == 1 ? "active" : ""} onClick={this.handleToggle.bind(this, 1)}>商品</li>
                            <li className={activestatus == 2 ? "active" : ""} onClick={this.handleToggle.bind(this, 2)}>详情</li>
                            <li className={activestatus == 3 ? "active" : ""} onClick={this.handleToggle.bind(this, 3)}>评价</li>
                        </ul>
                    </div>
                    <div className="more">
                        <i className="iconfont icon-shenglvehao" onClick={this.handleShow.bind(this)}></i>
                        <div className="more-bubble" style={{ display: flag ? "block" : "none" }} >
                            <a href="#/home">
                                <i className="iconfont icon-index"></i>首页</a>
                            <a href="#/search" className="search">
                                <i className="iconfont icon-icon-"></i>
                                搜索</a>
                            <a href="#/type">
                                <i className="iconfont icon-leimupinleifenleileibie"></i>
                                分类</a>
                        </div>
                        <div className="more-bg"></div>
                    </div>
                </nav>
            </DetailsWrapper>
        )
    }
    handleShow() {
        let flag = !this.state.flag
        this.setState({
            flag: flag
        })
    }
    handleToggle(status) {
        switch (status) {
            case 1:
                this.setState({
                    activestatus: status
                })
                let obj = { flag1: true, flag2: false, flag3: false }
                store.dispatch(sendFlagAsyncToDetail(obj))
                break;
            case 2:
                this.setState({
                    activestatus: status
                })
                let obj1 = { flag1: false, flag2: true, flag3: false }
                store.dispatch(sendFlagAsyncToDetail(obj1))

                break;
            case 3:
                this.setState({
                    activestatus: status
                })
                let obj2 = { flag1: false, flag2: false, flag3: true }
                store.dispatch(sendFlagAsyncToDetail(obj2))

                break;

        }
    }
    handleback() {
        this.props.history.goBack();
        let obj = { flag1: true, flag2: false, flag3: false }
        store.dispatch(sendFlagAsyncToDetail(obj))
    }
}
export default withRouter(HeaderDetail)