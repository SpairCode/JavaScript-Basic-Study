const usb = require('usb')

usb.on('attach', function (device) {
    console.log(device)
});

usb.on('detach', function (device) {
    console.log(device)
});


var book = {};
Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});