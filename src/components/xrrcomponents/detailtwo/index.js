import React, { Component } from 'react'
import { DetailTwoWrapper } from "./styled"

export default class DetailTwo extends Component {
    constructor() {
        super();
        this.state = {
            text: [
                ["产地", "新西兰"], ["品牌", "佳沛"], ["储藏方法", "0度及以上冷藏"], ["单重", "140g-160g"]
            ],
            img: [
                "https://imgjd7.fruitday.com/up_images/20180419/15241331539957.jpg",
                "https://imgjd7.fruitday.com/up_images/20180419/15241331545345.jpg",
                "https://imgjd7.fruitday.com/up_images/20180419/1524133155674.jpg",
                "https://imgjd7.fruitday.com/up_images/20180419/15241331564085.jpg",
                "https://imgjd7.fruitday.com/up_images/20180419/15241331576079.jpg",
                "https://imgjd7.fruitday.com/up_images/20180419/15241331584470.jpg",
                "https://imgjd3.fruitday.com/up_images/20190513/15577409936220.jpg",
                "https://imgjd3.fruitday.com/up_images/20190513/155774099777.jpg"
            ]
        }
    }
    render() {
        let { img, text } = this.state
        return (
            <DetailTwoWrapper>
                <div className="content">
                    <div className="main">
                        <div className="app-detail">
                            温馨提示：活动商品不支持使用积分和优惠券~
                <div className="dynamic-prop-table">
                                {
                                    text.map((item, index) => (
                                        <dl key={index}>
                                            <dt>{item[0]}</dt>
                                            <dd>{item[1]}</dd>
                                        </dl>

                                    ))
                                }
                            </div>
                            {
                                img.map((item, index) => (
                                    <img src={item} key={index} />

                                ))
                            }
                        </div>
                    </div>
                </div>
            </DetailTwoWrapper>
        )
    }
}
