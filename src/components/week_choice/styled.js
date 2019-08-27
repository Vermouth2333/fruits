import styled from "styled-components";
export const WeekWrapper = styled.div`
    width:100%;
    background:#fff;
    #banner{
        width:7.5rem;
        height:3.2rem;
        background:#ccc;
    }
    .banner_b{
        width:100%;
        height:2.2rem;
        img{
            width:100%;
            height:2.2rem; 
        }
    }
    .pay{
        width:100%;
        height:4.62rem;
        display:flex;
        padding:.1rem;
        .pay_left{
            flex:1;
            height:4.62rem;
            margin-right:0.02rem;
            img{
                width:100%;
                height:100%
            }
        }
        .pay_right{
            flex:1;
            display:flex;
            flex-direction:column;
            height:4.62rem;
            .pay_l_t{
                flex:1;
               
                margin-bottom:0.02rem;
                img{
                width:100%;
                height:2.3rem
            }
           }
           .pay_l_b{
               flex:1;
               
               img{
                width:100%;
                height:2.3rem
            }
           }
        }
    }
    .eat{
        width:100%;
        height:1.28rem;
        img{
            width:100%;
            height:1.28rem;
        }
    }
    .eat_b{
        width:100%;
        height:2.2rem;
        
        img{
            width:100%;
            height:2.2rem; 
        }
    }
    .fruit_1{
        width:100%;
        padding:0 0.12rem .1rem 0.12rem;
        ul{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            li{                
                width:50%;               
                padding:0 .24rem 0.08rem .24rem;
                img{
                    width:2.8rem;
                    height:2.8rem;
                    margin:0.36rem;
                }
                .text{
                    margin-top: .24rem;
                    font-size: .3rem;                   
                    color: #3a3a3a;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .price{
                    text-align: center;
                    span{
                        display: block;
                        color: #ff8000;
                        width: 100%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis; 
                        margin-top: .04rem;
                        font-size: .24rem;         
                    }                   
                }
            }
        }
    }
   

    
`