import 'antd-mobile/dist/antd-mobile.css';
import "./index.css";
import React, { Component,Fragment } from 'react';
import { Modal, Button, WingBlank, } from 'antd-mobile';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './connect';
const alert = Modal.alert;
class DeleteButton extends Component {
       // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Fragment>
                <WingBlank style={{height:"100%",width:"100%"}}>
                    <Button
                        onClick={() =>
                            alert('', '确认删除所选商品', [
                                { text: '取消', onPress: () => console.log('cancel') },
                                { text: '确认', onPress: () => {console.log('cancel');this.props.deleteShop()} },
                            ])
                        }
                    >
                        删除
                </Button>
                </WingBlank>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);