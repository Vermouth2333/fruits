import styled from "styled-components";
export const BodySWrapper = styled.div`   
    padding:.5rem;
    .search{
        p{
        color: #878787;
        font-weight: lighter;
        margin-bottom: .04rem; 
        font-size:0.32rem; 
    }
    ul{
        display:flex;
        flex-wrap:wrap;
        li{
            background:#eee;
            text-align:center;
            font-size:0.32rem;
            color: #3a3a3a;
            display: inline-block;
            padding: .14rem .16rem;
            margin: .2rem .08rem 0;
            background-color: #f1f1f1;
            border-radius: .1rem;
            max-width: 3.6rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis; 
        }
    }
    }
    .find{
       ul{
           width:100%;
           position: absolute;
            top: 1rem;
            left: 0;
            right: 0;
            width: 100%;
            padding-left:.2rem;
           li{
               width:100%;
               height:1rem;
               border-bottom:0.02rem solid #ccc;
               line-height: 1rem;
               font-size: .32rem;
           }
       } 
    }
    

`