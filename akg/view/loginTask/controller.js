var commonService = require('../../lib/commonService');
var service = require('./service');


var career_dic_array = require('../../lib/dic/provinces');


//GEN_dependences

var vm = avalon.define({
    $id: "vm",
    img: require('./xlb_bg_01.png'),
    img_button: require('./xlb_receive_btn.png'),
    check_0: require('./xlb_check_0.png'),
    check_1: require('./xlb_check_1.png'),
    cbb_btn: require('./xlb_cbb_btn.png'),
    name: '',
    mobile: '',
    number: '',


    isTick: false,
    Mlength: 0,
    Nlength: 0,

    //region 组件数据

    career_candidate_select_array: career_dic_array,
    career_selected_item: '',

    anyFuncti: function () {
        if (vm.isTick == false)
            alert("请同意规则！");
        else if (Mlength != 11)
            alert("电话号码需要输入11位！");
        else if (Nlength != 18)
            alert("身份证需要输入18位！");
        else {
            var that = this;
            var data = {
                name: that.name,
                mobile: that.mobile,
                number: that.number,
                career_dic_array: that.career_selected_item,
            };
            service.postToServer(data);
        }

    },
    tick: function () {
        var that = this;
        that.isTick = !that.isTick;
    },

    //endregion 数据监听
    bindListeners: function () {


        $("#mobile_input").change(function () {
            Mlength = $("#mobile_input").val().length;
            if (Mlength != 11)
                alert("输入错误！");
        });
        $("#number_input").change(function () {
            Nlength = $("#number_input").val().length;
            if (Nlength != 18)
                alert("输入错误！");
        });


    }
});

vm.bindListeners();
//GEN_run
