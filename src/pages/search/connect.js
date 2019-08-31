import {FindAsyncAction,ToDesAsyncAction} from '../../action/action_syy/actionCreator'
export const mapStateToProps = (state)=>({
        flag1:state.des.flag,
        flag:state.search.flag,
        arr_f:state.search.list,        
})
export const mapDispatchToProps = (dispatch)=>({
    handleFind(val){
        dispatch(FindAsyncAction(val))          
    },
    handleToDes(item){
        let value=encodeURI(item)
        dispatch(ToDesAsyncAction(value))
        
    }

})