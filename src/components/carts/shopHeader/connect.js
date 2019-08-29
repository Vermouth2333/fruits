import {changeHeaderCenter} from '../../../actions/veractions/actionCreator'

export const mapStateToProps = (state,props) => ({
    HeadFlag:state.carts.HeadFlag
})

export const mapDispatchToProps = (dispatch)=>({
    changeHeaderCenter(){
        dispatch(changeHeaderCenter())
    }
})