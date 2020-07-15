import React, { Component } from 'react'
import {Page} from "@common/commonStyled"

import Header from "../../components/xrrcomponents/header" // 123
import KindsList from "../../components/xrrcomponents/kindslist"
export default class Type extends Component {
    render() {
        return (
            <Page>
                <Header/>
                <KindsList/>
            </Page>
        )
    }
}
