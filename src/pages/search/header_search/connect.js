import {FindAsyncAction} from '../../../action/action_syy/actionCreator'
export const mapStateToProps = (state)=>({
        
})
export const mapDispatchToProps = (dispatch)=>({
    handleBack(){
        this.props.history.goBack()        
    },
    
    handleChange(e){
        let val=e.target.value
       dispatch(FindAsyncAction(val))            
    }

})

