import {showAddressToTrue} from '../../../actions/veractions/actionCreator'

export const mapStateToProps = (state) => ({
    addressListLength:state.address.addressList.length,
    name:state.address.showName,
    phone:state.address.shoPhone,
    address:state.address.showAddres,
    homeOrCompany:state.address.showHomeOrCompany,
})

export const mapDispatchToProps = (dispatch)=>({
    toAddressMaskShow(){
        dispatch(showAddressToTrue())
    }
})