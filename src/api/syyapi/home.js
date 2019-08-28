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