export const mapStateToProps = (state)=>({
    // state:state.home,
    list:state.home.list.data?state.home.list.data.banner.mainBanners:{},
    
    // list_banner:state.details.list_banner,
})
export const mapDispatchToProps = (dispatch)=>({
   
})