import styled from "styled-components";

export const HeaderWrapper = styled.div`
width:100%;
padding:0 .8rem;
background:#fff;
.category-search{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: .56rem;
    text-align: center;
    background: #f8f8f8;
    border-bottom: .01rem solid #d8d8d8;
    div {
        margin: .16rem;
        background: #eee;
        border-radius: .08rem;
        color: #878787;
        font-size: .24rem;
    }
    i{
        font-size: .42rem;
        margin-right: .06rem;
    }
}
`