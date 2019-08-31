import React, { Component, Fragment } from 'react'
import { CityWrapper } from "./styled"
import store from "@store"
import { cityAsyncData } from "@actions/xrractions/actionCreator.js"
import BScrollComponent from "@common/bscroll";

export default class XrrCity extends Component {
    constructor() {
        super();
        this.state = store.getState();
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let { cityHot, cityList } = this.state.xrrcity;
        return (
            <CityWrapper ref="scroll">
                <BScrollComponent ref="alleyscroll">
                    <div className="main" ref="hot" >
                        <section >
                            <div id="locate" className="city-title hot">
                                定位城市
                    </div>
                            <div className="city-list city-list-inline clearfix">
                                <div className="location-city">定位失败，请点击重试</div>
                            </div>
                        </section>
                        <section>
                            <div id="hot" className="city-title hot">
                                热门城市
  </div>
                            <div className="city-list city-list-inline clearfix">

                                {
                                    cityHot.map((item, index) => (
                                        <div key={index} className="city-item" data-nm={item.cityName} data-id={item.cityId}>
                                            {item.cityName}
                                        </div>

                                    ))
                                }


                            </div>
                        </section>
                        <section>
                            <div className="citylist" ref="list">
                                {
                                    cityList.map((item, index) => (
                                        <Fragment key={index}>
                                            <div id={item.index} className="city-title city-title-letter" >
                                                {item.index}
                                            </div>
                                            <div className="city-list city-list-block clearfix">
                                                {
                                                    item.list.map((child, ids) => (
                                                        <div className="city-item1" data-nm={child.nm} data-id={child.cityId} key={ids}>
                                                            {child.cityName}
                                                        </div>

                                                    ))
                                                }
                                            </div>
                                        </Fragment>
                                    ))
                                }
                            </div>
                        </section>



                    </div>
                </BScrollComponent>
                <section className="nav" >
                    <div className="nav-item " data-id="locate" onClick={this.handleloation.bind(this, 1)}>
                        定位
            </div>

                    <div className="nav-item " data-id="hot" onClick={this.handleloation.bind(this, 2)}>
                        热门
            </div>

                    {
                        cityList.map((item, index) => (
                            <div key={index} className="nav-letter  nav-item" data-id={item.index} onClick={this.handletogo.bind(this, index)}>
                                {item.index}
                            </div>

                        ))
                    }

                </section>
            </CityWrapper>
        )
    }
    componentDidMount() {
        store.dispatch(cityAsyncData())
    }
    handleUpdate() {
        this.setState(store.getState());
    }
    handletogo(index) {
        let letterFirsts = this.refs.list.querySelectorAll(".city-title-letter");
        this.refs.alleyscroll.scroll.scrollTo(0, -letterFirsts[index].offsetTop, 500)
    }
    handleloation(type) {
        let hottop = this.refs.hot.querySelectorAll(".hot");
        switch (type) {
            case 1:
                this.refs.alleyscroll.scroll.scrollTo(0, -hottop[0].offsetTop, 500)
                break;
            case 2:
                this.refs.alleyscroll.scroll.scrollTo(0, -hottop[1].offsetTop, 500)
        }
    }
}
