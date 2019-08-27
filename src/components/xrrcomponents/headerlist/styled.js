import styled from "styled-components";
export const HeaderListWrapper = styled.div`
width:100%;
background:#fff;
.active{
    color: #65a032;
    border-bottom:4px solid  #65a032;
}

header {
    display: block;
    /* height: 1.1rem; */
    background: rgba(248,248,248,.95);
    box-shadow: inherit;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: .16rem 0;
    line-height: .6rem;
    nav {
    position: static;
    background: 0 0;
    border-bottom: .02rem solid #d8d8d8;
    color: #75a739;
    height: .9rem;
    line-height: .86rem;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content:space-between;
    .back {
    width: 1.76rem;
    color: #76a741;
    display: inline-block;
    .icon-zuojiantou {
    text-align: center;
    padding-left: .14rem;
    float: left;
}
a {
    width: .8rem;
    color: #75a739;
    display: inline-block;
    font-size: .44rem;
}
}
.text {
    text-align: center;
    font-size: .34rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.next {
    width: 1.6rem;
    margin-right: .16rem;
    text-align: right;
    color: #76a741;
    display: inline-block;
    .icon-icon-{
        font-size: .55rem;
    }
}
}
.swiper-container {
    width:100%;
    height:.72rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 0;
    text-align: center;
    line-height: .36rem;
    background: #fff;
.swiper-wrapper{
    transform: translate3d(30px, 0px, 0px);
.swiper-slide {
  text-align: center;
  font-size: .3rem;
  background: #fff;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

}

}

.sort{
    background: #f5f5f5;
    text-align: center;
    line-height: .78rem;
    width: 100%;
    display: flex;
    justify-content:space-between;
    li {
    flex: 1;
    font-size:.3rem;
    text-align:center;
    .sort-price {
    display: inline-block;
    position: relative;
    top: .04rem;
    margin-left: .1rem;
    height: .24rem;
}
 .sort-price:after{
    border-bottom: .1rem solid #d8d8d8;
    top: 0;
    content: ' ';
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-left: .08rem solid transparent;
    border-right: .08rem solid transparent;
}
.sort-price:before{
    border-top: .1rem solid #d8d8d8;
    top: .14rem;
    content: ' ';
    position: absolute;
    left: 0;
    width: 0;
    height: .1rem;
    border-left: .08rem solid transparent;
    border-right: .08rem solid transparent;
}
}
}
}


.content{
    width:100%;
    height: 100%;
    position:absolute;
    top:2.6rem;
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
                    }
                }
            }
        }
    }
}
`
