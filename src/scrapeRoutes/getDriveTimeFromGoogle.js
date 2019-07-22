const env = require('../../env.js');
const request = require('request');

// let nextSat8am = new Date();
// nextSat8am.setDate(nextSat8am.getDate() + (6 - nextSat8am.getDay()));
// nextSat8am.setHours(8);
// nextSat8am.setMinutes(0);
// let departureTime = nextSat8am.getTime() / 1000;

const getDriveTimeFromGoogle = ({routeStartPoint}) => {
    return new Promise((resolve, reject) => {
      request(`https://maps.googleapis.com/maps/api/directions/json?origin=${env.HOME_ADDRESS}&destination=${routeStartPoint}&key=${env.GOOGLE_MAPS_API_KEY}`, function(err, resp, body){
        if (err) {
          reject(err);
          return;
        }

        let googleRouteData;
        try {
          let resData = JSON.parse(body);
          console.log('resData', resData);
          googleRouteData = {
            distance: resData.routes[0].legs[0].distance,
            duration: resData.routes[0].legs[0].duration,
            end_address: resData.routes[0].legs[0].end_address,
            end_location: resData.routes[0].legs[0].end_location,
            start_address: resData.routes[0].legs[0].start_address,
            start_location: resData.routes[0].legs[0].start_location
          }
        } catch (err) {
          console.log('error parsing google map data');
          console.log(body);
          console.log(err);
          reject(err);
        }
        
        resolve(googleRouteData);
      });
    });
};

module.exports = getDriveTimeFromGoogle;
