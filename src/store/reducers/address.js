import {handleActions} from "redux-actions";

const defaultState = {
    addressList:[],
    showAddress:false,
    name:"",
    phone:"",
    address:"",
    homeOrCompany:"其他",
    showName:"",
    shoPhone:"",
    showAddres:"",
    showHomeOrCompany:"其他",
    displayRouter:false,
}
var inx ;
export default handleActions({
   
    //显示地址
    SHOW_ADDRESS:(state,action)=>{
        let showAddressState = JSON.parse(JSON.stringify(state));
            showAddressState.showAddress=true;
        return showAddressState;
    },
    //隐藏地址
    HIDE_ADDRESS:(state,action)=>{
        let hideAddressState = JSON.parse(JSON.stringify(state));
        hideAddressState.showAddress=false;
        return hideAddressState;
    },
    //input输入框值改变
    CHANGE_ADDRESS_INPUT:(state,action)=>{
        let changeAddressState = JSON.parse(JSON.stringify(state));
            switch (action.payload.inputType) {
                case 1:
                    changeAddressState.name=action.payload.val
                    break;
                case 2:
                    changeAddressState.phone=action.payload.val
                    break;
                case 3:
                    changeAddressState.address=action.payload.val
                    break;
                case 4:
                    changeAddressState.homeOrCompany=action.payload.val
                    break;
                default:
                    break;
            }
            //判断输入的类型   控制返回的信息是否正确
            let phoneReg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
            if(!phoneReg.test(changeAddressState.phone)){
                changeAddressState.displayRouter=false;
            }else if(changeAddressState.address===""){
                changeAddressState.displayRouter=false;
            }else if(changeAddressState.name===""){
                changeAddressState.displayRouter=false;
            }else{
                changeAddressState.displayRouter=true;
                changeAddressState.showAddress=false;
            }
        return changeAddressState;
    },
    //添加地址数据
    ADD_ADDRESS_DATA:(state,action)=>{
        let addAddressState = JSON.parse(JSON.stringify(state));
            //将新添加地址之前的所有地址被选中设置为false
            addAddressState.addressList.forEach((item,index)=>{
                item.checked=false;
            })
            let obj={};
                obj.name=addAddressState.name;
                obj.phone=addAddressState.phone;
                obj.address=addAddressState.address;
                obj.homeOrCompany=addAddressState.homeOrCompany;
                obj.checked=true;
            addAddressState.addressList.push(obj);
            console.log(addAddressState.addressList)

            //显示在list
            addAddressState.showName=addAddressState.name;
            addAddressState.shoPhone=addAddressState.phone;
            addAddressState.showAddres=addAddressState.address;
            addAddressState.showHomeOrCompany=addAddressState.homeOrCompany;

            //清空输入栏数据
            addAddressState.name="";
            addAddressState.phone="";
            addAddressState.address="";
            addAddressState.homeOrCompany="其他";
        return addAddressState;
    },
    //选择
    SELECT_THIS_MAIN:(state,action)=>{
        let selectThisMainState = JSON.parse(JSON.stringify(state));
            //改变每项的状态
            selectThisMainState.addressList.forEach((item,index)=>{
                item.checked=false;
            })
            selectThisMainState.addressList[action.payload].checked=true;
            //改变shop的值
            selectThisMainState.showName=selectThisMainState.addressList[action.payload].name;
            selectThisMainState.shoPhone=selectThisMainState.addressList[action.payload].phone;
            selectThisMainState.showAddres=selectThisMainState.addressList[action.payload].address;
            selectThisMainState.showHomeOrCompany=selectThisMainState.addressList[action.payload].homeOrCompany;
            //隐藏地址栏
            selectThisMainState.showAddress=false;

        return selectThisMainState;
    },

    UPDATE_THIS_MAIN:(state,action)=>{
        let updateThisMainState = JSON.parse(JSON.stringify(state));
        inx=action.payload;
        updateThisMainState.name=updateThisMainState.addressList[action.payload].name;
        updateThisMainState.phone=updateThisMainState.addressList[action.payload].phone;
        updateThisMainState.address=updateThisMainState.addressList[action.payload].address;
        updateThisMainState.homeOrCompany=updateThisMainState.addressList[action.payload].homeOrCompany;
        return updateThisMainState;
    },
    REPLACE_ADDRESS_DATA:(state,action)=>{
        let replaceAddressState = JSON.parse(JSON.stringify(state));
            //将新添加地址之前的所有地址被选中设置为false
            replaceAddressState.addressList.forEach((item,index)=>{
                item.checked=false;
            })
            let obj={};
                obj.name=replaceAddressState.name;
                obj.phone=replaceAddressState.phone;
                obj.address=replaceAddressState.address;
                obj.homeOrCompany=replaceAddressState.homeOrCompany;
                obj.checked=true;
                replaceAddressState.addressList.splice(inx,1,obj);

            //显示在list
            replaceAddressState.showName=replaceAddressState.name;
            replaceAddressState.shoPhone=replaceAddressState.phone;
            replaceAddressState.showAddres=replaceAddressState.address;
            replaceAddressState.showHomeOrCompany=replaceAddressState.homeOrCompany;

            //清空输入栏数据
            replaceAddressState.name="";
            replaceAddressState.phone="";
            replaceAddressState.address="";
            replaceAddressState.homeOrCompany="其他";
        return replaceAddressState;
    },
    DELETE_ADDRESS_DATA:(state,action)=>{
        //删除 所选
        let deleteAddressState = JSON.parse(JSON.stringify(state));
        deleteAddressState.addressList.splice(inx,1);
        console.log(deleteAddressState.addressList);
        //显示在list
        deleteAddressState.showName=deleteAddressState.addressList[0].name;
        deleteAddressState.shoPhone=deleteAddressState.addressList[0].phone;
        deleteAddressState.showAddres=deleteAddressState.addressList[0].address;
        deleteAddressState.showHomeOrCompany=deleteAddressState.addressList[0].homeOrCompany;
        deleteAddressState.displayRouter=false;
        return deleteAddressState;
    }
},defaultState)