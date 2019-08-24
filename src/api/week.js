import http from "@utils/http";

//week_choice
export const week_choice = (city_id=140,page=0)=>http.get("/hub/home/v1/web/week_choice.json",{city_id,page}) 