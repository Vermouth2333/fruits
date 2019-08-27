import styled from "styled-components";
export const BuyWriper = styled.div`
.buy{
    width:100%;
    height:1.28rem;
    img{
        width:100%;
        height:1.28rem;
    }
}
.buy_b{
    width:100%;
    height:3.2rem;
    img{
        width:100%;
        height:3.2rem;
    }
}

.fruit_floor2{
    width:100%;
    padding: 0 .2rem .2rem .2rem;
    ul{
        display:flex;
        width:100%;
        flex-wrap:wrap;
        li{
            width:33%;
            padding: .2rem .08rem .3rem;
            text-align: center;
            img{
                width:2rem;
                height:2rem;
                margin:0 0.12rem;
            }
            .text{
                margin: .1rem 0 0;
                font-size: .26rem;
                color: #3a3a3a;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .price{
                font-size:0.24rem;
                display: block;
                color: #ff8000;
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}`