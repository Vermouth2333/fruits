export const mapStateToProps = (state,props) => ({
    cartsGoods:state.carts.cartsGoods,
})

export const mapDispatchToProps = (dispatch)=>({
    totalNum(arr){
        let sum = 0;
        arr.forEach((item,index)=>{
            if(item.flag){
                sum +=item.num;
            }else{
                sum+=0;
            }
        })
        return sum;
    }

})