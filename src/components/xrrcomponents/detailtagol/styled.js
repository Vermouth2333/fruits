import styled from "styled-components";

export const DetailTogalWrapper = styled.div`
width:100%;
background:#fff;
.content{
    height: 100%;
    width:100%;
    position:absolute;
    padding-top:.9rem;
    padding-bottom:.9rem;
    overflow-y:auto;
.main{
width:100%;
.comment-level-item {
    padding: .4rem .2rem;
    overflow:hidden;
    background:#fff;
    dt {
    float: left;
    width: 1.12rem;
    height: 1.12rem;
    padding: .16rem 0;
    margin-right: .6rem;
    border-radius: 100%;
    background: #ff8000;
    font-size: .32rem;
    color: #fff;
    text-align: center;
    span {
    display: block;
}
}
dd {
    float: left;
    width: 4.1rem;
    div:first-child {
    margin-bottom: .16rem;
}
div {
    height: .48rem;
    line-height: .48rem;
    .pull-left {
    float: left!important;
    font-size:.28rem;
}
img {
    float: left;
    margin-left: .3rem;
    margin-top: .04rem;
    width: .4rem;
    height: .4rem;
}
}
}
}
.comment-tab-menu {
    padding: .4rem 0;
    border-top: .02rem solid #d8d8d8;
    border-bottom: .02rem solid #d8d8d8;
    background: #fff;
    display: -webkit-box;
    -webkit-box-pack: center;
    box-pack: center;
    ul {
    border: .01rem solid #ff8000;
    border-radius: .06rem;
    li {
    display: inline-block;
    min-width: 1rem;
    height: .6rem;
    padding: 0 .55rem;
    line-height: .6rem;
    color: #ff8000;
    text-align: center;
    font-size:.3rem;
}
}
}
.active {
    background: #ff8000;
    color: white !important;
}


.comment-tab-box{
    .tips {
    height: .32rem;
    padding: .3rem .2rem;
    font-size: .24rem;
    line-height: .32rem;
    color: #878787;
    .icon-duihao2{
    font-size: .28rem;
    color: #ff8000;
    margin-right:.2rem
}
}
li {
    border-bottom: .02rem solid #d8d8d8;
    margin-left: .2rem;
    padding: .3rem .2rem .3rem 0;
    color: #3a3a3a;
    overflow: hidden;
    .comment-info {
    height: .72rem;
    line-height: .72rem;
    .avatar {
    float: left;
    width: .72rem;
    height: .72rem;
    margin-right: .3rem;
    border-radius: 100%;
    display:inline-block;
}
.user {
    float: left;
    margin-right: .1rem;
    font-size: .28rem;
}
.date {
    float: right;
    font-size: .26rem;
    color: #878787;
}
}
.comment-level {
    height: .6rem;
    font-size: .26rem;
    line-height: .6rem;
    color: #878787;
    span {
    display: inline-block;
    margin-right: .6rem;
}
}
.comment-msg {
    font-size: .16rem;
    line-height: .4rem;
}

.comment-img{
    img {
    float: left;
    width: 1.12rem;
    height: 1.12rem;
    margin: .16rem .16rem 0 0;
}
}}
}
}}`