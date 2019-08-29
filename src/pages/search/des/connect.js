import {sendAsyncDataToCarts} from '../../../actions/xrractions/actionCreator'
import {DetailsAsyncAction,DetailsAction} from '../../../action/action_syy/actionCreator'
export const mapStateToProps = (state)=>({      
        list:state.des.list
})

export const mapDispatchToProps = (dispatch)=>({     
        handleToCars(item,e){
                e.stopPropagation();
                e.preventDefault();
                let obj={};
                obj.name=item.product_name;
                obj.id=item.id;
                obj.num=1;
                obj.flag=true;
                obj.pic=item.photo;  
                obj.price=item.price;
                obj.weight=item.volume;     
                console.log(item)
                dispatch(sendAsyncDataToCarts(obj))
            },
            handleToDetails(id){
                dispatch(DetailsAsyncAction(id))
            }
})