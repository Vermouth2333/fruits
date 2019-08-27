import styled from "styled-components"
import logo from "./img/headIcon.jpg";


export const Wrapper = styled.div`
    height:2.4rem;
    display:flex;
    position: relative;
    background-color:#F5F5F5;
    img{
        width:.4rem;
        height:.4rem;
        margin:1.4rem 0 0 1.14rem
    }
    div:nth-of-type(1){
        padding-left:.3rem;
        h2{
            margin-top:.6rem;
            font-weight:500;
            margin-bottom:.2rem;
        }
        span{
            padding:0 .1rem .05rem;
            color:#fff;
            background-color:#ff8000;
            border-radius:.2rem;
        }
    }
    div:nth-of-type(2){
        position: absolute;
        right:.3rem;
        top:.6rem;
        
        i{
            display:block;
            width:.6rem;
            height:.66rem;
            background:url(${logo})no-repeat;
            background-size:100% 100%;
        }  
        p{
            padding-top:.05rem;
            font-size: .2rem;
            color: #878787;
        }

    }
`

export const TwoWrapper = styled.div`
        background-color:#F5F5F5;
        padding: 0 .2rem;
        padding-bottom:.3rem;
        ul{
            display:flex;
            li{
                flex:1;
                padding:.2rem 0; 
                p:nth-of-type(1){
                    color: #000;
                    font-size: .26rem;
                    text-align:center;
                }
                p:nth-of-type(2){
                    color: #ff7e05;
                    font-size: .3rem;
                    font-weight: 500;
                    text-align:center;
                }
            }
        }
`

export const Order = styled.div`
    background-color:#fff;
    padding:0 .3rem 0 .4rem;
    height:.88rem;
    display:flex;
    justify-content:space-between;
    border-top:.02rem solid #F5F5F5;
    div:nth-of-type(1){
        display:flex;
        justify-content:center;
        align-items:center;

        i{
            font-size:.48rem;
        }
        span{
            font-size: .28rem;
            color: #3a3a3a;
            padding-left: .2rem;
        }
    }
    div:nth-of-type(2){
        display:flex;
        justify-content:center;
        align-items:center;
        span{
            font-size: .26rem;
            color: #878787;
            padding-right:.05rem;
        }
        .right{
            right: .4rem;
            content: "";
            width: .21rem;
            height: .21rem;
            border-top: 1px solid #bfbfbf;
            border-right: 1px solid #bfbfbf;
            transform: rotate(45deg);
            display: block;
        }
    }
`


export const Five = styled.div`
  background-color:#fff;
  height:1.78rem;
  border-top:.02rem solid #F5F5F5;
  border-bottom:.2rem solid #F5F5F5;
  ul{
      display:flex;
      height:100%;
      li{
          flex:1;
          height:100%;
          display:flex;
          flex-direction:column;
          text-align:center;
          padding:.44rem 0 .24rem;
          i{
            font-size:.44rem;
          }
          span{
                padding-top:0.1rem;
                font-size:.24rem;
          }
      }
  }
`
