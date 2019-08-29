import {handleActions} from "redux-actions";

const defaultState = {
    //购物车数据id
    cartsGoods:[
        {flag: true,
            id: "34753",
            name: "甄选新西兰爱妃苹果 （礼盒装） 12个/单个16.5元",
            num: 1,
            pic: "https://imgjd5.fruitday.com/images/product_pic/34753/1/1-370x370-34753-H3FSD32A.jpg",
            price: "1",
            weight: "12个/单个16.5元"},
            {flag: true,
                id: "34753",
                name: "甄选新西兰爱妃苹果 （礼盒装） 12个/单个16.5元",
                num: 1,
                pic: "https://imgjd5.fruitday.com/images/product_pic/34753/1/1-370x370-34753-H3FSD32A.jpg",
                price: "2",
                weight: "12个/单个16.5元"},
                {flag: true,
                    id: "34753",
                    name: "甄选新西兰爱妃苹果 （礼盒装） 12个/单个16.5元",
                    num: 1,
                    pic: "https://imgjd5.fruitday.com/images/product_pic/34753/1/1-370x370-34753-H3FSD32A.jpg",
                    price: "3",
                    weight: "12个/单个16.5元"},
                    {flag: true,
                        id: "34753",
                        name: "甄选新西兰爱妃苹果 （礼盒装） 12个/单个16.5元",
                        num: 1,
                        pic: "https://imgjd5.fruitday.com/images/product_pic/34753/1/1-370x370-34753-H3FSD32A.jpg",
                        price: "4",
                        weight: "12个/单个16.5元"},
                        {flag: true,
                            id: "34753",
                            name: "甄选新西兰爱妃苹果 （礼盒装） 12个/单个16.5元",
                            num: 1,
                            pic: "https://imgjd5.fruitday.com/images/product_pic/34753/1/1-370x370-34753-H3FSD32A.jpg",
                            price: "5",
                            weight: "12个/单个16.5元"},
                            {flag: true,
                                id: "34753",
                                name: "甄选新西兰爱妃苹果 （礼盒装） 12个/单个16.5元",
                                num: 1,
                                pic: "https://imgjd5.fruitday.com/images/product_pic/34753/1/1-370x370-34753-H3FSD32A.jpg",
                                price: "6",
                                weight: "12个/单个16.5元"},
                                {flag: true,
                                    id: "34753",
                                    name: "甄选新西兰爱妃苹果 （礼盒装） 12个/单个16.5元",
                                    num: 1,
                                    pic: "https://imgjd5.fruitday.com/images/product_pic/34753/1/1-370x370-34753-H3FSD32A.jpg",
                                    price: "7",
                                    weight: "12个/单个16.5元"},
        
    ],
    allFlag:true,
    HeadFlag:true,
}

export default handleActions({
    //添加商品
    GOODS_CARTS:(state,action)=>{
        let goodsState = JSON.parse(JSON.stringify(state));
        goodsState.cartsGoods.push(action.payload);
        goodsState.HeadFlag=true;
        goodsState.allFlag=true;
        goodsState.cartsGoods.forEach((item,index)=>{
            item.flag=true;
        })
        return goodsState;
    },
    //商品+1
    ADD_NUMBER:(state,action)=>{
        let addNumState = JSON.parse(JSON.stringify(state));
        addNumState.cartsGoods[action.payload].num++;
        if(addNumState.HeadFlag===true){
            addNumState.cartsGoods[action.payload].flag=true;
        }
        return addNumState;
    },
    //商品-1
    SUB_NUMBER:(state,action)=>{
        let subNumState = JSON.parse(JSON.stringify(state));
        if(subNumState.cartsGoods[action.payload].num!==1){
            subNumState.cartsGoods[action.payload].num--;
            if(subNumState.HeadFlag===true){
                subNumState.cartsGoods[action.payload].flag=true;
            }
        }
        return subNumState;
    },
    //选择商品
    SHOP_SELECT:(state,action)=>{
        let shopSelectState = JSON.parse(JSON.stringify(state));
            let flagStatus = true;
            shopSelectState.cartsGoods[action.payload].flag=!shopSelectState.cartsGoods[action.payload].flag;
            shopSelectState.cartsGoods.forEach((item,index)=>{
                if(item.flag===false){
                    flagStatus = false;
                }
            })
            if(flagStatus){
                shopSelectState.allFlag=true;
            }else{
                shopSelectState.allFlag=false;
            }
        return shopSelectState;
    },
    //全选
    CHANGE_ALL_FLAG:(state,action)=>{
        let changeAllState = JSON.parse(JSON.stringify(state));
            changeAllState.allFlag=!changeAllState.allFlag;
            if(changeAllState.allFlag){
                changeAllState.cartsGoods.forEach((item,index)=>{
                    item.flag=true;
                })
            }else{
                changeAllState.cartsGoods.forEach((item,index)=>{
                    item.flag=false;
                })
            }
        return changeAllState;
    },
    //切换删除 结算
    CHANGE_HEADER_CENTER:(state,action)=>{
        let changeHeadState = JSON.parse(JSON.stringify(state));
            changeHeadState.HeadFlag=!changeHeadState.HeadFlag;
            if(!changeHeadState.HeadFlag){
                changeHeadState.allFlag=false;
                changeHeadState.cartsGoods.forEach((item,index)=>{
                    item.flag=false;
                })
            }else{
                changeHeadState.allFlag=true;
                changeHeadState.cartsGoods.forEach((item,index)=>{
                    item.flag=true;
                })
            }
            return changeHeadState;
    },
    //删除商品
    DELETE_SHOP:(state,action)=>{
        let deleteShopState = JSON.parse(JSON.stringify(state));
            for(let i = deleteShopState.cartsGoods.length - 1; i >= 0; i--)
            {
                if(deleteShopState.cartsGoods[i].flag===true){
                     deleteShopState.cartsGoods.splice(i,1);
                }
            }
            //方法2：
            // deleteShopState.cartsGoods.forEach((item,index)=>{
            //     if(item.flag===true){
            //         deleteShopState.cartsGoods.splice(index,1);
            //     }
            // })
            // deleteShopState.cartsGoods.forEach((item,index)=>{
            //     if(item.flag===true){
            //         deleteShopState.cartsGoods.splice(index,1);
            //     }
            // })
        return deleteShopState;
    },
    //删除所有商品  DELETE_ALL_SHOP
    DELETE_ALL_SHOP:(state,action)=>{
        let deleteAllShopState = JSON.parse(JSON.stringify(state));

            deleteAllShopState.cartsGoods.length=0;
            console.log(deleteAllShopState);
        return deleteAllShopState;
    }
},defaultState)