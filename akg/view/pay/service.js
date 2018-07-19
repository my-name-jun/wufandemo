var service = {
    interface: require('../../network/network'),

    postToServer: function (data) {
        var that = this;
        this.interface.post('tt', data);

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