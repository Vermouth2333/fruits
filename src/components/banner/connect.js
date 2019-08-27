export const mapStateToProps = (state)=>({
    // state:state.home,
    list:state.home.list.data?state.home.list.data.banner.mainBanners:{}
    
})
export const mapDispatchToProps = (dispatch)=>({
   
})