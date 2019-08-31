import {changeAddressInput,replaceAddressData,deletesAddressData} from "../../../actions/veractions/actionCreator"

export const mapStateToProps = (state) =>({
    name:state.address.name,
    phone:state.address.phone,
    address:state.address.address,
    homeOrCompany:state.address.homeOrCompany,
    displayRouter:state.address.displayRouter,
})

export const mapDispatchToProps = (dispatch) =>({
    changeAddressInput(inputType,e){
        dispatch(changeAddressInput(e.target.value,inputType));
    },
    replaceAddressData(name,phone,address){
        let phoneReg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        if(!phoneReg.test(phone)){
            alert("请输入正确的手机号");
        }else if(address===""){
            alert("请填写详细信息");
        }else if(name===""){
            alert("请输入收货人姓名");
        }else{
            dispatch(replaceAddressData());
        }
    },
    deleteAddressData(){
        dispatch(deletesAddressData());
    }
})
