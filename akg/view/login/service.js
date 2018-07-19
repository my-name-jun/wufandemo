var service = {
    interface: require('../../network/network'),

    
        
        
        gender_extract_select_data: function () {
            var deferred = Deferred();
            var that = this;

            deferred.resolve()
            return deferred.promise;
        },
        
        career_extract_select_data: function () {
            var deferred = Deferred();
            var that = this;

            deferred.resolve()
            return deferred.promise;
        },
        
        
        icIsLongValid_extract_select_data: function () {
            var deferred = Deferred();
            var that = this;

            deferred.resolve()
            return deferred.promise;
        },
        
        
        contact_address_userInfo_combine_address: function (province, city, district, detail) {
            var deferred = Deferred();
            var that = this;
            var result = province + "#" + city + "#" + district + "#" + detail;
            deferred.resolve(result);
            return deferred.promise;
        },
        contact_address_userInfo_getCityByProvice: function (proId, cities) {
            var deferred = Deferred();
            var that = this;
            var list = [];
            for (var i = 0; i < cities.length; i++) {
                var city = cities[i];
                if (city.id.substring(0, 2) == proId) {
                    list.push(city);
                }
            }
            deferred.resolve(list);
            return deferred.promise;
        },
        contact_address_userInfo_getDistrictByCity: function (cityId, districts) {
            var deferred = Deferred();
            var that = this;

            var list = [];
            for (var i = 0; i < districts.length; i++) {
                var district = districts[i];
                if (district.id.substring(0, 4) == cityId) {
                    list.push(district);
                }
            }
            deferred.resolve(list);
            return deferred.promise;
        },
        //GEN_services
};

module.exports = service;