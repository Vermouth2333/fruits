import {FindAsyncAction,ToDesAsyncAction,ClearAction} from '../../../action/action_syy/actionCreator'
export const mapStateToProps = (state)=>({
        inputVal:state.des.inputVal,
        text:state.search.text
})
export const mapDispatchToProps = (dispatch)=>({
    handleBack(){    
        this.props.history.goBack();
        sessionStorage.clear()                    
        dispatch(ClearAction())                   
    },   
    handleChange(e){
        let val=e.target.value
        this.setState({
            val:val
        })
        sessionStorage.clear()                   
       dispatch(FindAsyncAction(val))                     
    },
    handleToDes(){             
        let val= this.state.val       
        let value=encodeURI(val)
        sessionStorage.clear()                    
        dispatch(ToDesAsyncAction(value))          
    }
})

