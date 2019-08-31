/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import { WeekWrapper } from "./styled";
import Fruit_Floor2 from './fruit_floor2'
import {NavLink} from "react-router-dom";
import BScrollComponent from "@common/bscroll";
import Banner from '../banner'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connect";
class WeekChoice extends Component {
       render() {        
        let{list}=this.props      
        return (
            <BScrollComponent ref="bscroll">
                <WeekWrapper>
                    <div id='banner1'>
                        <Banner/>    
                    </div>             
                    <div className='banner_b'><img src={list[2]?list[2].content[0].image:''} alt=''/> </div>                                     
                    <div className="pay">
                        <div className='pay_left'>
                            <img src={list[4]?list[4].content[0].image:'' } alt=""/>
                        </div>
                        <div className='pay_right'>
                            <div className='pay_l_t'> <img  alt='' src={list[4]?list[4].content[1].image:''}/></div>
                            <div className='pay_l_b'> <img  alt='' src={list[4]?list[4].content[2].image:''}/></div>
                        </div>                       
                    </div>
                    <div className='eat'>
                        <img  alt='' src={list[5]?list[5].content[0].image:''}/>
                    </div>
                    <div className='eat_b'><img   alt=''src={list[6]?list[6].content[0].image:''}/></div>
                    <div className='fruit_1'>
                        <ul>
                        {
                            list[7]?list[7].content.map((item,index)=>(                           
                            <li key={index}>
                            <NavLink to='/list'>
                                <img   alt=''src={item.image}/>
                                <p className='text'>{item.subtitle}</p>
                                <p className='price'>
                                    <span>￥{item.guide_price}/{item.volume}</span>
                                    <i className='iconfont icon-add_circle' onClick={this.props.handleToCart.bind(this,item)}></i>
                                </p>
                             </NavLink>   
                            </li>                            
                            )):""
                        }                               
                        </ul>
                    </div>                    
                    <Fruit_Floor2/>
            </WeekWrapper>
            </BScrollComponent>
        )
    }

    componentWillUpdate() {      
    }
    async componentDidMount() {
       this.props.handleHome()
}
componentWillUnmount(){
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
     return;
 }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekChoice)
