import styled from "styled-components"

export const HeaderWrapper = styled.div`
    width:100%;
    height:.76rem;  
    background:white; 
    position:fixed;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;   
    box-shadow: 0 0.03rem 0.03rem 0 rgba(0,0,0,.2);
    .header_left{
        display:flex;       
        position:absolute;           
        left:.2rem;
        width:5.57rem;
        height:100%;
        margin-left:.3rem;
        padding-right:.32rem;
        font-size:.3rem;
        img{
            width:1.02rem;
            height:.28rem;
            margin-right:.1rem;
            margin-top:0.25rem;
        }
        .text{
            display:inline-block;
            width: auto;
            height:100%;
            font-weight:500;
            line-height:.76rem;
            line-height:0.76rem;
            color: #65a032;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            i{
                color: #65a032;
                font-size:.35rem;
            }
        }
    }
    .header_right{
        position:absolute;
        right:0rem;
        top:0rem;
        line-height:.76rem;
        padding-right:.32rem;                     
        i{
            font-size:.5rem;
            color: #65a032;                     
        }
    }
   
`