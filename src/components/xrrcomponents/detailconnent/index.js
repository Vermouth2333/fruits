import React, { Component } from 'react'
import { DetailWrapper } from "./styled"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
import "../iconfont/iconfont.css"

import { detail_types, detail_talks } from "@api/xrrapi"
import { withRouter } from "react-router-dom";
import store from "@store"
import {sendFlagAsyncToDetail } from "@actions/xrractions/actionCreator.js"

const url = require("url");

class DetailConnent extends Component {
    constructor(props) {
        super(props);
        let path = this.props.location.search;
        let { product_id } = url.parse(path, true).query;
        this.state = {
            product_id: product_id,
            templatePhoto: [],
            productInfo: [],
            sendTimeMsg: "",
            productItem: [],
            num: [],
            good: "",
            total: [],
            eat: "",
            show: ''
        }
    }
    render() {
        let { templatePhoto, productInfo, sendTimeMsg,
            productItem, num, good, total, eat, show } = this.state
        return (
            <DetailWrapper>
                <div className="connect">
                    <div className="main">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {
                                    templatePhoto.map((item, index) => (
                                        <div className="swiper-slide" key={index}><img src={item.image} /></div>
                                    ))
                                }
                            </div>

                            <div className="swiper-pagination"></div>
                        </div>

                        <div className="info-item">
                            <h3>{productInfo.product_name}  </h3>
                            <h4>{productInfo.product_desc} </h4>
                            <div className="price">
                                <small>￥</small>
                                <em>{productInfo.price}</em>
                            </div>
                            <div className="size">
                                <span className="cur">
                                    <strong>{productItem.volume}</strong>
                                    <small>  明日达  </small>
                                </span>
                                <em>{sendTimeMsg}</em>
                            </div>
                        </div>



                        <div className="address-item">
                            <span className="title">送至</span>
                            <h4>
                                <i className="iconfont icon-dibiao"></i>
                                沙河镇 </h4>
                        </div>


                        <div className="tips-item">
                            <span>
                                <i className="iconfont icon-duihao"></i>
                                48小时退换货</span>
                            <span>
                                <i className="iconfont icon-duihao"></i>
                                全程冷链</span>
                            <span>
                                <i className="iconfont icon-duihao"></i>
                                果园标准</span>
                            <span><i className="iconfont icon-duihao"></i>
                                全球直采</span>
                        </div>

                        <div className="comment-item" id="first-comment">

                            <div className="comment-total">
                                <span className="pull-right">
                                    <small className="orange">{good}%</small>好评
                            <i className="iconfont icon-youjiantou"></i>
                                </span>评价({num.total})
                            </div>

                            <div className="comment-con-chief">

                                <div className="comment-info">
                                    <img className="avatar" src={total.userface} alt="" />
                                    <span className="user">{total.user_name}</span>
                                    <i className="iconfont icon-v_mini6"></i>
                                    <span className="date">{total.time}</span>
                                </div>
                                <div className="comment-level">
                                    <span>口感 {eat}</span>
                                    <span>颜值 {show}</span>
                                </div>
                                <div className="comment-msg">{total.content}</div>
                            </div>
                            <div className="text-center">
                                <span className="comment-view" onClick={this.handleSeeTogal.bind(this)}>查看全部评论</span>
                            </div>

                        </div>
                    </div>
                </div>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            initialSlide: 0,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true//修改swiper的父元素时，自动初始化swiper
        });

        this.handleGetText();

    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        this.setState = (state, callback) => {
            return;
        }
    }

    async handleGetText() {
        let data = await detail_types(3, this.state.product_id, "", 3, 1)
        let data1 = await detail_talks(this.state.product_id)
        this.setState({
            templatePhoto: data.data.templatePhoto,
            productInfo: data.data.productInfo,
            sendTimeMsg: data.data.sendTimeMsg,
            productItem: data.data.productItem[0],
            num: data1.data.num,
            good: data1.data.good,
            total: data1.data.data[0],
            eat: data1.data.eat,
            show: data1.data.show
        })
    }
    handleSeeTogal(){
        let obj={flag1:false,flag2:false,flag3:true}
        store.dispatch(sendFlagAsyncToDetail(obj))
}
}
export default withRouter(DetailConnent)