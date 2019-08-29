import {deleteAllShop} from '../../../actions/veractions/actionCreator'

export const mapStateToProps = (state,props) => ({

})

export const mapDispatchToProps = (dispatch)=>({
    deleteAllShop(){
        dispatch(deleteAllShop())
    }
})