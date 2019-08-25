import React, { Component } from 'react'
import Header from '@components/carts/header'
import NoShopCenterWrapper from '@components/carts/noshop'

export default class Carts extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NoShopCenterWrapper/>
            </div>
        )
    }
}
