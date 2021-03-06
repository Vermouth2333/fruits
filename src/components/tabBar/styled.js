import styled from "styled-components";


export const TabBarWrapper = styled.div`
    width:100%;
    height:1rem;
    position:fixed;
    left:0;
    bottom:0;
    border-top:1px solid #ccc;
    background:#fff;
    ul{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between;
        li{
            width:100%;
            height:100%;
        }
        a{
            width:100%;
            height:100%;
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            position: relative;
        }
        i{
            font-size:.4rem;
        }
        span{
            font-size:.3rem;
        }
        .active{
            color:#75a739;
        }
        b{
            background: #ff4848;
            line-height: .28rem;
            border-radius: .3rem;
            min-width: .28rem;
            padding: 0 .07rem;
            color: #fff;
            top: .06rem;
            right: auto;
            bottom: auto;
            left: 50%;
            position: absolute;
            margin-left: .24rem;
        }
    }
`