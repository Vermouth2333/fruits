import http from "@utils/http";

//个人信息      https://wap.fruitday.com/v3/user/detail?connect_id=iq7rnir28529uc9i4obl64idv1
export const person_information = (connect_id="iq7rnir28529uc9i4obl64idv1")=>http.get("/v3/user/detail",{connect_id});