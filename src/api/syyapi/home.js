import http from '../../utils/http'
export const home_api=(connect_id="og5u3t4hq9m49ajhjfgirq79o4",type=0,lonlat="116.25082%2C40.11613",ad_code=110114,tab_id='')=>http.get('v3/ad/homepage?',{connect_id,type,lonlat,ad_code,tab_id})
// 搜索
export const search_api=()=>http.get('/v3/search/get_hot_keyword')
// 点击列表
export const find_api=(keyword)=>http.get('/v3/search/keyword',{keyword})
// 输入 关键字进行搜索
export const keys_api=(keyword,store_id_list,tms_region_type,page_size,curr_page)=>http.get('/v3/search/product',{keyword,store_id_list,tms_region_type,page_size,curr_page})
// 详情页
export const Detail_api=(store_id_list=3,product_id,store_id,delivery_code=3,iswap=1)=>http.get('/v3/search/product/detail',{store_id_list,product_id,store_id,delivery_code,iswap})
//城市列表
export const city_api = ()=>http.get("/api/cityList")
// https://wap.fruitday.com//v3/region/site_list

// 上拉加载https://wap.fruitday.com/v3/product/sub_category_list?store_id_list=3&class2_id=130&class3_id=131&sort_type=1&tms_region_type=1
export const update_api = ()=>http.get("v3/product/sub_category_list?store_id_list=3&class2_id=130&class3_id=131&sort_type=1&tms_region_type=1")
// 下拉刷新https://wap.fruitday.com/v3/search/product?keyword=%E7%93%9C&store_id_list=3&tms_region_type=1&page_size=50&curr_page=1
export const down_api = ()=>http.get("v3/search/product?keyword=%E7%93%9C&store_id_list=3&tms_region_type=1&page_size=50&curr_page=1")

// 详情列表的https://wap.fruitday.com//v3/product/detail?store_id_list=3&product_id=35692&store_id=&delivery_code=3&iswap=1
export const Details_api = (store_id_list=3,product_id,store_id='',delivery_code=3,iswap=1)=>http.get("/product/detail",{store_id_list,product_id,store_id,delivery_code,iswap})
// 评论https://wap.fruitday.com//v3/comment/rate_and_comment?product_id=22815
export const comment_api = (product_id)=>http.get("comment/rate_and_comment",{product_id})