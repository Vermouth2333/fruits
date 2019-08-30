import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';

class Header extends Component {
    render() {
        let {HeadFlag} = this.props;
        return (
            <HeaderWrapper>
                <div>
                    <div></div>
                </div>
                <h2>购物车</h2>
                <span style={{display:HeadFlag?"block":"none"}} onClick={this.props.changeHeaderCenter.bind(this)}>编辑</span>
                <span style={{display:HeadFlag?"none":"block"}} onClick={this.props.changeHeaderCenter.bind(this)}>完成</span>
            </HeaderWrapper>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);