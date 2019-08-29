import {sendAsyncDataToCarts} from '../../../actions/xrractions/actionCreator'
export const mapStateToProps = (state)=>({
    // state:state.home,
    list:state.home.list.data?state.home.list.data.banner.mainBanners:{}
    
})
export const mapDispatchToProps = (dispatch)=>({
    handleToCarts(item,e){
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
        dispatch(sendAsyncDataToCarts(obj))
    }
})