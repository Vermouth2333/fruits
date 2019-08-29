import styled from "styled-components";
export const ContentSWrapper = styled.div`
height:100%;
.content{
    width:100%;
    height: 100%;
    position:absolute;
    top:0.88rem;
    overflow-y:auto;
    .main{
        width:100%;
        .item {
            display: -webkit-box;
            padding: .2rem;
            position: relative;
            border-bottom: .02rem solid #d8d8d8;
            color: #3a3a3a;
            .good-img {
                width: 2.1rem;
                height: 2.1rem;
                margin-right: .2rem;
                border-radius: .08rem;
            }
            dl {
                -webkit-box-flex: 1;
                position: relative;
                text-align: left;
                height: 2.1rem;
                width: 1%;
                dt {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size:.28rem;
                }
                dd {
                    height: .4rem;
                    font-size: .24rem;
                    color: #878787;
                    line-height: .4rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                dd:last-of-type {
                    top: 1.2rem;
                    right: 0;
                    bottom: auto;
                    left: 0;
                    position: absolute;
                }
                div {
                    margin-top: .1rem;
                    color: #ff8000;
                    line-height: 1;
                    top: auto;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    position: absolute;
                    small {
                        font-size: .2rem;
                    }
                    big {
                        font-size: .4rem;
                    }
                    span {
                        position: relative;
                        top: -.06rem;
                        border-radius: .04rem;
                        padding: .04rem .04rem;
                        line-height: 1;
                        margin-left: .16rem;
                        font-size: .16rem;
                        color: #fff;
                        font-size:.24rem;
                    }
                }
            }
            .count {
                position: absolute;
                width: 1.48rem;
                line-height: .44rem;
                right: .2rem;
                bottom: 0;
                height: .86rem;
                .num {
                    display: block;
                    width: 100%;
                    padding: .2rem 0;
                    text-align: center;
                }
                .plus {
                    right: -.2rem;
                    text-align: right;
                    padding: .2rem;
                    position: absolute;
                    top: 0;
                    i {
                        text-align: center;
                        display: inline-block;
                        border: .01rem solid #d8d8d8;
                        color: #ff7e05;
                        border-radius: 100%;
                        width: .4rem;
                        height: .4rem;
                        line-height: .4rem;
                        background: #fff;
                    }
                    .icon-add_circle{
                        font-size:.5rem;
                        color: #ff7e05;
                    }
                }
            }
        }
    }
}
 `  