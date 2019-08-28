import React, { Component } from 'react'
import Header from '../header_search'
import { ContentSWrapper } from './styled'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import '../../../components/xrrcomponents/iconfont/iconfont.css'
import { mapStateToProps, mapDispatchToProps } from './connect'
 class Des extends Component {
     constructor(){
         super()
         this.state={
             list:[]
         }
     }
     
    render() {        
        let {list}=this.props
        sessionStorage.setItem("list",JSON.stringify(this.props.list)) 
        // this.setState ({
        //     list:JSON.parse(sessionStorage.getItem("list"))?sessionStorage.setItem("list",JSON.stringify(this.props)):this.props.list 
        // }) 
        console.log(this.state.list,"render")
        return (
            <div>
                <Header />
                <ContentSWrapper>
                    <div className="content">
                        <div className="main">                           
                            {
                                list.map((item,index)=>(                                    
                                    <Link className="item" to={"/detail?product_id="+item.id} key={index}>
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
                                        <i className="iconfont icon-add_circle" onClick={this.props.handleToCars.bind(this,item)}></i>
                                    </span>
                                </div>
                                </Link>
                                ))
                            }
                                
                          
                        </div>
                    </div>

                </ContentSWrapper>
            </div>
        )
    }
    
  } 
export default connect(mapStateToProps, mapDispatchToProps)(Des)
// // <Link to={"/detail?id="+item.id+"&name="+item.name}></Link>
// componentDidMount(){
//     if(sessionStorage.getItem("list")){
//         this.setState({
//             list:JSON.parse(sessionStorage.getItem("list"))
//         })                 
//     }else{
//         this.setState({
//             list:this.props
//         }) 
//         console.log(this.state.list,"componentDidMount")
//     sessionStorage.setItem("list",JSON.stringify(this.props.list))                   
//     }
// } 