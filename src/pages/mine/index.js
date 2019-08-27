import React, { Component } from 'react'
import Information from "../../components/mine/personInformation"

export default class Mine extends Component {
    render() {
       const back={
            background:"#f5f5f5",
            height:"100%",
        }
        return (
            <div style={back}>
                <Information/>
            </div>
        )
    }
}
