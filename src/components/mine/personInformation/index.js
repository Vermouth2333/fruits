import React, { Component, Fragment } from 'react'
import { Wrapper } from "./styled"
import { TwoWrapper, Five, Order } from "./styled"
import { person_information } from "@api/mine"
import "./icon/iconfont.css"

export default class Information extends Component {
    state = {
        personInformation: {},
    }
    render() {
        let personInfor=this.state.personInformation;
        return (
            <Fragment>
                <Wrapper>
                    <img src={personInfor.rank_info?personInfor.rank_info.icon:''} alt="" />
                    <div>
                        <h2>{personInfor.username}</h2>
                        <span>签到送好礼</span>
                    </div>
                    <div>
                        <i></i>
                        <p>会员码</p>
                    </div>
                </Wrapper>
                <TwoWrapper>
                    <ul>
                        <li>
                            <p>积分</p>
                            <p>{personInfor.enterprise_active}</p>
                        </li>
                        <li>
                            <p>余额</p>
                            <p>{personInfor.fresh_money}</p>
                        </li>
                        <li>
                            <p>优惠卷</p>
                            <p>{personInfor.coupon_num}</p>
                        </li>
                        <li>
                            <p>礼品</p>
                            <p>{personInfor.gift_num}</p>
                        </li>
                    </ul>
                </TwoWrapper>
                <Order>
                    <div>
                        <i className="iconfont">&#xe60d;</i>
                        <span>我的订单</span>
                    </div>
                    <div>
                        <span>全部订单</span>
                        <div className="right"></div>
                    </div>
                </Order>
                <Five>
                    <ul>
                        <li>
                            <i className="iconfont">&#xe60d;</i>
                            <span>待付款</span>
                        </li>
                        <li>
                            <i className="iconfont">&#xe615;</i>
                            <span>待发货</span>
                        </li>
                        <li>
                            <i className="iconfont">&#xe640;</i>
                            <span>待收货</span>
                        </li>
                        <li>
                            <i className="iconfont">&#xe60b;</i>
                            <span>待评价</span>
                        </li>
                        <li>
                            <i className="iconfont">&#xe641;</i>
                            <span>退换货</span>
                        </li>
                    </ul>
                </Five>
                <Order>
                    <div>
                        <i className="iconfont">&#xe636;</i>
                        <span>会员中心</span>
                    </div>
                    <div>
                        <span>享受等级特权</span>
                        <div className="right"></div>
                    </div>
                </Order>
                <Order>
                    <div>
                        <i className="iconfont">&#xe724;</i>
                        <span>企业购</span>
                    </div>
                    <div>
                        <div className="right"></div>
                    </div>
                </Order>
                <Order>
                    <div>
                        <i className="iconfont">&#xe61b;</i>
                        <span>在线客服</span>
                    </div>
                    <div>
                        <div className="right"></div>
                    </div>
                </Order>
            </Fragment>
        )
    }
    componentDidMount() {
        if(sessionStorage.getItem("personInformation")){
            this.setState({
                personInformation:JSON.parse(sessionStorage.getItem("personInformation")).data
            })
        }else{
            this.handleWeekGetData();
        }
    }
    async handleWeekGetData(){
        let data = await person_information();
        this.setState({
            personInformation:JSON.parse(JSON.stringify(data.data))
        })
        sessionStorage.setItem("personInformation",JSON.stringify(data));
    }
}
