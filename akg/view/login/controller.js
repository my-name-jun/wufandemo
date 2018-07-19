var commonService = require('../../lib/commonService');
var service = require('./service');


var gender_dic_radio_array = require('../../lib/dic/genders');

var career_dic_array = require('../../lib/dic/careers');


var icIsLongValid_dic_radio_array = require('../../lib/dic/genders');


var contact_address_userInfo_dic_provinces = require("../../lib/dic/provinces");
var contact_address_userInfo_dic_cities = require("../../lib/dic/cities");
var contact_address_userInfo_dic_districts = require("../../lib/dic/districts")
//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据


    name_input: "",

    mobile_input: "",

    gender_radio_candidate_array: gender_dic_radio_array,
    gender_radio_selected_value: '',

    career_candidate_select_array: career_dic_array,
    career_selected_item: '',

    birthday_startDate: '1900-01-01',
    birthday_endDate: '2999-01-01',
    birthday_selectedDate: '1980-01-01',

    icIsLongValid_radio_candidate_array: icIsLongValid_dic_radio_array,
    icIsLongValid_radio_selected_value: '',

    icExpiryDay_startDate: '1900-01-01',
    icExpiryDay_endDate: '2999-01-01',
    icExpiryDay_selectedDate: '1980-01-01',

    contact_address_userInfo_candidate_provinces: contact_address_userInfo_dic_provinces,
    contact_address_userInfo_candidate_cities: [],
    contact_address_userInfo_candidate_districts: [],
    contact_address_userInfo_selected_province: "",
    contact_address_userInfo_selected_city: "",
    contact_address_userInfo_selected_district: "",
    contact_address_userInfo_selected_detail: "",
    //GEN_properties

    //endregion

    //region 主要数据

    //endregion 主要数据

    //region 主逻辑

    //endregion 主逻辑

    //region 组件逻辑


    birthday_date_init: function ($, startDate, endDate) {
        var deferred = Deferred();
        var that = this;
        $('#birthday_dateTimePicker').datetimepicker({//员工本人生日范围
            autoclose: true,
            format: 'yyyy-mm-dd',
            startView: 4,
            language: 'zh-CN',
            minView: 2,
            startDate: startDate,//最大的年龄
            endDate: endDate //最小的年龄
        }).on('hide', function (ev) {
            $('#birthday_dateTimePicker').blur();
        });
        deferred.resolve()
        return deferred.promise;
    },
    birthday_reset_datepicker: function ($, startDate, endDate) {
        if (startDate) {
            $('#birthday_dateTimePicker').datetimepicker('setStartDate', startDate);
        }
        if (endDate) {
            $('#birthday_dateTimePicker').datetimepicker('setEndDate', endDate);
        }
    },


    icExpiryDay_date_init: function ($, startDate, endDate) {
        var deferred = Deferred();
        var that = this;
        $('#icExpiryDay_dateTimePicker').datetimepicker({//员工本人生日范围
            autoclose: true,
            format: 'yyyy-mm-dd',
            startView: 4,
            language: 'zh-CN',
            minView: 2,
            startDate: startDate,//最大的年龄
            endDate: endDate //最小的年龄
        }).on('hide', function (ev) {
            $('#icExpiryDay_dateTimePicker').blur();
        });
        deferred.resolve()
        return deferred.promise;
    },
    icExpiryDay_reset_datepicker: function ($, startDate, endDate) {
        if (startDate) {
            $('#icExpiryDay_dateTimePicker').datetimepicker('setStartDate', startDate);
        }
        if (endDate) {
            $('#icExpiryDay_dateTimePicker').datetimepicker('setEndDate', endDate);
        }
    },

    contact_address_userInfo_extract_address: function (contact_address) {
        var deferred = Deferred();
        var that = this;
        if (contact_address) {
            var result = contact_address.split("#");
            that.contact_address_userInfo_selected_province = result[0];
            $("#contact_address_userInfo_province").val(result[0]);
            that.contact_address_userInfo_candidate_cities = service.contact_address_userInfo_getCityByProvice(
                result[0]
            );
            setTimeout(function () {
                that.contact_address_userInfo_selected_city = result[1];
                $("#contact_address_userInfo_city").val(result[1]);
                that.contact_address_userInfo_candidate_districts = service.contact_address_userInfo_getDistrictByCity(
                    result[1]
                );
                setTimeout(function () {
                    if (that.contact_address_userInfo_candidate_districts.length == 0) {
                        that.contact_address_userInfo_selected_district = "";
                        $("#contact_address_userInfo_district").val("");
                    } else {
                        that.contact_address_userInfo_selected_district = result[2];
                        $("#contact_address_userInfo_district").val(result[2]);
                    }
                }, 1000);
            }, 1000);
            that.contact_address_userInfo_selected_detail = result[3];
        }
        deferred.resolve();
        return deferred.promise;
    },
    contact_address_userInfo_click: function () {
        console.log("123123");
    },
    //GEN_actions

    //endregion

    //region 校验逻辑

    //endregion

    //region 数据监听
    bindListeners: function () {


        $("#name_input").change(function () {
            var value = $(this).val()
            alert(value)
            localStorage.setItem("name_input", value)
        })

        $("#mobile_input").change(function () {
            var value = $(this).val()
        })

        $("#gender_RADIO").change(function () {
            var that = vm;
            var value = $(this).val()

        });

        $("#career_SELECT").change(function () {
            var value = $(this).val()
        });

        $('#birthday_dateTimePicker').change(function () {
            var value = $(this).val()
        });

        $("#icIsLongValid_RADIO").change(function () {
            var that = vm;
            var value = $(this).val()

        });

        $('#icExpiryDay_dateTimePicker').change(function () {
            var value = $(this).val()
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


    //endregion 数据监听

});

vm.bindListeners();


vm.birthday_date_init($, vm.birthday_startDate, vm.birthday_endDate)


vm.icExpiryDay_date_init($, vm.icExpiryDay_startDate, vm.icExpiryDay_endDate)

vm.name_input = localStorage.getItem('name_input');
//GEN_run
