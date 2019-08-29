import styled from "styled-components";

export const CityWrapper = styled.div`
    font-size: .28rem;
    color: #333;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1000;
    overflow-y: auto;
    background:#ebebeb;
    padding-right:.34rem;
.city-title {
    padding-left: .3rem;
    line-height: .6rem;
}
.city-list-inline {
    background-color: #f5f5f5;
    padding-bottom: .16rem;
    overflow: hidden;
    .location-city {
    width: auto;
    min-width: 30%;
    padding: 0 .4rem;
    float: left;
    background: #fff;
    height: .66rem;
    margin-top: .3rem;
    margin-left: 4%;
    border: 1px solid #e6e6e6;
    border-radius: .06rem;
    line-height: .66rem;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
}
.city-list {
    padding-right:.6rem;
}


.city-title {
    padding-left: .3rem;
    line-height: .6rem;
}
.city-item {
    float: left;
    background: #fff;
    width: 29%;
    height: .66rem;
    margin-top: .3rem;
    margin-left: 4%;
    padding: 0 .08rem;
    border: 1px solid #e6e6e6;
    border-radius: .06rem;
    line-height: .66rem;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.city-title-letter {
    padding-left: .5rem;
}
.city-list-block {
    background-color: #f5f5f5;
    .city-item1 {
    height: .88rem;
    line-height: .88rem;
    margin-left: .3rem;
    border-bottom: 1px solid #c8c7cc;
}
}


`