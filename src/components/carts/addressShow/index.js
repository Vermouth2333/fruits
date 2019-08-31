/* eslint-disable react/jsx-no-comment-textnodes */
import "./index.scss"
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
import { Link } from "react-router-dom";
import "./icon/iconfont.css"

class AddressShow extends Component {

  render() {
    let {showAddress,addressList} =this.props;
    return (
      <Fragment>
        <div className="address_show_mak" onClick={this.props.addressHidden.bind(this)} style={{zIndex:showAddress?10:-1,transition: "all .3s"}}>
          <div className="address_show_box" onClick={this.props.stopmp.bind(this)} style={{height:showAddress?"9rem":"0rem",transition: "all .5s"}}>

            {/** 头部***/}
            <div className="address_show_box_header">
              收货地址
            </div>
            {/** 列表***/}
            <article>
            {
            addressList.map((item,index)=>(
              <main key={index} onClick={this.props.selectThisMain.bind(this,index)}>
              <div className="address_information">
                <i className="iconfont" style={{fontSize:item.checked?".36rem":"0rem"}}>&#xe69e;</i>
                <div className="address_information_center" style={{paddingLeft:item.checked?".2rem":".56rem"}}>
                  <p>
                    <span>{item.name}</span>
                    <span>{item.phone}</span>
                    <span>{item.homeOrCompany}</span>
                  </p>
                  <p>{item.address}</p>
                </div>
                <Link to="/updateaddress" onClick={this.props.updateThisMain.bind(this,index)}>
                  <i className="iconfont">&#xe638;</i>
                </Link>
              </div>
            </main>
            ))
            }
            </article>
            {/** 底部***/}
            <Link to="/addaddress">
              <div className="address_information_bottom">
                新增地址
              </div>
            </Link>
          </div>
        </div>
      </Fragment>
    )
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(AddressShow);