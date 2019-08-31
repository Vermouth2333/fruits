import styled from "styled-components"

export const AddAdressWrapper = styled.div`
    width:100%;
    height:100%;
    background-color:#F5F5F5;
    header{
        height:.92rem;
        background-color:#fff;
        text-align:center;
        font-size: .34rem;
        line-height:.8rem;
        border-bottom: .02rem solid #d8d8d8;
        position:relative;
        div{
            position:absolute;
            top:0;
            bottom:0;
            left:.4rem;
            margin:auto;
            width: .27rem;
            height: .27rem;
            border-top: 4px solid #333;
            border-right: 4px solid #333;
            transform: rotate(-135deg);
            display: block;
        }
    }
    main{
        padding-left:.2rem;
        background-color:#fff;
        div{
            height:.84rem;
            line-height:.81rem;
            background-color:#fff;
            border-bottom: .02rem solid #d8d8d8;
            label{
                height:.84rem;
                font-size:.3rem;
                display:flex;
                color:000;
                span{
                    flex:1;
                    display:block;
                }
                input{     
                height:.81rem;
                width:5.4rem;
                font-size:.3rem;
                border: 0px;
                outline: none;
            }
            }
        }
        #addressType{
            label{
                div{
                    width:5.4rem;
                    display:flex;
                    align-items:center;
                    b{
                        font-weight:400;
                        padding-right:.5rem;
                    }
                    input{
                        width:.38rem;
                        padding-right:.3rem;
                    }
                }
            }
        }
    }
    footer{
        height:2.88rem;
        position: relative;
        div:nth-of-type(1){
            a{
                div:nth-of-type(1){
                    position:absolute;
                    bottom:1.44rem;
                    left:0;
                    right:0;
                    width:6.7rem;
                    height:.94rem;
                    background-color:#ff8000;
                    margin:auto;
                    text-align:center;
                    line-height:.94rem;
                    font-size: .34rem;
                    color: #fff;
                }
            }
        }
        div:nth-of-type(2){
            a{
                div:nth-of-type(1){
                    position:absolute;
                    bottom:0;
                    left:0;
                    right:0;
                    width:6.7rem;
                    height:.94rem;
                    background-color: #fff;
                    margin:auto;
                    text-align:center;
                    line-height:.94rem;
                    font-size: .34rem;
                    color: #878787;
                }
            }
        }
     
    }
  
`