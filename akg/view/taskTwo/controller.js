var commonService = require('../../lib/commonService');
var service = require('./service');

var career_dic_array = require('../../lib/dic/price');
//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    headImg:require('./img/tbmain_bg.png'),
    tbmain_icon0:require('./img/tbmain_icon0.png'),
    tbmain_icon1:require('./img/tbmain_icon1.png'),
    tbmain_icon2:require('./img/tbmain_icon2.png'),
    career_candidate_select_array: career_dic_array,
    career_selected_item: '',
    tbmain_cbb_btn:require('./img/tbmain_cbb_btn.png'),
    tbmain_icon3:require('./img/tbmain_icon3.png'),
    tbfill_next_sel_btn:require('./img/tbfill_next_sel_btn.png'),
    //GEN_properties

    //endregion

    //region 主要数据

    //endregion 主要数据

    //region 主逻辑

    //endregion 主逻辑

    //region 组件逻辑



    //GEN_actions

    //endregion

    //region 校验逻辑

    //endregion

    //region 数据监听
    bindListeners: function () {



        //GEN_listeners
    }


    //endregion 数据监听

});

vm.bindListeners();

$(".form_datetime").datetimepicker({
    format: "yyyy-mm-dd hh:ii",
    autoclose: true,
    todayBtn: true,
    language:'zh-CN',
    pickerPosition:"bottom-left"
});


//GEN_run
