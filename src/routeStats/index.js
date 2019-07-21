// get an array of summit types
  // for each type, create an array of that type

const getSummits = require('./getSummitList.js');
const getSummitListStats = require('./getSummitListStats.js');
const filterRoutesBySummitType = require('./filterRoutesBySummitType.js');
const routeData = require('../../data/routeData.json');
const getGradeCountObj = require('./getGradeCountObj.js');
const saveStatsToMd = require('./saveStatsToMd.js');

let summitList = getSummits({ routeData });
let summitStats = getSummitListStats({ summitList });

let munroRoutes = filterRoutesBySummitType({ routeData, summitType: 'Munro' });
let corbettRoutes = filterRoutesBySummitType({ routeData, summitType: 'Corbett' });
let grahamRoutes = filterRoutesBySummitType({ routeData, summitType: 'Graham' });
let sub2000Routes = filterRoutesBySummitType({ routeData, summitType: 'Sub2000' });

let munroGradeCounts = getGradeCountObj({ routeData: munroRoutes });
let corbettGradeCounts = getGradeCountObj({ routeData: corbettRoutes });
let grahamGradeCounts = getGradeCountObj({ routeData: grahamRoutes });
let sub2000GradeCounts = getGradeCountObj({ routeData: sub2000Routes });

console.log('summitStats', summitStats);
console.log('routeData', routeData.length);

//Write stats to markdown!
saveStatsToMd({
  totalRouteCount: routeData.length, 
  typeGradeCounts: {
    munros: munroGradeCounts,
    corbetts: corbettGradeCounts,
    grahams: grahamGradeCounts,
    sub2000s: sub2000GradeCounts
  }, 
  typeCompleteCounts: 0
});