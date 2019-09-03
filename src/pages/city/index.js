import React, { Component } from 'react'
import BScrollComponent from "@common/bscroll";
// import { CityWrapper } from './styled'
import './index.css'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './connect'
import { city_api } from '../../api/syyapi/home';
class City extends Component {
    constructor() {
        super()
        this.state = {
            listHot: [],
            cityList: [],
        }
    }
    render() {
        // let { listHot, cityList } = this.props
        let { listHot, cityList } = this.state
        return (
            <div className="city_body" >
                <BScrollComponent ref="bscroll">
                   <div className="syy">
                        <div className="hot_city">
                            <div className="hot_title">热门城市</div>
                            <div className="hot_city_list">
                                {
                                    listHot.map((item, index) => (
                                        <div className="hot_city_name" key={index}>
                                            {item.nm}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="city_list" ref="list">
                            {cityList.map((item, index) => (
                                <div className="city_list_item" key={index}>
                                    <div className="city_title_letter" >{item.index}</div>
                                    {item.list.map((itm, idx) => (
                                        <div className="city_list_name" key={idx} >
                                            <div className="city_list_name_item" >{itm.cityName}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        </div>                                    
                    </BScrollComponent >
                    <div className="city_list_index">
                    {cityList.map((item, index) => (
                        <div className="index_item" key={index} onClick={this.handleSlide.bind(this, index)}>{item.index}</div>
                    ))}
                </div >                
            </div>
        )
    }
    componentDidMount() {
        this.handleGetData()
        if(sessionStorage.getItem("cityHot")){
            this.setState({
                listHot:JSON.parse(sessionStorage.getItem("cityHot"))
            })           
        }
        if(sessionStorage.getItem("cityList")){
            this.setState({
                cityList:JSON.parse(sessionStorage.getItem("cityList"))
            })
          }        
}
    async handleGetData() {
        let data = await city_api();
        let listH = [];
        let cityList = [];
        // 热门城市
        for (let i = 0; i < data.data.cities.length; i++) {
            if (data.data.cities[i].isHot) {
                listH.push(data.data.cities[i])
                this.setState({
                    listHot: listH
                })
            }

        }
        // 城市列表
        for (let i = 0; i < data.data.cities.length; i++) {
            let letterFirst = data.data.cities[i].py.substr(0, 1).toUpperCase()
            if (this.isCityList(letterFirst)) {
                // console.log(11)
                for (var k = 0; k < cityList.length; k++) {

                    if (letterFirst === cityList[k].index) {
                        cityList[k].list.push({ cityName: data.data.cities[i].nm });

                        break;
                    }
                }
            } else {
                cityList.push({ index: letterFirst, list: [{ cityName: data.data.cities[i].nm }] })
            }
            //排序
            cityList.sort((item1, item2) => {
                if (item1.index > item2.index) {
                    return 1;
                } else {
                    return -1;
                }
            })

            this.setState({
                cityList: cityList
            })
        }
        // console.log(cityList)
        sessionStorage.setItem("cityList", JSON.stringify(cityList))
        sessionStorage.setItem("cityHot", JSON.stringify(listH))
    }

    //判断当前标识是否在cityList当中
    isCityList(letterFirst) {
        var bStop = false;
        for (var i = 0; i < this.state.cityList.length; i++) {
            if (this.state.cityList[i].index === letterFirst) {
                bStop = true;
                break;
            }
        }
        return bStop;//存在为true 不存在未false
    }
    // 滑动
    handleSlide(index) {
        let letterFirsts = this.refs.list.querySelectorAll(".city_title_letter");
       console.log(this.refs.bscroll.scroll)
        this.refs.bscroll.scroll.scrollTo(0, -letterFirsts[index].offsetTop, 500)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(City)
