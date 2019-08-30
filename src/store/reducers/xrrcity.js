import { handleActions } from "redux-actions";

const defaultState = {
    cities: [],
    cityHot: [],
    cityName: [],
    cityId: [],
    cityList: []

}

export default handleActions({
    CITY_DATA: (state, action) => {
        let goodsState = Object.assign({}, state);
        goodsState.cities = action.payload.data.cities;
        for (var i = 0; i < goodsState.cities.length; i++) {
            if (goodsState.cities[i].isHot) {
                goodsState.cityHot.push({ cityId: goodsState.cities[i].id, cityName: goodsState.cities[i].nm })
            }

        }

        for (var i = 0; i < goodsState.cities.length; i++) {
            var letterFirst = goodsState.cities[i].py.substr(0, 1).toUpperCase();
            if (isCityList(letterFirst)) {
                for (var j = 0; j < goodsState.cityList.length; j++) {
                    if (letterFirst == goodsState.cityList[j].index) {
                        goodsState.cityList[j].list.push({ cityId: goodsState.cities[i].id, cityName: goodsState.cities[i].nm })
                        break;
                    }
                }
            } else {
                goodsState.cityList.push({ index: letterFirst, list: [{ cityId: goodsState.cities[i].id, cityName: goodsState.cities[i].nm }] })
            }
        }


        function isCityList(letterFirst) {
            var bStop = false;
            for (var i = 0; i < goodsState.cityList.length; i++) {
                if (goodsState.cityList[i].index == letterFirst) {
                    bStop = true;
                    break;
                }
            }
            return bStop;
        }
        console.log(goodsState.cityList)



        goodsState.cityList.sort((item1, item2) => {
            if (item1.index > item2.index) {
                return 1;
            } else {
                return -1;
            }
        })
        return goodsState;
    },

}, defaultState)




