/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Header from '../header_search'
import { ContentSWrapper } from './styled'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import '../../../components/xrrcomponents/iconfont/iconfont.css'
import { mapStateToProps, mapDispatchToProps } from './connect'
import BScrollComponent from "../../../common/bscroll";
import {update_api} from '../../../api/syyapi/home'
class Des extends Component {
    constructor(props){
        super(props) 
        this.state=({
            list:[]
        })
    }
    render() { 

        let {list}=this.state.list.length===0?this.props:this.state            
        return (
            <div style={{ height: "100%" }}>
                <Header />
                <ContentSWrapper>
                    <div className="content">
                        <BScrollComponent ref="bscroll">
                            <div className="main">
                                {
                                    list.map((item, index) => (
                                        <Link className="item" to={"/details?product_id=" + item.id} key={index} onClick={this.props.handleToDetails.bind(this, item.id)}>
                                            <img className="good-img" src={item.photo} alt={item.product_name} />
                                            <dl className="">
                                                <dt>{item.product_name}</dt>
                                                <dd>{item.product_desc}</dd> <dd>{item.volume}</dd>
                                                <div>
                                                    <small>￥</small>
                                                    <big>{item.price}</big>
                                                    <span style={{ background: "#FF8000" }}>明日达  </span>
                                                </div>
                                            </dl>
                                            <div className="count">
                                                <span className="plus">
                                                    <i className="iconfont icon-add_circle" onClick={this.props.handleToCars.bind(this, item)}></i>
                                                </span>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </BScrollComponent>
                    </div>
                </ContentSWrapper>
            </div>
        )
    }
    componentWillUpdate(newProps,newState){
        if(newState.list !==this.state.list){          
            this.refs.bscroll.handleRestpullingUp();
            // this.refs.bscroll.handlefinishPullDown();
        }        
    }
    componentDidMount() {      
        if(sessionStorage.getItem("list")){
            this.setState({
                list:JSON.parse(sessionStorage.getItem("list"))
            })
        }
        // 上拉加载
        this.refs.bscroll.handlepullingUp(()=>{           
            this.handleGetData();
        })

        //   //下拉刷新
        //   this.refs.bscroll.handlepullingDown(()=>{           
        //     this.handleGetData();           
        // })
    }
    componentWillUnmount(){
        // 卸载异步操作设置状态
        this.setState = (state, callback) => {
         return;
     }
   }
    async handleGetData(){
        let data = await update_api();       
        if(data){
            this.setState({
                list: [...this.state.list,...data.data.productGroup],               
            })
            sessionStorage.setItem("list",JSON.stringify(this.state.list));           
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Des)
