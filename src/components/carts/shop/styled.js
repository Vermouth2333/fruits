import styled from "styled-components"
import logo from "./img/border.png";

export const ShopCenterWrapper = styled.div`
    overflow: auto;
    height: 100%;
    background-color:#f5f5f5;
    div{
    .address{
        height:1.6rem;
        width:100%;
        .specific{
            height:1.6rem;
            padding:.4rem 0;
            display:flex;
            align-items:center;
            position: relative;
            .iconfont{
                font-size:.4rem;
                padding:.2rem;
                color:#ff8000;
            }
            span{
                font-size:.28rem;
                color:#3a3a3a;
            }
            div{
                width: .18rem;
                height: .18rem;
                border-top: 2px solid #bfbfbf;
                border-right: 2px solid #bfbfbf;
                transform: rotate(45deg);
                display: block;
                position:absolute;
                right:.3rem;
            }
        }
    }

    .address::after,.address::before{
        content: '';
        display: block;
        width: 100%;
        height: .04rem;
        background: url(${logo});
    }

    .detailedList{
        margin-top: .3rem;
        height:.6rem;
        background-color:#fff;
        padding:.2rem;
        border-bottom:1px solid #000;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
}
`