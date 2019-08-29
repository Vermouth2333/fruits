import React, { Component } from 'react'
import HeaderDetail from "../../components/syycomponents/headerdetail"
import DetailConnent from "../../components/syycomponents/detailconnent"
import Comment from '../../components/syycomponents/comments'
import Footer from "../../components/syycomponents/footerdetail"
export default class Details_s extends Component {
    
    render() {
        return (
            <div>
                <HeaderDetail/>
                        <DetailConnent/>
                        <Comment/>
                <Footer/>
            </div>
        )
    }
}
