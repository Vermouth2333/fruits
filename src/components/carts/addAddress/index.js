import React, { Component } from 'react'
import {AddAdressWrapper} from "./styled"
import {connect} from "react-redux" 
import {mapStateToProps , mapDispatchToProps} from "./connect"

 class AddAddressInformation extends Component {
    render() {
        return (
            <AddAdressWrapper>
                <header>
                    新增收货地址
                    <div></div>
                </header>
                <main>
                    <div>
                        <label>
                            <span>收货人</span> <input type="text" value=""className="name" placeholder="收货人姓名"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>收货人手机</span> <input type="text" value=""className="phone" placeholder="手机号码"/>
                        </label>
                    </div>  
                    <div>
                        <label>
                            <span>收货地址</span> <input type="text" value=""className="address" placeholder=""/>
                        </label>
                    </div>
                    <div id="addressType">
                        <label>
                            <span>类型</span> 
                            <div>
                                <input type="radio" className="type"  value="家"/><b>家</b>
                                <input type="radio" className="type"  value="公司"/><b>公司</b>
                            </div>
                        </label>
                    </div>
                </main>
                <footer>
                    <div>
                        保存并使用
                    </div>
                </footer>
            </AddAdressWrapper>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddAddressInformation)