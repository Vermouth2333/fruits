import {FindAsyncAction,ToDesAsyncAction} from '../../../action/action_syy/actionCreator'
export const mapStateToProps = (state)=>({
        inputVal:state.des.inputVal
})
export const mapDispatchToProps = (dispatch)=>({
    handleBack(){
        this.props.history.goBack()
        this.setState({
            val:''
        })
    },   
    handleChange(e){
        let val=e.target.value
        this.setState({
            val:val
        })      
       dispatch(FindAsyncAction(val))                     
    },
    handleToDes(){       
        let val= this.state.val       
        let value=encodeURI(val)              
        dispatch(ToDesAsyncAction(value))          
    }
})

