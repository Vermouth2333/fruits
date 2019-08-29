import React, { Component } from 'react'
import HeaderDetail from "@components/xrrcomponents/headerdetail"
import DetailConnent from "@components/xrrcomponents/detailconnent"
import Footer from "@components/xrrcomponents/footerdetail"
export default class Detail extends Component {
    render() {
        return (
            <div>
            <HeaderDetail/>
            <DetailConnent/>
            <Footer/>
            </div>
        )
    }
}
