import styled from "styled-components"

export const HeaderWrapper = styled.div`
    height:0.88rem;
    width:100%;
    border-bottom:.01rem solid #a0a0a0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#f5f5f5;
    position: fixed;
    left: 0;
    top: 0;
    border-bottom:.01rem solid #a0a0a0;
    div:nth-of-type(1){
        position:relative;
        width:.8rem;
        height:100%;
        div{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
            width: .26rem;
            height: .26rem;
            border-top: 5px solid #75a379;
            border-right: 5px solid #75a379;
            transform: rotate(-135deg);
            display: block;
        }  
    }
    h2{
        color:#75a739;
        text-align:center;
        line-height:.8rem;
        font-size: .34rem;
        font-weight: 300;
    }
    span{
        line-height:.88rem;
        height:100%;
        font-size:.28rem;
        padding-right:.16rem;
        color: #76a741;
    }
`