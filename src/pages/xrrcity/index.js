import React, { Component } from 'react'
import { CityWrapper } from "./styled"
import store from "@store"
import {cityAsyncData} from "@actions/xrractions/actionCreator.js"
export default class XrrCity extends Component {
    render() {
        return (
            <CityWrapper>
                <section>
                    <div id="locate" className="city-title">
                        定位城市
                    </div>
                    <div className="city-list city-list-inline clearfix">
                        <div className="location-city">定位失败，请点击重试</div>
                    </div>
                </section>
                <section>
                    <div id="hot" className="city-title">
                        热门城市
  </div>
                    <div className="city-list city-list-inline clearfix">

                        <div className="city-item" data-nm="上海" data-id="10">
                            上海
      </div>

                        <div className="city-item" data-nm="北京" data-id="1">
                            北京
      </div>

                        <div class="city-item" data-nm="广州" data-id="20">
                            广州
      </div>

                        <div class="city-item" data-nm="深圳" data-id="30">
                            深圳
      </div>

                        <div class="city-item" data-nm="武汉" data-id="57">
                            武汉
      </div>

                        <div class="city-item" data-nm="天津" data-id="40">
                            天津
      </div>

                        <div class="city-item" data-nm="西安" data-id="42">
                            西安
      </div>

                        <div class="city-item" data-nm="南京" data-id="55">
                            南京
      </div>

                        <div class="city-item" data-nm="杭州" data-id="50">
                            杭州
      </div>

                        <div class="city-item" data-nm="成都" data-id="59">
                            成都
      </div>

                        <div class="city-item" data-nm="重庆" data-id="45">
                            重庆
      </div>

                    </div>
                </section>

                <section>

                    <div id="A" className="city-title city-title-letter">
                        A
    </div>
                    <div className="city-list city-list-block clearfix">


                        <div className="city-item1" data-nm="阿拉善盟" data-id="150">
                            阿拉善盟
        </div>



                        <div class="city-item1" data-nm="鞍山" data-id="151">
                            鞍山
        </div>



                        <div class="city-item1" data-nm="安庆" data-id="197">
                            安庆
        </div>



                    </div>


                </section>
            </CityWrapper>
        )
    }
    componentDidMount(){
        store.dispatch(cityAsyncData())
    }
}
