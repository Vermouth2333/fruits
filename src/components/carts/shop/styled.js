import styled from "styled-components"
import logo from "./img/border.png";

export const ShopCenterWrapper = styled.div`
    overflow: auto;
    height: 100%;
    background-color:#f5f5f5;
    div{
    .address{
        width:100%;
        .specific{
            padding:.4rem 0;
            display:flex;
            align-items:center;
            position: relative;
            .iconfont{
                font-size:.4rem;
                padding:.2rem;
                color:#ff8000;
            }
            span{
                font-size:.28rem;
                color:#3a3a3a;
            }
            div{
                width: .18rem;
                height: .18rem;
                border-top: 2px solid #bfbfbf;
                border-right: 2px solid #bfbfbf;
                transform: rotate(45deg);
                display: block;
                position:absolute;
                right:.3rem;
            }
        }
    }

    .address::after,.address::before{
        content: '';
        display: block;
        width: 100%;
        height: .04rem;
        background: url(${logo});
    }

    .detailedList{
        margin-top: .3rem;
        height:.6rem;
        background-color:#fff;
        padding:.2rem;
        border-bottom:1px solid #000;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
}
main{
    padding-left:.2rem;
            padding-right:.4rem;
            p:nth-of-type(1){
              display: flex;
              align-items: center;
              span:nth-of-type(1){
                font-size: .36rem;
                color: #4b4b4b;
                margin-right: .2rem;
                line-height: .44rem;
                font-weight: 300;
                font-family: Arial,"Microsoft Yahei",sans-serif;
              }
              span:nth-of-type(2){
                font-size: .36rem;
                color: #4b4b4b;
                margin-right: .2rem;
                line-height: .44rem;
                font-weight: 300;
                font-family: Arial,"Microsoft Yahei",sans-serif;
              }
              span:nth-of-type(3){
                padding: 0 .12rem;
                font-size: .2rem;
                color: #ff7e05;
                border: .02rem solid #ff7e05;
                height: .32rem;
                line-height: .3rem;
                border-radius: .08rem;
                font-weight: 300;
                font-family: Arial,"Microsoft Yahei",sans-serif;
              }
            }
            p:nth-of-type(2){
              color: #939393;
              font-size: .28rem;
              line-height: .34rem;
              margin-top: .1rem;
            }
}

`