var colors = require('colors/safe');

const log = {

    error: function(message) {
        var time = formatTime(new Date());
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        console.log(time + colors.red('[ERROR] ') + message);
    },

    warning: function(message) {
        var time = formatTime(new Date());
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        console.log(time + colors.yellow('[WARNING] ') + message);
    },

    debug: function(message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        var time = formatTime(new Date());
        console.log(time + colors.green('[DEBUG] ') + message);
    },

    http: function(route, status, method) {
        var time = formatTime(new Date());
        console.log(time + colors.blue('[ROUTE] ') + method + '(' + status + ')' + route);
    },

    info: function(message) {
        var time = formatTime(new Date());
        console.log(time + colors.blue('[INFO] ') + message);
    },

    success: function(message) {
        var time = formatTime(new Date());
        console.log(time + colors.green('[SUCCESS] ') + message)
    },

    failure: function(message) {
        var time = formatTime(new Date());
        console.log(time + colors.red('[FAILURE] ') + message)
    }
};

function formatTime(time) {
    var hours = ('0' + time.getHours()).slice(-2);
    var minutes = ('0' + time.getMinutes()).slice(-2);
    var seconds = ('0' + time.getSeconds()).slice(-2);
    return colors.gray('[' + hours + ':' + minutes + ':' + seconds + ']');
}

module.exports = log;