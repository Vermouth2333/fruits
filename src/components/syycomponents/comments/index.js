import React, { Component } from 'react'
import { DetailWrapper } from "./styled"
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../detailconnent/connect'

 class Comment extends Component {
    render() {
        let {num}=this.props
        return (
            <DetailWrapper style={{display:num===3?'block':'none'}}>
                Comment
            </DetailWrapper>
        )
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Comment)