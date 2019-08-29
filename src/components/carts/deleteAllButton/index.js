import 'antd-mobile/dist/antd-mobile.css';
import "./index.css"
import React, { Component,Fragment } from 'react'
import { Modal, Button, WingBlank, } from 'antd-mobile';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
const alert = Modal.alert;
class DeleteAllButton extends Component {
       // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Fragment>
            <div id='delete_all_button'>
                <WingBlank style={{height:"100%",width:"100%"}}>
                    <Button style={{backgroundColor:"#fff",fontSize: ".12rem",}}
                        onClick={() =>
                            alert('', '确认删除所有商品', [
                                { text: '取消', onPress: () => console.log('cancel') },
                                { text: '确认', onPress: () => {console.log('cancel');this.props.deleteAllShop()} },
                            ])
                        }
                    >
                        清空购物车
                </Button>
                </WingBlank>
                </div>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAllButton);