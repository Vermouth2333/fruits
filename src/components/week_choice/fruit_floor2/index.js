import React, { Component } from 'react'
import {BuyWriper} from'./styled.js'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connect";
    
 class Fruit_Floor2 extends Component {
    constructor(){
        super();
        this.state={
            num:8
        }
    }
    render() {
        let {list} =this.props ;
        let {num}=this.state;
       
       
        return (
            <BuyWriper >                                            
            <div className='buy'><img src={list[8]?list[8].content[0].image:""} alt=''/></div>
            <div className='buy_b'><img src={list[9]?list[9].content[0].image:""} alt=''/></div> 
            <div className='fruit_floor2'>
            <ul>
            {   
                list[10]?list[10].content.map((item,index)=>(                                
                <li key={index}>
                    <img src={item.image} alt=''/>
                    <p className='text'>{item.subtitle}</p>
                    <p className='price'>
                        <span>￥{item.price}/{item.volume}</span>
                        <i className='iconfont icon-add_circle'></i>
                    </p>
                </li>
            
                )):""
                
            }
            {
                list[11]?list[11].content.map((item,index)=>(                                
                <li key={index}>
                    <img src={item.image} alt=''/>
                    <p className='text'>{item.subtitle}</p>
                    <p className='price'>
                        <span>￥{item.price}/{item.volume}</span>
                        <i className='iconfont icon-add_circle' onClick={this.props.handleToCarts.bind(this,item)}></i>
                    </p>
                </li>
            
                )):"" 
                                
            }
            </ul>
            
            </div>  
            </BuyWriper>
        )
       
    }
    componentWillMount(){
        this.handleNum()
    }
   
    handleNum(){
        for(let num=8;num<this.props.list.length;num++){
            this.setState({
                num:num
            })
           
        }
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Fruit_Floor2)



// {   list.[{num}]?(list[{num}].group_type===imageTitleBanner?
//     <div className='buy'><img src={list[{num}]?list[{num}].content[0].image:""}/></div>
//     :(list[{num}].group_type===bigImageBanner?<div className='buy_b'><img src={list[9]?list[9].content[0].image:""}/></div>
//     :list[{num}].group_type==3perLineBanner?{   
//         list[{num}]?list[{num}].content.map((item,index)=>(                                
//         <li key={index}>
//             <img src={item.image}/>
//             <p className='text'>{item.subtitle}</p>
//             <p className='price'>
//                 <span>￥{item.price}/{item.volume}</span>
//                 <i></i>
//             </p>
//         </li>
    
//         )):""
        
//     }:""))
//        }