import {handleActions} from "redux-actions";

const defaultState = {
    addressList:[1,2,314,5,6,9],
    showAddress:false,
}

export default handleActions({
    SHOW_ADDRESS:(state,action)=>{
        let showAddressState = JSON.parse(JSON.stringify(state));
            showAddressState.showAddress=true;
        return showAddressState;
    },
    HIDE_ADDRESS:(state,action)=>{
        let hideAddressState = JSON.parse(JSON.stringify(state));
        hideAddressState.showAddress=false;
        return hideAddressState;
    },
},defaultState)