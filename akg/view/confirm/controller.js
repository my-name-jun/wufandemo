var commonService = require('../../lib/commonService');
var service = require('./service');

//GEN_dependences

var vm = avalon.define({
    $id: "vm",

    //region 组件数据
    bg:require('../taskTwo/img/bg.png'),
    tbfill_icon:require('../taskTwo/img/tbfill_icon.png'),
    tbfill_next_sel_btn:require('../taskTwo/img/tbfill_next_sel_btn.png'),
    tbmain_icon0:require('../taskTwo/img/tbmain_icon0.png'),
    tbconfirm_icon2:require('../taskTwo/img/tbconfirm_icon2.png'),
    tbmain_icon3:require('../taskTwo/img/tbmain_icon3.png'),
    tbmain_icon4:require('../taskTwo/img/tbmain_icon4.png'),
    tbconfirm_pay_btn:require('../taskTwo/img/tbconfirm_pay_btn.png'),
    bg_1:require('../taskTwo/img/bg_1.png'),
    tbsuccessful_pop:require('../taskTwo/img/tbsuccessful_pop.png'),
    tbpop_shut_btn:require('../taskTwo/img/tbpop_shut_btn.png'),
    tbpop_determine_btn:require('../taskTwo/img/tbpop_determine_btn.png'),
    tbpop_back_btn:require('../taskTwo/img/tbpop_back_btn.png'),
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
//GEN_run
$(document).ready(function(){
    $("#myModal-new").click(function(){
        $("#myModal").modal("show")
    })
})