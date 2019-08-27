import React, { Component,Fragment } from 'react'
import { ListWrapper } from "./styled"
import "../shop/icon/iconfont.css"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';

class List extends Component {
    render() {
        let { cartsShops } = this.props;
        return (
            <Fragment>
            {
                cartsShops.map((item, index) => (
                    <ListWrapper>
                        <div key={index} className="box">
                            <div>
                                <i className="iconfont">&#xe69e;</i>
                            </div>
                            <img src="" alt="" />
                            <div className="priceBox">
                                <p>新疆奔富西梅 </p>
                                <div className="price">
                                    <p>
                                        <span>1kg</span>
                                        <span>1kg</span>
                                    </p>
                                    <div className="bottom">
                                        <div className="show_price">
                                            <span>￥</span>
                                            <span>79</span>
                                            <span>明日达</span>
                                        </div>
                                        <div className="number">
                                            <i className="iconfont">&#xe618;</i>
                                            <span>1</span>
                                            <i className="iconfont">&#xe616;</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ListWrapper>
                ))
            }
            </Fragment>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);