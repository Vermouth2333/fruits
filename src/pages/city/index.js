import React, { Component } from 'react'
import BScrollComponent from "@common/bscroll";
// import { CityWrapper } from './styled'
import './index.css'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './connect'
class City extends Component {
    render() {
        let { cityHot, cityList } = this.props
        console.log(cityHot)
        return(
            <BScrollComponent ref="bscroll">
                <div className="hot_city">
                    <div className="hot_title">热门城市</div>
                    <div className="hot_city_list">
                        {
                            cityHot.map((item, index) => (
                                <div className="hot_city_name" key={index}>
                                    {item.nm}北京
                                    </div>
                            ))
                        }
                    </div>
                </div>
                <div className="city_list" ref="list">
                    <div className="city_list_item" >
                        <div className="city_title_letter">A</div>
                        <div className="city_list_name">
                        {
                            cityList.map((item,index)=>(
                                <div className="city_list_name_item" key={index}>{item.nm}</div>
                            ))
                        }
                            
                        </div>
                    </div>
                </div>
                <div className="city_list_index">
                    <div className="index_item">A</div>
                </div >
            </BScrollComponent >
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(City)