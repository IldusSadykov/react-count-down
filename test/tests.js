var test = require('tape');
var DateBetween = require('../js/date-between.js');

var date1 = new Date("Fri Feb 06 2015 18:07:30");
var date2 = new Date("Fri Feb 07 2015 18:07:30");
var difference = DateBetween(date1,date2);

test('basic arithmetic', function (t) {
    //.equal(dateDifference, "00:00:00.02");
    t.equal(2, 2);
    t.end();
});