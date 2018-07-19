var service = {
    interface: require('../../network/network'),


    postToServer: function (data) {
        var that = this;
        this.interface.post('tt', data);

    },
    

        //GEN_services
};

module.exports = service;