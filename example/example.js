var msw = require('../lib/main.js');

msw.set({
    apiKey: 'YOUR API KEY GOES HERE',
    units: 'US' //optional. one of: 'US', 'EU', 'UK'
});

msw.forecast(358).then(function (forecast) {
    console.log('Successfully retrived data for Manasquan, NJ');
    console.log(forecast.toString());
}, function (err) {
    console.log('ERR: encountered error getting MSW data: ' + err);
});