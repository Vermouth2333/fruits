
import {FindAsyncAction} from '../../action/action_syy/actionCreator'
export const mapStateToProps = (state)=>({
        flag:state.search.flag,
        arr_f:state.search.list
})


export const mapDispatchToProps = (dispatch)=>({
    handleFind(val){
        dispatch(FindAsyncAction(val))  
         
    }

})