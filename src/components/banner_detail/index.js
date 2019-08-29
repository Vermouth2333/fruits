import React, { Component } from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import { mapStateToProps, mapDispatchToProps } from "./connect";
import { connect } from "react-redux";
 class Banner_S extends Component {
  render() {   
    let {list_banner}=this.props 
   
    return (    
        <Carousel autoplay >
        {
          list_banner.map((item,index)=>(
            <div key={index} >
            <h3>
             <img className='image' src={item.image} alt="" style={{width:"100%",height:"100%"}}/>
            </h3>
          </div>
          ))
        }         
        </Carousel>      
      ); 
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Banner_S)
