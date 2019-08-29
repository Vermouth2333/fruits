import styled from "styled-components";

export const DetailsWrapper = styled.div`
width:100%;
height: 100%;
background:#fff;
.active {
    border-bottom: .02rem solid #65a032;
    color: #65a032;
}
.iconfont{
    font-size:.5rem;
}
nav {
    background: #fff;
    color: #75a739;
    height: .9rem;
    line-height: .86rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: -webkit-box;
    border-bottom: .02rem solid #d8d8d8;
    z-index:2;
    .back {
    width: 1.76rem;
    color: #76a741;
    display: inline-block;
    .icon-zuojiantou{
        text-align: center;
        padding-left: .1rem;
        float: left;
    }
    p {
    width: .8rem;
    color: #75a739;
    display: inline-block;
    font-size: .42rem;
}
}
.tab {
    -webkit-box-flex: 1;
    text-align: center;
    .tab-menu {
    font-size: .32rem;
    text-align: center;
    color: #3a3a3a;
    li {
    margin: 0 .12rem;
    height: .86rem;
    line-height: .9rem;
    display: inline-block;
}
}
}
.more {
    position: relative;
    width: 1.6rem;
    margin-right: .16rem;
    text-align: right;
    >.more-bubble {
    top: .9rem;
    right: 0;
    bottom: auto;
    left: auto;
    position: absolute;
    width: 2.3rem;
    background: rgba(0,0,0,.75);
    border-radius: .12rem 0 .12rem .12rem;
    text-align: center;
    animation-duration: .3s;
    animation-timing-function: linear;
    z-index: 91;
    >a {
    display: block;
    height: .9rem;
    border-bottom: .02rem solid #5d5d5d;
    font-size: .3rem;
    line-height: .9rem;
    color: #fff;
    >i {
    position: relative;
    top: .02rem;
    margin-right: .26rem;
}
}
}
>.more-bubble:before {
    content: ' ';
    top: -.28rem;
    right: 0;
    bottom: auto;
    left: auto;
    position: absolute;
    border: .14rem solid;
    border-color: transparent rgba(0,0,0,.75) rgba(0,0,0,.75) transparent;
}
}

}


`
