import React, { Component } from 'react'
import { HeaderListWrapper } from "./styled"
import "../iconfont/iconfont.css"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
import {list_kinds_types} from "@api/xrrapi"
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
const url = require("url");

class HeaderList extends Component {
    constructor(props){
        super(props);
        let path = this.props.location.search;
        let {class2_id,class3_id} = url.parse(path,true).query;
        this.state={
            class2_id:'',
            class3_id:"",
            brotherClass:[],
            productGroup:[]
        }
        this.state.class2_id = class2_id;
        this.state.class3_id = class3_id;
    }
    render() {
        let {brotherClass,productGroup} =this.state
        console.log(productGroup)
        return (
            <HeaderListWrapper>
                <header>
                    <nav>
                        <div className="back">
                            <a href="#/type" className="iconfont icon-zuojiantou"></a>
                        </div>
                        <div className="text">新鲜水果</div>
                        <a href="#/search" className="next">
                            <i className="iconfont icon-icon-"></i>
                        </a>
                    </nav>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                        {
                            brotherClass.map((item,index)=>(
                                <div key={index} className="swiper-slide">{item.name}</div>
                            ))
                        }
                        </div>
                    </div>
                    <div id="sort">
                        <ul className="sort sort0" >
                            <li className="active">综合</li>
                            <li className="">销量</li>
                            <li className="">价格
                            <em className="sort-price "></em>                            </li>
                        </ul>
                    </div>
                </header>
                <div className="content">
                    <div className="main">
                    {
                        productGroup.map((item,index)=>(
                            <Link className="item" key={index} to="">
                            <img className="good-img" src={item.photo} alt="" />
                            <dl className="">
                                <dt>{item.product_name}</dt>
                                <dd>{item.product_desc}</dd> <dd>{item.volume}</dd>
                                <div>
                                    <small>￥</small>
                                    <big>{item.price}</big>
                                    <small></small>
                                    <span style={{background: "#FF8000"}}>明日达  </span>
                                </div>
                            </dl>
                            <div className="count">
                                <span className="plus">
                                    <i className="iconfont icon-add_circle" onClick={this.handleSendTo.bind(this,item)}></i>
                                </span>
                            </div>
                        </Link>

                        ))
                    }
                    </div>
                </div>
            </HeaderListWrapper>
        )
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            slidesPerView: 4,
            centeredSlides: false,
            spaceBetween: 30,
            grabCursor: true,

            initialSlide :0,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
        });
        this.handleGetListdata();
    }
    async handleGetListdata(){
        let data = await list_kinds_types(3,30,this.state.class3_id,1,1);
        console.log(data);
        this.setState({
            brotherClass:data.data.brotherClass,
            productGroup:data.data.productGroup
        })
    }
    handleSendTo(item,e){
        e.stopPropagation();
        e.preventDefault();
        let obj={};
        obj.name=item.product_name;
        obj.id=item.id;
        obj.num=1;
        obj.flag=true;
        obj.pic=item.photo;
        obj.price=item.price;
        obj.weight=item.volume
        
    }

}
export default withRouter(HeaderList)