import React, { Component } from 'react'
import {HeaderWrapper} from "./styled"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
import {withRouter} from "react-router-dom"

class Header extends Component {
    render() {
        let {HeadFlag} = this.props;
        return (
            <HeaderWrapper>
                <div onClick={this.goBack.bind(this)}>
                    <div></div>
                </div>
                <h2>购物车</h2>
                <span style={{display:HeadFlag?"block":"none"}} onClick={this.props.changeHeaderCenter.bind(this)}>编辑</span>
                <span style={{display:HeadFlag?"none":"block"}} onClick={this.props.changeHeaderCenter.bind(this)}>完成</span>
            </HeaderWrapper>
        )
    }
    goBack(){
        this.props.history.goBack();
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));