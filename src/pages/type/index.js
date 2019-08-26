import React, { Component } from 'react'
import {Page} from "@common/commonStyled"

import Header from "../../components/xrrcomponents/header"
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
