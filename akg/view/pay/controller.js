var commonService = require('../../lib/commonService');
var service = require('./service');


var career_dic_array = require('../../lib/dic/careers');

var contact_address_userInfo_dic_provinces = require("../../lib/dic/provinces");
var contact_address_userInfo_dic_cities = require("../../lib/dic/cities");
var contact_address_userInfo_dic_districts = require("../../lib/dic/districts");

//GEN_dependences

var vm = avalon.define({
    $id: "vm",
    name: '',
    mobile: '',
    gender: '',
    address: '123123',


    career_candidate_select_array: career_dic_array,
    career_selected_item: '',


    contact_address_userInfo_candidate_provinces: contact_address_userInfo_dic_provinces,
    contact_address_userInfo_candidate_cities: [],
    contact_address_userInfo_candidate_districts: [],
    contact_address_userInfo_selected_province: "",
    contact_address_userInfo_selected_city: "",
    contact_address_userInfo_selected_district: "",
    contact_address_userInfo_selected_detail: "",



    anyFuncti: function () {
        var that = this;
        var data = {
            name: that.name,
            mobile: that.mobile,
            gender: that.gender,
            address: that.address,
            contact_address_userInfo_dic_provinces:that.contact_address_userInfo_candidate_provinces,

        };
        service.postToServer(data);
    },





    //region 数据监听
    bindListeners: function () {

        $("#career_select").change(function () {
           var value = $(this).val();
        });

        $("#contact_address_userInfo_province").change(function () {
            var that = vm;
            var value = $(this).val();
            service
                .contact_address_userInfo_getCityByProvice(value, contact_address_userInfo_dic_cities)
                .then(function (cities) {
                    that.contact_address_userInfo_candidate_cities = cities;
                });
        });
        $("#contact_address_userInfo_city").change(function () {
            var that = vm;
            var value = $(this).val();
            service
                .contact_address_userInfo_getDistrictByCity(value, contact_address_userInfo_dic_districts)
                .then(function (districts) {
                    that.contact_address_userInfo_candidate_districts = districts;
                });
        });
        $("#contact_address_userInfo_district").change(function () {
            var that = vm;
            var value = $(this).val();
        });
        $("#contact_address_userInfo_detail").change(function () {
            var value = $(this).val();
        });
        //GEN_listeners

    }

});



vm.bindListeners();

















// $('#mobile_input').change(function () {
//     var mo = $('#mobile_input').val().length;
//     if (mo<=11){alert(mo)}
//
// })
//
// $('#submit').click( function () {
//     var name = $('#name_input').val();
//     var mobile = $('#mobile_input').val();
//     var sex = $('#gender_select').val();
//     var data={
//         name:name,
//         mobile:mobile,
//         sex:sex,
//     }
//     network.post('data',data);
// });


//GEN_run
