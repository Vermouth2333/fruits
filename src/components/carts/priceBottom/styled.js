import styled from "styled-components"

export const PriceBottomWrapper = styled.div`
    position: fixed;
    bottom:1rem;
    height:1rem;
    width:100%;
    display:flex;
    background-color:#fff;
    box-shadow: 0 -0.02rem 0.02rem 0 rgba(0,0,0,.15);

    .price_bottom_left{
        padding-left:.2rem;
        display:flex;
        height:100%;
        align-items:center;
        span{
            font-size: .24rem;
            color: #878787;
            font-weight: 300;
            padding-left:.1rem;
        }
    }

    .price_bottom_center{
        flex:1;
        justify-content:flex-end;
        align-items:center;
        span:nth-of-type(1){
            font-size: .28rem;
            color: #878787;
        }
        span:nth-of-type(2){
            padding-left:.15rem;
            color: #ff8000;
            font-size: .2rem;
        }
        span:nth-of-type(3){
            padding-right:.15rem;
            font-family: Arial,"Microsoft Yahei",sans-serif;
            font-weight: 300;
            color: #ff8000;
            font-size: .4rem;
        }
    }

    .price_bottom_center1{
        width:1.2rem;
        justify-content:flex-end;
        align-items:center;
        span{
            padding-right:.2rem;
        }
    }

    .price_bottom_right{
        width: 2rem;
        height: 100%;
        padding: 0 .1rem;
        font-size: .32rem;
        line-height:1rem;
        color: #fff;
        text-align: center;
        span{
            width:100%;
            font-family: Arial,"Microsoft Yahei",sans-serif;
        }
    }

    .price_bottom_right1{
        width: 2rem;
        height: 100%;
        font-size: .32rem;
        line-height:1rem;
        color: #fff;
        text-align: center;
        span{
            width:100%;
            font-family: Arial,"Microsoft Yahei",sans-serif;
        }
    }

    .deleteButtonBox{
        position:absolute;
        height:2rem;
        bottom:4rem;
        width:100%;
        z-index:10;
    }
`