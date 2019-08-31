import React, { Component } from 'react'
import { CartsWrapper } from "./styled"
import "../iconfont/iconfont.css"
import store from "@store"
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
class CartsLeft extends Component {
    constructor(){
        super()

        this.state ={
            cartsgoods:[],
            num:"",
            ...store.getState()
        }
        // let {cartsGoods}=this.state.carts
        // this.state.cartsgoods=cartsGoods
        // console.log(cartsGoods)
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {cartsGoods} =this.props;
        let num=this.props.totalNum(cartsGoods);

        // console.log(greennum)
        // let {num}=this.state
        return (
            <CartsWrapper>
                <a className="cart-btn" href="#/carts" style={{ display: "inline" }}>
                    <i className="iconfont icon-gouwuche"></i>
                    <span id="cart-num">{num}</span>
                </a>
            </CartsWrapper>
        )
    }
    handleUpdate(){
        this.setState(store.getState());
    }
    // componentDidMount(){
    //     let cartsgoods=this.state.cartsgoods;
    //     this.state.num=this.totalNum(cartsgoods);

    // }
    // totalNum(arr){
    //     let sum=0;
    //     arr.forEach((item,index)=>{
    //         if(item.flag){
    //             sum+=item.num;
    //         }else{
    //             sum+=0
    //         }
    //     })
    //     return sum;
    // }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartsLeft);