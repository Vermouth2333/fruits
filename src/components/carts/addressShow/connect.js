import {showAddressToFalse,selectThisMain,updateThisMain} from '../../../actions/veractions/actionCreator'

export const mapStateToProps = (state,props) => ({
    showAddress:state.address.showAddress,
    addressList:state.address.addressList,

})

export const mapDispatchToProps = (dispatch)=>({
    addressHidden(){
        dispatch(showAddressToFalse());
    },
    //阻止冒泡
    stopmp(e){
        e.stopPropagation();
        e.preventDefault();
    },

    selectThisMain(index){
        dispatch(selectThisMain(index));
    },
    updateThisMain(index,e){
        // e.stopPropagation();
        // e.preventDefault();
        dispatch(updateThisMain(index));
    }
})