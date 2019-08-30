import {deleteShop} from '../../../actions/veractions/actionCreator'

export const mapStateToProps = (state,props) => ({

})

export const mapDispatchToProps = (dispatch)=>({
    deleteShop(){
        dispatch(deleteShop())
    }
})