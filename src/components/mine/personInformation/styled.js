import styled from "styled-components"

export const Wrapper = styled.div`
    height:2.4rem;
    display:flex;
    position: relative;
    img{
        width:.4rem;
        height:.4rem;
        background-color:green;
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
        top:.8rem;
        i{
            display:block;
            width:.6rem;
            height:.66rem;
            background-color:green;
        }
        p{
            font-size: .2rem;
            color: #878787;
        }

    }
`