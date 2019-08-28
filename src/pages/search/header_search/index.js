import React, { Component } from 'react'
import {HeaderSWrapper} from './styled'

import {connect} from "react-redux"
import {mapStateToProps, mapDispatchToProps} from './connect'
import {withRouter} from 'react-router-dom'
 class Header extends Component {
     constructor(){
         super()
         this.state={
             val:''
         }
     }
    render() { 
        let {inputVal}=this.props       
        return (
            <HeaderSWrapper>
                <div className='header_l' onClick={this.props.handleBack.bind(this)}>
                    <i className='iconfont icon-zuosanjiao'></i>
                    <span>返回</span>
                </div>
                <div className='header_c'>
                    <i className='iconfont icon-fangdajing'></i>
                    <input type="text" placeholder='新鲜水果 生鲜' value={inputVal?inputVal:this.state.val} onChange={this.props.handleChange.bind(this)}/>
                    </div>
                <div className='header_r'>搜索</div>  
            </HeaderSWrapper>
        )
    }
   
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
