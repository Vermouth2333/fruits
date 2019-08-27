import styled from "styled-components";
export const HeaderSWrapper = styled.div`
    width:100%;
    height:0.76rem;
    display:flex;
    align-item:center;
    margin-top:.2rem;
    position:fixed;
    left:0;
    top:0;
    border-bottom:0.04rem solid #eee;
    .header_l{
        width:0.94rem;
        flex:1;
        height:100%;
        line-height:0.68rem;
        text-align:center;
        color: #64a131;
        font-size: .28rem;
        font-weight:500;
        i{
            font-size:0.3rem;
        }
    }
    .header_c{
        height:0.64rem;
        flex:4;
        box-sizing: border-box;
        position: relative;
        background-color: #eee;
        border-radius: .05rem;
        color: #878787;
        font-size: .28rem;
        
        border-radius:.1rem;
        i{
            font-size:.3rem;
            text-align:center;
            line-height:0.64rem;
            margin:.1rem .2rem
        }
        input{         
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
            padding: 0 .6rem 0 0;
            height: .6rem;
            background:#eee;
            border:0;
            outline:0;
            margin-top:0;
            font-size: .28rem;
            color: #878787;
        }
    }
    .header_r{
        flex:1;       
        color: #64a131;
        font-size: .28rem;
        font-weight:500;
        text-align:center;
        line-height:0.70rem;
    }
`