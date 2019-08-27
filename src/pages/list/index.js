import React, { Component,Fragment } from 'react'
import HeaderList from "@components/xrrcomponents/headerlist"
import CartsLeft from "@components/xrrcomponents/cartsleftbottom"
export default class List extends Component {
    render() {
        return (
            <Fragment>
                <HeaderList/>
                <CartsLeft/>
            </Fragment>
        )
    }
}
