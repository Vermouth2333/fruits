import React, { Component } from 'react'
import {PriceBottomWrapper} from "./styled"
import "../shop/icon/iconfont.css"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
import DeleteButton from "@components/carts/deleteButton"
import DeleteAllButton from "@components/carts/deleteAllButton"
class PriceBottom extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render() {
        let {cartsGoods,allFlag,HeadFlag} =this.props;
        let price=this.props.totalPrice(cartsGoods)/100;
        let num=this.props.totalNum(cartsGoods);
        return (
            <PriceBottomWrapper>
                <div className="price_bottom_left">
                    <div style={{borderRadius: "50%",width:".28rem",height:".28rem",border:"1px solid #000",position:"relative"}} onClick={this.props.changeAllFlag.bind(this)}>
                        <i className="iconfont" style={{position:"absolute",top:"-.04rem",left:"-.015rem",fontSize:allFlag?".32rem":"0rem",color:"#ff8000"}}>&#xe69e;</i>
                    </div>
                    <span>全选</span>
                </div>
                <div className="price_bottom_center" style={{display:HeadFlag?"flex":"none"}}>
                    <span>合计：</span>
                    <span>￥</span>
                    <span>{price}</span>
                </div>
                <div style={{display:HeadFlag?"none":"flex",flex:1}}></div>
                <div className="price_bottom_center1" style={{display:HeadFlag?"none":"flex"}}>
                    <DeleteAllButton/>
                </div>
                <div className="price_bottom_right" style={{background:num===0?"#BFBFBF":"#ff8000",display:HeadFlag?"flex":"none"}}>
                    <span>结算({num})</span>
                </div>
                <div className="price_bottom_right1" style={{background:"#ff4848",display:HeadFlag?"none":"flex"}}>
                    <DeleteButton/>
                </div>
                    
            </PriceBottomWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PriceBottom);