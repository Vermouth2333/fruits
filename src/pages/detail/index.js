import React, { Component } from 'react'
import HeaderDetail from "@components/xrrcomponents/headerdetail"
import DetailConnent from "@components/xrrcomponents/detailconnent"
import DetailTwo from "@components/xrrcomponents/detailtwo"
import DetailTagol from "@components/xrrcomponents/detailtagol"
import Footer from "@components/xrrcomponents/footerdetail"
import store from "@store"
export default class Detail extends Component {
    constructor(){
        super()
        
        this.state = store.getState();
        store.subscribe(this.handleUpdate.bind(this))
    }

    render() {
        let {flaglist,flag} = this.state.TypeList
        return (
            <div>
            <HeaderDetail/>
            { (flag||flaglist.flag1)?<DetailConnent/>:""}
            {flaglist.flag2?<DetailTwo/>:""}
            {flaglist.flag3?<DetailTagol/>:""}


            <Footer/>
            </div>
        )
    }
    handleUpdate(){
        this.setState(store.getState());
    }

}
