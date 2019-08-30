import React, { Component } from 'react'
import { DetailWrapper } from "./styled"
// import 'swiper/dist/css/swiper.css'
import Banner from '../../banner_detail'
import "../iconfont/iconfont.css"
import BScrollComponent from "@common/bscroll";
import {comment_api}from '../../../api/syyapi/home'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from './connect'
const url =require ('url')
 class DetailConnent extends Component {
    constructor(props){
        super(props)      
        let path=this.props.location.search;
        let id=url.parse(path,true).query.product_id      
        this.state={
            id:id,
            data:''
        }        
    }
    render() {
        let {data,num}=this.props     
        return (
            <DetailWrapper style={{display:num===1?'block':'none'}}>
                <BScrollComponent>
                    <div className="connect">
                        <div className="main">
                            <div className='banner'>
                                <Banner/>
                            </div>
                            <div className="info-item">
                                <h3>{data?data.productInfo.product_name:''} </h3>
                                <h4>{data?data.productInfo.product_desc:''}</h4>
                                <div className="price">
                                    <small>￥</small>
                                    <em>{data?data.productInfo.price:""}</em>
                                </div>
                                <div className="size">
                                    <span className="cur">
                                        <strong>{data?data.productItem[0].volume:""}</strong>
                                        <small>  明日达  </small>
                                    </span>
                                    <em>{data?data.productItem.sendTimeMsg:""}</em>
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
                                    </span>评论{this.state.data.num?this.state.data.num.total:''}
                            </div>
                                <div className="comment-con-chief">
                                    <div className="comment-info">
                                        <img className="avatar" src={this.state.data?this.state.data.data[0].userface:""} alt="" />
                                        <span className="user">{this.state.data?this.state.data.data[0].user_name:""}</span>
                                        <i className="iconfont icon-v_mini6"></i>
                                        <span className="date">{this.state.data?this.state.data.data[0].time:""}</span>
                                    </div>
                                    <div className="comment-level">
                                        <span>口感 5</span>
                                        <span>颜值 5</span>
                                    </div>
                                    <div className="comment-msg">{this.state.data?this.state.data.data[0].content:""}

                                    </div>
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
  componentDidMount(){
    this.handleGetData()
  }
    async handleGetData(){
       
        let data= await comment_api(this.state.id); 
      
       this.setState({
           data:data.data
       })
       }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DetailConnent))