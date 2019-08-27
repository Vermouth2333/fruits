import {addNumber,subNumber,shopSelect} from '../../../actions/veractions/actionCreator'

export const mapStateToProps = (state) => ({
    cartsGoods:state.carts.cartsGoods,

})

export const mapDispatchToProps = (dispatch)=>({
    addNum(index){
        dispatch(addNumber(index))
    },
    subNum(index){
        dispatch(subNumber(index))
    },
    shopSelect(index){
        dispatch(shopSelect(index))
    }
})