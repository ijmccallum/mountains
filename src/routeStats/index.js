// get an array of summit types
  // for each type, create an array of that type

const getSummits = require('./getSummitList.js');
const getSummitListStats = require('./getSummitListStats.js');
const getSummitRoutes = require('./getSummitRoutes.js');
const routeData = require('../../data/routeData.json');
const getRouteStats = require('./getRouteStats.js');
const saveStatsToMd = require('./saveStatsToMd.js');

let summitList = getSummits({ routeData });
let summitStats = getSummitListStats({ summitList });

let corbettSummitList = summitList.filter((summit) => {
  return summit.type == 'Corbett'
});

let munroSummitList = summitList.filter((summit) => {
  return summit.type == 'Munro'
});

//get an array of routes that hit a munro or a corbett
let summitRoutes = getSummitRoutes({ routeData });
let summitRouteStats = getRouteStats({ routeData: summitRoutes });

console.log('summitStats', summitStats);
console.log('routeData', routeData.length);
console.log('summitRoutes', summitRoutes.length);
console.log('summitRouteStats', summitRouteStats);

//Write stats to markdown!
saveStatsToMd({totalRouteCount: routeData.length, typeCounts: summitRoutes.length, typeCompleteCounts: 0});