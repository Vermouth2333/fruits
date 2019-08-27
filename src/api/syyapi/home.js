// v3/ad/homepage?connect_id=og5u3t4hq9m49ajhjfgirq79o4&type=0&lonlat=116.25082%2C40.11613&ad_code=110114&tab_id=
import http from '../../utils/http'
// https://wap.fruitday.com/v3/search/get_hot_keyword
export const home_api=(connect_id="og5u3t4hq9m49ajhjfgirq79o4",type=0,lonlat="116.25082%2C40.11613",ad_code=110114,tab_id='')=>http.get('v3/ad/homepage?',{connect_id,type,lonlat,ad_code,tab_id})
// 搜索
export const search_api=()=>http.get('/v3/search/get_hot_keyword')
// https://wap.fruitday.com/v3/search/keyword?keyword=pingguo
export const find_api=(keyword)=>http.get('/v3/search/keyword',{keyword})
// 输入 关键字进行搜索
// https://wap.fruitday.com/v3/search/product?keyword=10%E7%B2%BD10%E5%91%B3&store_id_list=3&tms_region_type=1&page_size=50&curr_page=1
export const keys_api=(keyword,store_id_list=3,tms_region_type=1,page_size=50,curr_page=1)=>http.get('/v3/search/keyword',{keyword,store_id_list,tms_region_type,page_size,curr_page})
