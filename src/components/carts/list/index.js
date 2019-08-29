import React, { Component,Fragment } from 'react'
import { ListWrapper } from "./styled"
import "../shop/icon/iconfont.css"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';

class List extends Component {
    render() {
    
        let { cartsGoods} = this.props;
        return (
            <Fragment>
            {
                cartsGoods.map((item, index) => (
                    <ListWrapper key={index}>
                        <div key={index} className="box">
                            <div style={{borderRadius: "50%",width:".28rem",height:".28rem",border:"1px solid #000",position:"relative"}} onClick={this.props.shopSelect.bind(this,index)}>
                                <i className="iconfont" style={{position:"absolute",top:"-.04rem",left:"-.015rem",fontSize:item.flag===true?".32rem":"0rem"}}>&#xe69e;</i>
                            </div>
                            <img src={item.pic} alt="" />
                            <div className="priceBox">
                                <p>{item.name}</p>
                                <div className="price">
                                    <p>
                                        <span>{item.weight}</span>
                                    </p>
                                    <div className="bottom_box">
                                        <div className="show_price">
                                            <span>￥</span>
                                            <span>{item.price}</span>
                                            <span>明日达</span>
                                        </div>
                                        <div className="number">
                                            <i className="iconfont" onClick={this.props.subNum.bind(this,index)}>&#xe618;</i>
                                            <span>{item.num}</span>
                                            <i className="iconfont" onClick={this.props.addNum.bind(this,index)}>&#xe616;</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ListWrapper>
                ))
                
            }
            <div className="list_bottom_heihgt" style={{height:"1rem"}}></div>
            </Fragment>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);