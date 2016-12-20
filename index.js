var colors = require('colors/safe');

const log = {

    error: function(message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        console.log(addDebugTimestamp() + colors.red('[ERROR] ') + message);
    },

    warning: function(message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        console.log(addDebugTimestamp() + colors.yellow('[WARNING] ') + message);
    },

    debug: function(message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        console.log(addDebugTimestamp() + colors.green('[DEBUG] ') + message);
    },

    http: function(route, status, method) {
        console.log(addDebugTimestamp() + colors.blue('[ROUTE] ') + method + '(' + status + ')' + route);
    },

    info: function(message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        console.log(addDebugTimestamp() + colors.blue('[INFO] ') + message);
    },

    success: function(message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        console.log(addDebugTimestamp() + colors.green('[SUCCESS] ') + message)
    },

    failure: function(message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        console.log(addDebugTimestamp() + colors.red('[FAILURE] ') + message)
    },

    alert: function(message) {
        if (typeof message === 'object') {
            message = JSON.stringify(message);
        }
        console.log(addDebugTimestamp() + colors.red('[ALERT] ') + message)
    }
};

function addDebugTimestamp(){
    if(process.env.DEBUG){
        var time = new Date();
        var hours = ('0' + time.getHours()).slice(-2);
        var minutes = ('0' + time.getMinutes()).slice(-2);
        var seconds = ('0' + time.getSeconds()).slice(-2);
        return colors.gray('[' + hours + ':' + minutes + ':' + seconds + ']');
    }
    return '';
}

module.exports = log;