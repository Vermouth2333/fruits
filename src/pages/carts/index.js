import React, { Component } from 'react'
import NoShopHeader from '@components/carts/noShopHeader'
import ShopHeader from '@components/carts/shopHeader'
import {connect} from 'react-redux';
import {Page} from "@common/commonStyled"
import NoShopCenterWrapper from '@components/carts/noshop'
import ShopCenterWrapper from "@components/carts/shop"
import {mapStateToProps,mapDispatchToProps} from './connect';

 class Carts extends Component {
     constructor(props){
        super(props);
        let {cartsGoods} = this.props;
        this.state={
            showCartsPage:cartsGoods.length===0?2:1
        }
    }
    render() {
        let {showCartsPage} = this.state;
        return (
                <Page>
                    <div style={{display:showCartsPage===2?"block":"none",height:"auto"}}>
                        <NoShopHeader/>
                    </div>
                    <div style={{display:showCartsPage===1?"block":"none",height:"auto"}}>
                        <ShopHeader/>
                    </div>
                    <div className="shopbox" style={{display:showCartsPage===2?"block":"none"}}>
                        <NoShopCenterWrapper/>
                    </div>
                    <div className="shopbox" style={{display:showCartsPage===1?"block":"none",height:"100%"}}>
                        <ShopCenterWrapper/>
                    </div>
                </Page>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Carts);