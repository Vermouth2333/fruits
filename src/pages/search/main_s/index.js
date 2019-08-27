import React, { Component } from 'react'
import { BodySWrapper } from './styled'
import { search_api } from "../../../api/syyapi/home"
import { connect } from "react-redux"
import {NavLink} from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from '../connect'
class Main extends Component {
    constructor() {
        super()
        this.state = {
            arr: [],
        }
    }
    render() {
        let { arr } = this.state
        let { flag, arr_f } = this.props

        return (
            <BodySWrapper>
                <div style={{ display: flag ? "block" : "none" }} className='search'>
                    <p>热门搜索</p>
                    <ul>
                        {
                            arr.map((item, index) => (
                                <li key={index} onClick={this.props.handleFind.bind(this, item)}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div style={{ display: flag ? "none" : "block" }} className='find'>
                    <ul>
                        {
                            arr_f.map((item, index) => (
                                <NavLink to='/des' key={index}>
                                     <li >{item}</li>
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>

            </BodySWrapper>
        )
    }
    async componentDidMount() {
        let data = await search_api()
        this.setState({
            arr: data.data,
        })

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Main)


