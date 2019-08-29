import {showAddressToTrue} from '../../../actions/veractions/actionCreator'

export const mapStateToProps = (state) => ({
    addressListLength:state.address.addressList.length,
})

export const mapDispatchToProps = (dispatch)=>({
    toAddressMaskShow(){
        dispatch(showAddressToTrue())
    }
})