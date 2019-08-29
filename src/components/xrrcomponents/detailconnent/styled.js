import styled from "styled-components";

export const DetailWrapper = styled.div`
width:100%;
background:#fff;
.connect{
    height: 100%;
    width:100%;
    position:absolute;
    padding-top:.9rem;
    padding-bottom:.9rem;
    overflow-y:auto;
.main{
width:100%;
.swiper-container {
      width: 7.5rem;
      height: 7.5rem;

    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
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
      img{
          width:100%;
          height: 100%;
      }
    }



    .info-item {
    padding: .2rem;
    margin-bottom: .2rem;
    background: #fff;
    text-align: center;
    >h3 {
    font-size: .36rem;
    color: #3a3a3a;
    font-weight: 500;
}
>h4 {
    font-size: .28rem;
    color: #878787;
    font-weight: 500;
}
.price {
    margin-bottom: .2rem;
    small {
    font-size: .24rem;
    color: #ff8000;
        }
        em {
    font-size: .6rem;
    color: #ff8000;
    font-style:normal;
    font-weight: 500;
    }
    }
    .size{
    .cur {
    border-color: #ff8000;
    background: #ff8000;
    color: #fff;
   
    display: inline-block;
    min-width: 1rem;
    border: .02rem solid #dcdcdc;
    border-radius: .08rem;
    padding: .08rem .2rem;
    margin: 0 .1rem;
    font-size: .28rem;
    line-height: 1.4;
    text-align: center;
    margin-bottom: .2rem;
    }
    strong {
    font-weight: 300;
    font-size: .28rem;
}
    small {
        display: block;
        font-size: .24rem;
    }
 em {
    font-size: .23rem;
    display: block;
    color: #ff8000;
    font-weight:300;
    font-style:normal;

}
    }

}


.address-item {
    position: relative;
    padding: .2rem .2rem .2rem .9rem;
    margin-bottom: .2rem;
    background: #fff;
    .title {
    top: .3rem;
    right: auto;
    bottom: auto;
    left: .2rem;
    position: absolute;
    font-size: .24rem;
    color: #878787;
}
h4,h5{
    margin: 0;
    height: .5rem;
    font-size: .26rem;
    line-height: .5rem;
    font-weight: 400;
    color: #3a3a3a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
.icon-dibiao {
    color: #ff8000;
    font-size:.4rem;
}
}
}

.tips-item {
    position: relative;
    padding: .2rem .2rem;
    margin-bottom: .2rem;
    background: #fff;
    overflow:hidden;
    >span {
    float: left;
    padding: .04rem .1rem .04rem 0;
    font-size: .26rem;
    color: #bfbfbf;
    >.iconfont {
    width: .18rem;
    height: .18rem;
    margin-right: 0;
    border: .02rem solid #bfbfbf;
    border-radius: 100%;
    font-size: .26rem;
    color: #ff8000;
}

}
}


.comment-item {
    padding: .2rem 0;
    margin-bottom: .2rem;
    background: #fff;
    .comment-total {
    margin-left: .2rem;
    padding-right: .2rem;
    height: .5rem;
    border-bottom: .02rem solid #d8d8d8;
    font-size: .26rem;
    color: #878787;
    .pull-right {
    float: right!important;
    .orange {
    color: #ff8000;
    font-size: .28rem;

}
.icon-youjiantou{
    font-size: .3rem;
    color: #bfbfbf;
    margin-left: .1rem;
}
}
}
.comment-con-chief {
    margin-left: .2rem;
    padding: .3rem .2rem .3rem 0;
    color: #3a3a3a;
    .comment-info {
    height: .72rem;
    line-height: .72rem;
    .avatar {
    float: left;
    width: .72rem;
    height: .72rem;
    margin-right: .3rem;
    border-radius: 100%;
}
.user {
    float: left;
    margin-right: 1rem;
    font-size: .26rem;
}
.date {
    float: right;
    font-size: .26rem;
    color: #878787;
}
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
    font-size: .3rem;
    line-height: .4rem;
}
.text-center {
    text-align: center;
    .comment-view {
    display: inline-block;
    height: .36rem;
    margin-top: .2rem;
    padding: 0 .3rem;
    border: .02rem solid #878787;
    border-radius: 1.52rem;
    font-size: .24rem;
    color: #878787;
}
}
}
}
}

`