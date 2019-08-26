import http from "@utils/http";

// typrlist
export const type_types = (store_id_list=3,class_id="")=>http.get("/v3/product/category_list",{store_id_list,class_id})

export const type_other_types = (store_id_list=3,class_id=0)=>http.get("/v3/product/category_list",{store_id_list,class_id})



