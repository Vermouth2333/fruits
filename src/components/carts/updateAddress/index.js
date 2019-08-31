/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import {AddAdressWrapper} from "./styled"
import {connect} from "react-redux" 
import {mapStateToProps , mapDispatchToProps} from "./connect"
import { Link,withRouter } from "react-router-dom";

 class AddAddressInformation extends Component {
     constructor(){
         super();
     }
    render() {
        let {name,phone,address,homeOrCompany,displayRouter}=this.props;

        return (
            <AddAdressWrapper>
                <header>
                    新增收货地址
                    <div onClick={this.goBack.bind(this)}></div>
                </header>
                <main>
                    <div>
                        <label>
                            <span>收货人</span> <input type="text" value={name} className="name" placeholder="收货人姓名" onChange={this.props.changeAddressInput.bind(this,1)}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>收货人手机</span> <input type="text" value={phone} className="phone" placeholder="手机号码" onChange={this.props.changeAddressInput.bind(this,2)}/>
                        </label>
                    </div>  
                    <div>
                        <label>
                            <span>收货地址</span> <input type="text" value={address} className="address" onChange={this.props.changeAddressInput.bind(this,3)}/>
                        </label>
                    </div>
                    <div id="addressType">
                        <label>
                            <span>类型</span> 
                            <div>
                                <input type="radio" className="type"  value="家" checked={homeOrCompany==="家"} onChange={this.props.changeAddressInput.bind(this,4)}/><b>家</b>
                                <input type="radio" className="type"  value="公司" checked={homeOrCompany==="公司"} onChange={this.props.changeAddressInput.bind(this,4)}/><b>公司</b>
                            </div>
                        </label>
                    </div>
                </main>
                <footer >
                    <div onClick={this.props.replaceAddressData.bind(this,name,phone,address)}>
                        <Link to={displayRouter?"/carts":"/updateaddress"}>
                            <div>
                                保存并使用
                            </div>
                        </Link>
                    </div>
 
                    <div onClick={this.props.deleteAddressData.bind(this)}>
                        <Link to={"/carts"}>
                            <div>
                                删除地址
                            </div>
                        </Link>    
                    </div>
            
                </footer>
            </AddAdressWrapper>
        )
    }
    goBack(){
        this.props.history.goBack();
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddAddressInformation))