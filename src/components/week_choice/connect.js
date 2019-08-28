
import {HomeAsyncAction} from '../../action/action_syy/actionCreator'
import {sendAsyncDataToCarts} from '../../actions/xrractions/actionCreator'
export const mapStateToProps = (state)=>({
    // state:state.home,
    list:state.home.list.data?state.home.list.data.banner.mainBanners:{}
    
})
export const mapDispatchToProps = (dispatch)=>({
    handleHome(){
        dispatch(HomeAsyncAction())
         
    },
    handleToCart(item,e){
        e.stopPropagation();
        e.preventDefault();
        let obj={};
        obj.name=item.title;
        obj.id=item.target_id;
        obj.num=1;
        obj.flag=true;
        obj.pic=item.image;  
        obj.price=item.guide_price;
        obj.weight=item.volume;     
        console.log(item)
        dispatch(sendAsyncDataToCarts(obj))
    }
})