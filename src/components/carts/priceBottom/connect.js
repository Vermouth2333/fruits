import {changeAll,deleteShop} from '../../../actions/veractions/actionCreator'

export const mapStateToProps = (state,props) => ({
    cartsGoods:state.carts.cartsGoods,
    allFlag:state.carts.allFlag,
    HeadFlag:state.carts.HeadFlag,
})

export const mapDispatchToProps = (dispatch)=>({
    totalPrice(arr){
        let sum = 0;
        arr.forEach((item,index)=>{
            if(item.flag){
                sum += Math.round(parseFloat(item.price)*100)*item.num;
            }else{
                sum+=0;
            }
        })
        return sum;
    },
    totalNum(arr){
        let sum = 0;
        arr.forEach((item,index)=>{
            if(item.flag){
                sum +=item.num;
            }else{
                sum+=0;
            }
        })
        return sum;
    },
    changeAllFlag(){
        dispatch(changeAll())
    },
    deleteShop(){
        dispatch(deleteShop())
    }
})