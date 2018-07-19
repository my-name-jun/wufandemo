/**
 * Created by brave on 17/3/28.
 */

var config = require('../config/config');

var object = {
    post: function (interfaceName, data) {
        var deferred = Deferred();
        $.ajax({
            url: config.host + config.appName + "/" + interfaceName,
            type: 'post',
            timeout: 180000,
            data: data,
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (res, error) {
                deferred.reject(res);
            }
        });
        return deferred.promise
    },
    postFile: function (interfaceName, data) {
        var deferred = Deferred();
        // var url = config.backendUrl + interfaceName;
        var url = config.host + config.appName + "/" + interfaceName;
        $.ajax({
            url: url,
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: data,
            processData: false,
            contentType: false,
            timeout: 180000,
            complete: function () {
            }
        }).done(function (data) {
            alert("success")
        }).fail(function (data) {
            alert("error")
        });
        return deferred.promise
    },
    postFile2: function (interfaceName, data) {
        var deferred = Deferred();
        var url = config.backendUrl + interfaceName;
        // var url = config.host + config.appName + "/" + interfaceName;
        avalon.log(url)
        $.ajax({
            url: url,
            type: 'post',
            timeout: 180000,
            data: data,
            dataType: 'json',
            success: function (data) {
                deferred.resolve(data);
            },
            error: function (res, error) {
                deferred.reject(res);
            }
        });
        return deferred.promise
    },
};


module.exports = object;