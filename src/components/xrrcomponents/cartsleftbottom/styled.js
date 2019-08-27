import styled from "styled-components";

export const CartsWrapper = styled.div`
width:100%;
background:#fff;
.cart-btn {
    top: auto;
    right: auto;
    bottom: .1rem;
    left: .1rem;
    position: fixed;
    background: #65a032;
    text-align: center;
    color: #fff;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    border-radius: 100%;
    i {
    font-size: .58rem;
    
}
span {
    position: absolute;
    background: #ff8000;
    line-height: .28rem;
    border-radius: .3rem;
    min-width: .28rem;
    padding: 0 .04rem;
    top: .06rem;
    right: auto;
    bottom: auto;
    left: .7rem;
    font-size: .2rem;
}
}
`