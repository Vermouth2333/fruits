import React, { Component } from 'react'
import Header from './header_search'
import {Page} from "@common/commonStyled"
import Main from './main_s'
export default class Search extends Component {
    render() {
        return (
            <Page>
                <Header/>               
                <Main/>
            </Page>
        )
    }
}
