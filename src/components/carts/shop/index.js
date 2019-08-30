import React, { Component } from 'react'
import {ShopCenterWrapper} from "./styled"
import List from '@components/carts/list'
import BScrollComponent from "@common/bscroll";
import "./icon/iconfont.css"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';

class Shop extends Component {
    render() {
        let {addressListLength} = this.props;
        console.log(addressListLength);
        return (
                <ShopCenterWrapper>
                    <BScrollComponent>
                        <div className="bsc">
                            <div className="address" onClick={this.props.toAddressMaskShow.bind(this)} style={{height:addressListLength===0?"1.6rem":"2.6rem"}}>
                                <div className="specific" style={{height:addressListLength===0?"1.6rem":"2.6rem"}}>
                                    <i className="iconfont">&#xe61f;</i>
                                    <span style={{display:addressListLength===0?"inline":"none"}}>添加地址</span>
                                        <main style={{display:addressListLength===0?"none":"block"}}>
                                            <p>
                                                <span>112</span>
                                                <span>17853535691</span>
                                                <span>其他</span>
                                            </p>
                                            <p>  北京市昌平区沙河镇沙河二毛生活小区北京科技职业学院 北京市昌平区沙河镇沙河二毛生活小区北京科技职业学院   </p>
                                        </main>
                                    <div></div>
                                </div>
                            </div>
                            <div className="detailedList">
                                <span>商品清单</span>
                            </div>
                            <List/>
                        </div>
                        
                    </BScrollComponent>
                </ShopCenterWrapper>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
