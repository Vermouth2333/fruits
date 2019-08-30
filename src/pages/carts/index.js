import React, { Component } from 'react'
import NoShopHeader from '@components/carts/noShopHeader'
import ShopHeader from '@components/carts/shopHeader'
import {connect} from 'react-redux';
import {Page} from "@common/commonStyled"
import NoShopCenterWrapper from '@components/carts/noshop'
import ShopCenterWrapper from "@components/carts/shop"
import PriceBottom from "@components/carts/priceBottom"
import {mapStateToProps,mapDispatchToProps} from './connect';
import AddressShow from '@components/carts/addressShow'
import "./index.scss"

 class Carts extends Component {

     // eslint-disable-next-line no-useless-constructor
     constructor(props){
        super(props);
    }
    render() {
        let {cartsGoods} = this.props;
        let showCartsPage = cartsGoods.length===0?2:1;
        return (
                <Page>
                    <div style={{display:showCartsPage===2?"block":"none",height:"auto"}}>
                        <NoShopHeader/>
                    </div>
                    <div style={{display:showCartsPage===1?"block":"none",height:"auto"}}>
                        <ShopHeader/>
                    </div>
                    <div className="shopbox" style={{display:showCartsPage===2?"block":"none",height:"100%"}}>
                        <NoShopCenterWrapper/>
                    </div>
                    <div className="shopbox" style={{display:showCartsPage===1?"block":"none",height:"100%"}}>
                        <ShopCenterWrapper/>
                    </div>
                    <div className="PriceBottom" style={{display:showCartsPage===1?"block":"none"}}>
                        <PriceBottom/>
                    </div>
                
                        <AddressShow/>
                
                </Page>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Carts);