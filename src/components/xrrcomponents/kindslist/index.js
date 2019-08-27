import React, { Component } from 'react'
import { KindsWrapper } from "./styled"
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { type_types,type_other_types } from "@api/xrrapi"
import { mapStateToProps, mapDispatchToProps } from "./connect";
import BScrollComponent from "@common/bscroll";
class Kinds extends Component {
    constructor() {
        super();
        this.state = {
            kindslist: [],
            activeindex: '',
            fruitslist: [],
            class2Nam: {},
            store_id_list:"3",
        }
    }
    render() {
        let { kindslist, activeindex, fruitslist, class2Nam } = this.state;
        return (
            <KindsWrapper>
                <ul className="leftlink">
                    {
                        kindslist.map((item, index) => (

                            <li key={index}
                                onClick={this.handleListClick.bind(this, index,item.id)}
                                className={activeindex == index ? "leftlink_child active" : "leftlink_child"}
                            >
                                {item.name}
                            </li>

                        ))
                    }
                </ul>
                <BScrollComponent >
                    <div className="item">
                        <h3>{class2Nam.name}</h3>
                        <Link to={"/list?class2_id="+class2Nam.id}>全部
                        <i className="iconfont icon-youjiantou"></i>
                        </Link>

                        {
                            fruitslist.map((item, index) => (
                                <dl key={index}>
                                <Link to={"/list?class2_id="+class2Nam.id+"&class3_id="+item.id}>                                      <dt>
                                            <img src={item.class_photo} alt="" />
                                        </dt>
                                        <dd>{item.name}</dd>
                                </Link>
                                </dl>

                            ))
                        }
                    </div>
                </BScrollComponent>
            </KindsWrapper>
        )
    }
    componentDidMount() {
            this.handleKindsGetData();
    }
    async handleKindsGetData() {
        let data = await type_types();
        this.setState({
            kindslist: data.data.classOneGroup,
            fruitslist: data.data.childrenList[0].class3Group,
            class2Nam: data.data.childrenList[0].class2Name
        })

    }
    handleListClick(index,id){
        this.setState({
            activeindex:index,
        })
        this.handleKindsOtherGetData(id);
    }

    async handleKindsOtherGetData(id) {
        let data = await type_other_types(this.state.store_id_list,id);
        this.setState({
            kindslist: data.data.classOneGroup,
            fruitslist: data.data.childrenList[0].class3Group,
            class2Nam: data.data.childrenList[0].class2Name
        })


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Kinds)