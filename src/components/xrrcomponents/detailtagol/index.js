import React, { Component } from 'react'
import { DetailTogalWrapper } from "./styled"
import "../iconfont/iconfont.css"
import { talks_more } from "@api/xrrapi"
import { withRouter } from "react-router-dom";
import BScrollComponent from "@common/bscroll";

const url = require("url");

class DetailTagol extends Component {
    constructor(props) {
        super(props);
        let path = this.props.location.search;
        let { product_id } = url.parse(path, true).query;
        console.log(this.props)

        this.state = {
            togal: 1,
            product_id: product_id,
            data: [],
            page:0,
        }
    }
    render() {
        let { togal, data } = this.state
       
        return (
            <DetailTogalWrapper>
                <div className="content">
                    <BScrollComponent ref="bscroll">
                        <div className="main">
                            <div id="good-comment-star">
                                <dl className="comment-level-item">
                                    <dt>
                                        <span>98%</span>
                                        <span>好评</span>
                                    </dt>
                                    <dd>
                                        <div>
                                            <span className="pull-left">口感</span>
                                            <img className="img1" src="./xing.png" alt="" />
                                            <img className="img1" src="./xing.png" alt="" />
                                            <img className="img1" src="./xing.png" alt="" />
                                            <img className="img1" src="./xing.png" alt="" />
                                            <img className="img1" src="./banxing.png" alt="" />
                                        </div>
                                        <div>
                                            <span className="pull-left">颜值</span>
                                            <img className="img1" src="./xing.png" alt="" />
                                            <img className="img1" src="./xing.png" alt="" />
                                            <img className="img1" src="./xing.png" alt="" />
                                            <img className="img1" src="./xing.png" alt="" />
                                            <img className="img1" src="./banxing.png" alt="" />
                                        </div>
                                    </dd>
                                </dl>
                                <div className="comment-tab-menu">
                                    <ul>
                                        <li className={togal === 1 ? "active" : ""} onClick={this.handleqiehuan.bind(this, 1)}>评价 982</li>
                                        <li className={togal === 2 ? "active" : ""} onClick={this.handleqiehuan.bind(this, 2)}>晒图 256</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="comment-tab-box">
                                <div className="tips">
                                    <i className="iconfont icon-duihao2">
                                    </i>只看有内容的评价
                            </div>

                                <ul>
                                    {

                                        data.map((item, index) => (
                                            <li key={index}>
                                                <div className="comment-info">
                                                    <img className="avatar" src={item.userface} alt="" />
                                                    <span className="user">{item.user_name}</span>
                                                    <i className="iconfont icon-v_mini6"></i>
                                                    <span className="date">{item.time}</span>
                                                </div>
                                                <div className="comment-level">
                                                    <span>口感 {item.star_eat}</span>
                                                    <span>颜值 {item.star_show}</span>
                                                </div>
                                                <div className="comment-msg">{item.content}</div>
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </BScrollComponent>
                </div>
            </DetailTogalWrapper>
        )
    }
    handleqiehuan(type) {
        this.setState({
            togal: type,
        })
    }
    componentWillUpdate(){
        this.refs.bscroll.handleRestpullingUp();
    }
    componentDidMount() {
        this.handleMore();
        this.refs.bscroll.handlepullingUp(() => {
            this.handleMore();

        })
    }
    async handleMore() {
        let data = await talks_more(this.state.product_id, this.state.page, 20, 20, 1);
        if (data) {
            this.setState({
                data:[...this.state.data,...data.data],
                page:++this.state.page
            })

        }
    }
    componentWillUnmount() {
        // 卸载异步操作设置状态
        this.setState = () => {
            return;
        }
    }
}
export default withRouter(DetailTagol)