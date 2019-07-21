// get an array of summit types
  // for each type, create an array of that type

const getSummits = require('./getSummitList.js');
const getSummitListStats = require('./getSummitListStats.js');
const filterRoutesBySummitType = require('./filterRoutesBySummitType.js');
const routeData = require('../../data/routeData.json');
const getGradeCountObj = require('./getGradeCountObj.js');
const saveStatsToMd = require('./saveStatsToMd.js');
const getMultiSummitRoutes = require('./getMultiSummitRoutes.js');
const getTypeCompletionRatios = require('./getTypeCompletionRatios.js');

let summitList = getSummits({ routeData });
let summitStats = getSummitListStats({ summitList });

let munroRoutes = filterRoutesBySummitType({ routeData, summitType: 'Munro' });
let corbettRoutes = filterRoutesBySummitType({ routeData, summitType: 'Corbett' });
let grahamRoutes = filterRoutesBySummitType({ routeData, summitType: 'Graham' });
let sub2000Routes = filterRoutesBySummitType({ routeData, summitType: 'Sub 2000' });

let munroGradeCounts = getGradeCountObj({ routeData: munroRoutes });
munroGradeCounts.total = munroRoutes.length;
let corbettGradeCounts = getGradeCountObj({ routeData: corbettRoutes });
corbettGradeCounts.total = corbettRoutes.length;
let grahamGradeCounts = getGradeCountObj({ routeData: grahamRoutes });
grahamGradeCounts.total = grahamRoutes.length;
let sub2000GradeCounts = getGradeCountObj({ routeData: sub2000Routes });
sub2000GradeCounts.total = sub2000Routes.length;

let multiSummitRoutes = getMultiSummitRoutes({routeData});

let typeCompleteRatios = getTypeCompletionRatios({hiker: 'I'});
console.log('typeCompleteRatios', typeCompleteRatios);

//Write stats to markdown!
saveStatsToMd({
  totalRouteCount: routeData.length, 
  typeGradeCounts: {
    munros: munroGradeCounts,
    corbetts: corbettGradeCounts,
    grahams: grahamGradeCounts,
    sub2000s: sub2000GradeCounts
  }, 
  multiSummitRoutes: multiSummitRoutes,
  typeCompleteRatios
});