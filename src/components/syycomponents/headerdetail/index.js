/* eslint-disable default-case */
import React, { Component } from 'react'
import { DetailsWrapper } from "./styled"
import "../iconfont/iconfont.css"
import store from '../../../store'
import {Toggle_action} from '../../../action/action_syy/actionCreator'
import {withRouter} from 'react-router-dom'
 class HeaderDetail extends Component {
    constructor() {
        super();
        this.state = {
            flag: false,
            activestatus:1,
        }
    }
    render() {
        let { flag,activestatus } = this.state
        return (
            <DetailsWrapper>
                <nav>
                    <div className="back" onClick={this.handleBack.bind(this)}>
                        <p  className="iconfont icon-zuojiantou"></p>
                    </div>
                    <div className="tab">
                        <ul className="tab-menu">
                            <li className={activestatus===1?"active":""} onClick={this.handleToggle.bind(this, 1)}>商品</li>
                            <li className={activestatus===2?"active":""} onClick={this.handleToggle.bind(this, 2)}>详情</li>
                            <li className={activestatus===3?"active":""} onClick={this.handleToggle.bind(this, 3)}>评价</li>
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
               store.dispatch(Toggle_action(status)) 
                break;
            case 2:
                this.setState({
                    activestatus: status
                })
                store.dispatch(Toggle_action(status)) 
                break;
            case 3:
                this.setState({
                    activestatus: status
                })
                store.dispatch(Toggle_action(status)) 
                break;
                
        }
    }
    handleBack(){
        this.props.history.goBack()
        // console.log(this.props)
    }
}
export default withRouter(HeaderDetail)
