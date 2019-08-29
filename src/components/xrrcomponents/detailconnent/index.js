import React, { Component } from 'react'
import { DetailWrapper } from "./styled"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
import "../iconfont/iconfont.css"
import BScrollComponent from "@common/bscroll";

export default class DetailConnent extends Component {
    render() {
        return (
            <DetailWrapper>
                <BScrollComponent>
                    <div className="connect">
                        <div className="main">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">Slide 1</div>
                                    <div className="swiper-slide">Slide 2</div>
                                    <div className="swiper-slide">Slide 3</div>
                                    <div className="swiper-slide">Slide 4</div>
                                    <div className="swiper-slide">Slide 5</div>
                                    <div className="swiper-slide">Slide 6</div>
                                    <div className="swiper-slide">Slide 7</div>
                                    <div className="swiper-slide">Slide 8</div>
                                    <div className="swiper-slide">Slide 9</div>
                                    <div className="swiper-slide">Slide 10</div>
                                </div>

                                <div className="swiper-pagination"></div>
                            </div>

                            <div className="info-item">
                                <h3>优选佳沛新西兰阳光金奇异果(原箱)2181213102(33486)  </h3>
                                <h4>丰富vc营养 唤醒每日活力 </h4>
                                <div className="price">
                                    <small>￥</small>
                                    <em>219</em>
                                </div>
                                <div className="size">
                                    <span className="cur">
                                        <strong>30个/单个7.3元</strong>
                                        <small>  明日达  </small>
                                    </span>
                                    <em>最快明天08:00-18:00送达</em>
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
                                        <small className="orange">99%</small>好评
                            <i className="iconfont icon-youjiantou"></i>
                                    </span>评价(111)
                            </div>

                                <div className="comment-con-chief">

                                    <div className="comment-info">
                                        <img className="avatar" src="https://imgqn4.fruitday.com/up_images/default_userpic.png" alt="" />
                                        <span className="user">137********</span>
                                        <i className="iconfont icon-v_mini6"></i>
                                        <span className="date">2019-08-22</span>
                                    </div>
                                    <div className="comment-level">
                                        <span>口感 5</span>
                                        <span>颜值 5</span>
                                    </div>
                                    <div className="comment-msg">这款猕猴桃很不错，送给家人，都说好。</div>
                                </div>
                                <div className="text-center">
                                    <span className="comment-view">查看全部评论</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </BScrollComponent>
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
        });
    }
}
