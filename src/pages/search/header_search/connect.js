import {FindAsyncAction} from '../../../action/action_syy/actionCreator'
export const mapStateToProps = (state)=>({
        inputVal:state.des.inputVal
})
export const mapDispatchToProps = (dispatch)=>({
    handleBack(){
        this.props.history.goBack()        
    },   
    handleChange(e){
        let val=e.target.value
        this.setState({
            val:val
        })
       dispatch(FindAsyncAction(val))            
    }

})

