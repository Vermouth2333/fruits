import styled from "styled-components";

export const FooterWrapper = styled.div`
width:100%;
background:#fff;
z-index:5;
.main-nav {
    background:white;
    height: .9rem;
    line-height: .9rem;
    display: block;
    box-shadow: 0 -0.04rem 0.04rem 0 rgba(0,0,0,.15);
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    position: fixed;
    .add-cart {
    float: right;
    width: 3.6rem;
    background: #ff8000;
    font-size: .36rem;
    line-height: .92rem;
    color: #fff;
    position: relative;
    display: block;
    text-align: center;
    -webkit-box-flex: 1;
   span {
    display: inline-block;
    font-size: .3rem;
    color: rgba(255,255,255,.8);
    line-height: .92rem;
    padding-right: .2rem;
}
em{
    font-style:normal;
}
}
}

`