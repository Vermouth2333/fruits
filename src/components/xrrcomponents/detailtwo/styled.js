import styled from "styled-components";

export const DetailTwoWrapper = styled.div`
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

.dynamic-prop-table {
    font-family: Calibri,Arial,Helvetica,sans-serif;
    border: 1px solid #d8d8d8;
    dl:nth-child(odd) {
    background: #f7f7f7;
}
    dl {
    -webkit-box-align: center;
    border-bottom: 1px solid #d8d8d8;
    margin: 0;
    font-size: .28rem;
    line-height: .34rem;
    width: 100%;
    font-weight: lighter;
    display: flex;
}
    dt {
    width: 1.76rem;
    text-align: left;
    padding: .18rem .24rem;
    border-right:1px solid #ccc;
}
dd{
    padding: .2rem .24rem;
}
.dynamic-prop-table dl dd {
    -webkit-box-flex: 1;
    margin: 0;
    border-left: 1px solid #d8d8d8;
    padding:.18rem .24rem;
}
}
}
}
img{}
`