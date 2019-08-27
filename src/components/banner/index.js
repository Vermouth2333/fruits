import React, { Component } from 'react'
import { Carousel } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css'
import { mapStateToProps, mapDispatchToProps } from "./connect";

import { connect } from "react-redux";
 class Banner extends Component {
  render() {
    console.log(this.props)
    let {list}=this.props
    return (    
        <Carousel autoplay >
        {
          list[0]?list[0].content.map((item,index)=>(
            <div key={index} >
            <h3 >
             <img src={item.image} style={{width:"100%",height:"100%"}}/>
            </h3>
          </div>
          )):''
        }         
        </Carousel>
      
      );

     
    
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Banner)
