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
              <main>
              <div className="address_information">
                <i className="iconfont">&#xe69e;</i>
                <div className="address_information_center">
                  <p>
                    <span>112</span>
                    <span>17853535691</span>
                    <span>其他</span>
                  </p>
                  <p>  北京市昌平区沙河镇沙河二毛生活小区北京科技职业学院 北京市昌平区沙河镇沙河二毛生活小区北京科技职业学院   </p>
                </div>
                <i className="iconfont">&#xe638;</i>
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