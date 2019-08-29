import React, { Component } from 'react'
import {HeaderSWrapper} from './styled'

import {connect} from "react-redux"
import {mapStateToProps, mapDispatchToProps} from './connect'
import {withRouter,Link} from 'react-router-dom'
 class Header extends Component {
     constructor(props){
         super(props)
         this.state={
             val:this.props.inputVal
         }
     }
    render(){        
        return (
            <HeaderSWrapper>
                <div className='header_l' onClick={this.props.handleBack.bind(this)}>
                    <i className='iconfont icon-zuosanjiao'></i>
                    <span>返回</span>
                </div>
                <div className='header_c'>
                    <i className='iconfont icon-fangdajing'></i>
                    <input type="text" placeholder='新鲜水果 生鲜' value={this.state.val} onChange={this.props.handleChange.bind(this)}/>
                </div>               
               <Link to='/des'> <div className='header_r' onClick={this.props.handleToDes.bind(this)}>搜索</div></Link>  
            </HeaderSWrapper>
        )
    }
   
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
