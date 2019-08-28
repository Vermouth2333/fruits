import {
    Home,
    Search,
    Type,
    Login,
    Mine,
    Carts,
    List,
    Des,
    Detail,
    City,
} from "@pages"

export  const tabBarRoute=[
    {
        path:'/home',
        component:Home,
        meta:{
            flag:true,
        },
        name:'首页',
        icon:"\ue502",
    },
   
    {
        path:'/type',
        component:Type,
        meta:{
            flag:true,
        },
        name:'分类',
        icon:"\ue513"
              
    },
    
    {
        path:'/carts',
        component:Carts,
        meta:{
            flag:true,
        },
        name:'购物车',
        icon:"\ue619",       
    },

    {
        path:'/mine',
        component:Mine,
        meta:{
            flag:true,
            auth:true,
        },
        name:'我的',
        icon:"\ue538",       
    },
   
    
]
export const noTabBarRoute=[
    {
        
        path:'/login',
        component:Login,
        meta:{
            flag:false,
        },
        name:'登录',
    },
    {
        path:'/search',
        component:Search,
        meta:{
            flag:false,
        },
        name:'搜索',
          
    },
    {
        path:'/list',
        component:List,
        meta:{
            flag:false,
            
        },
        name:'列表',
             
    },
    {
        path:'/des',
        component:Des,
        meta:{
            flag:false,        
        },
        name:'列表',             
    },
    {
        path:'/detail',
        component:Detail,
        meta:{
            flag:false,        
        },
        name:'详情',             
    },
    {
        path:'/city',
        component:City,
        meta:{
            flag:false,        
        },
        name:'城市列表',             
    },
]
export const routerConfig=tabBarRoute.concat(noTabBarRoute)