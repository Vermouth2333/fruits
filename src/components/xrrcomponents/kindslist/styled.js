import styled from "styled-components";

export const KindsWrapper = styled.div`
width:100%;
height: 100%;
background:#fff;
.leftlink{
    width:1.6rem;
    position: fixed;
    left: 0;
    top: .94rem;
    bottom:1rem;
    background: #f5f5f5;
    .leftlink_child{
        height: .9rem;
        width: 1.6rem;
        line-height: .96rem;
        font-size: .3rem;
        border: .04rem solid #f5f5f5;
        border-right: 0;
        text-align:center;
    }
    .active {
        border-left: .04rem solid #65a032;
        color: #65a032;
        background: #fff;
    }
}
.item {
    margin-left: 1.6rem;
    padding: .2rem .2rem .36rem .2rem;
    position: relative;
    overflow:hidden;
    .item:before {
    content: " ";
    display: table;
    }
    h3 {
    font-weight: 400;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    margin: 0;
    font-size: .28rem;
}
>a {
    display: block;
    position: absolute;
    top: .2rem;
    right: 0;
    height: .6rem;
    line-height: .6rem;
    font-size: .24rem;
    color: #878787;
    padding-right: .16rem;
    i {
    display: inline-block;
    width: .2rem;
    font-size: .3rem;
    .icon-youjiantou:before {
    content: "\e61f";
}
}
}
dl {
    width: 33%;
    float: left;
    text-align: center;
    padding-bottom: .4rem;
}
dt {
    padding: 0 .2rem;
}
dd {
    font-size: .26rem;
    margin-top: .08rem;
    color: #3a3a3a;
}
img {
    border: 0;
    width: 100%;
    display: block;
}
}
`