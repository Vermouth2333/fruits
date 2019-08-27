import React, { Component } from 'react'
import { HeaderListWrapper } from "./styled"
import "../iconfont/iconfont.css"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
import { list_kinds_types } from "@api/xrrapi"
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { sendAsyncDataToCarts } from "@actions/xrractions/actionCreator.js"
import store from "@store"
const url = require("url");

class HeaderList extends Component {
    constructor(props) {
        super(props);
        let path = this.props.location.search;
        let { class2_id, class3_id } = url.parse(path, true).query;
        this.state = {
            class2_id: '',
            class3_id: "",
            brotherClass: [],
            productGroup: [],
            fatherClass: [],
            activeindex: "0",
            status: 1,
            num: 0,
            navid:class3_id
        }
        this.state.class2_id = class2_id;
        this.state.class3_id = class3_id;
    }
    render() {
        let { brotherClass, productGroup, fatherClass, activeindex, status } = this.state;
        return (
            <HeaderListWrapper>
                <header>
                    <nav>
                        <div className="back">
                            <a href="#/type" className="iconfont icon-zuojiantou"></a>
                        </div>
                        <div className="text">{fatherClass.name}</div>
                        <a href="#/search" className="next">
                            <i className="iconfont icon-icon-"></i>
                        </a>
                    </nav>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                brotherClass.map((item, index) => (
                                    <div key={index}
                                        className={activeindex == index ? "swiper-slide active" : "swiper-slide"}
                                        onClick={this.handleNavList.bind(this, index, item.id)}
                                    >{item.name}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div id="sort">
                        <ul className="sort" >
                            <li className={status == "1" ? "active" : ""} onClick={this.handleSort.bind(this, 1)}>综合</li>
                            <li className={status == "2" ? "active" : ""} onClick={this.handleSort.bind(this, 2)}>销量</li>
                            <li className={status == "3" ? "active" : ""} onClick={this.handleSort.bind(this, 3)}>价格
                            <em className="sort-price "></em>                            </li>
                        </ul>
                    </div>
                </header>
                <div className="content">
                    <div className="main">
                        {
                            productGroup.map((item, index) => (
                                <Link className="item" key={index} to="">
                                    <img className="good-img" src={item.photo} alt="" />
                                    <dl className="">
                                        <dt>{item.product_name}</dt>
                                        <dd>{item.product_desc}</dd> <dd>{item.volume}</dd>
                                        <div>
                                            <small>￥</small>
                                            <big>{item.price}</big>
                                            <small></small>
                                            <span style={{ background: "#FF8000" }}>明日达  </span>
                                        </div>
                                    </dl>
                                    <div className="count">
                                        <span className="plus">
                                            <i className="iconfont icon-add_circle" onClick={this.handleSendTo.bind(this, item)}></i>
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

            initialSlide: 0,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true//修改swiper的父元素时，自动初始化swiper
        });
        this.handleGetListdata();
        this.handleNavIdData();
    }
    async handleGetListdata(){
        let data = await list_kinds_types(3,30,this.state.class3_id,1,1);
        this.setState({
            brotherClass: data.data.brotherClass,
            productGroup: data.data.productGroup,
            fatherClass: data.data.fatherClass
        })
    }
    handleSendTo(item, e) {
        e.stopPropagation();
        e.preventDefault();
        let obj = {};
        obj.name = item.product_name;
        obj.id = item.id;
        obj.num = 1;
        obj.flag = true;
        obj.pic = item.photo;
        obj.price = item.price;
        obj.weight = item.volume
        store.dispatch(sendAsyncDataToCarts(obj))
    }
    async handleNavList(index, id) {
        this.setState({
            activeindex: index
        })
        let data = await list_kinds_types(3, 30, id, 1, 1);
        this.setState({
            productGroup: data.data.productGroup,
            fatherClass: data.data.fatherClass,
            navid:id
        })
    }

    handleNavIdData() {
        if (this.state.class3_id == this.state.navid) {
            this.state.style="transform: translate3d(-585px, 0px, 0px)"
        }
    }
    async handleSort(type) {
        let num1 = this.state.num++;
        console.log(num1, 222);

        switch (type) {
            case 1:
                this.setState({
                    status: 1
                })
                let data = await list_kinds_types(3, 30, this.state.navid, 1, 1);
                this.setState({
                    productGroup: data.data.productGroup,
                    fatherClass: data.data.fatherClass
                })
                break;
            case 2:
                this.setState({
                    status: 2
                })
                let data1 = await list_kinds_types(3, 30, this.state.navid, 2, 1);
                this.setState({
                    productGroup: data1.data.productGroup,
                    fatherClass: data1.data.fatherClass
                })
                break;
            case 3:
                this.setState({
                    status: 3
                })
                if (num1 % 2 == 0) {
                    console.log(num1, 111)
                    let data2 = await list_kinds_types(3, 30, this.state.navid, 3, 1);
                    this.setState({
                        productGroup: data2.data.productGroup,
                        fatherClass: data2.data.fatherClass
                    })

                } else {
                    let data3 = await list_kinds_types(3, 30, this.state.navid, 4, 1);
                    this.setState({
                        productGroup: data3.data.productGroup,
                        fatherClass: data3.data.fatherClass
                    })
                }
                break;
        }
    }
}
export default withRouter(HeaderList)