import http from "@utils/http";

// typrlist
export const type_types = (store_id_list=3,class_id="")=>http.get("/v3/product/category_list",{store_id_list,class_id})

export const type_other_types = (store_id_list=3,class_id=0)=>http.get("/v3/product/category_list",{store_id_list,class_id})


export const list_kinds_types = (store_id_list=3,class2_id=30,class3_id,sort_type=1,tms_region_type=1)=>http.get("/v3/product/sub_category_list",{store_id_list,class2_id,class3_id,sort_type,tms_region_type})


export const detail_types = (store_id_list=3,product_id,store_id="",delivery_code=3,iswap=1)=>http.get("/product/detail",{store_id_list,product_id,store_id,delivery_code,iswap})

export const detail_talks = (product_id)=>http.get("/comment/rate_and_comment",{product_id})


export const talks_more = (product_id,curr_page=1,num_per_page=20,limit=20,show=1)=>http.get("/comment/list_by_product_id",{product_id,curr_page,num_per_page,limit,show})

export const talks_up = (product_id,curr_page=2,num_per_page=20,limit=20)=>http.get("/comment/list_by_product_id",{product_id,curr_page,num_per_page,limit})

export const city_list = ()=>http.get("/api/cityList")


