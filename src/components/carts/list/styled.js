import styled from "styled-components"
export const ListWrapper = styled.div`
body{
    line-height:0 !important;
}
    background-color:#fff;
    height:2.2rem;
    padding:.2rem;
    border-bottom:2px solid #d8d8d8;
.box{
    display:flex;
    align-items:center;
    .iconfont{
        font-size:.32rem;
        color:#ff8000;
    }
    img{
        width:1.8rem;
        height:1.8rem;
        background-color:red;
        margin-left:.2rem;
    }
    .priceBox{
        height:1.8rem;
        padding-left:.2rem;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        flex:1;
            p{
                font-size: .28rem;
                font-weight: 400;
                color: #3a3a3a;
                margin-bottom:0rem;
            }
            .price{
                p{
                    margin-bottom:0rem;
                    span{
                        font-size:.2rem;
                        padding-right:.3rem;
                    }
                }
                .bottom_box{
                    display:flex;
                    justify-content:space-between;
                    .show_price{
                        span:nth-of-type(1){
                            font-size:.2rem;
                            color:#ff8000;
                        }
                        span:nth-of-type(2){
                            font-size:.36rem;
                            color:#ff8000;
                            font-weight:400
                        }
                        span:nth-of-type(3){
                            font-size: .2rem;
                            background-color:#ff8000;
                            color:#fff;
                            font-weight:400;
                            padding:0 .05rem;
                            margin-left:.2rem;
                        }
                    }
                    .number{
                        display:flex;
                        i{
                            font-size:.44rem;
                        }
                        span{
                            padding:0 .3rem;
                            font-size:.32rem;
                            color:#3a3a3a;
                            font-weight: 500;
                        }
                    }
                }
            }
    }
}
`
