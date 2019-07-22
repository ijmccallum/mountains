// get an array of summit types
  // for each type, create an array of that type

const getSummits = require('./getSummitList.js');
const getSummitListStats = require('./getSummitListStats.js');
const filterRoutesBySummitType = require('./filterRoutesBySummitType.js');
const routeData = require('../../data/routeData.json');
const getMultiSummitRoutes = require('./getMultiSummitRoutes.js');

const buildCompletionStatsMarkup = require('./buildCompletionStatsMarkup.js');
const buildRouteGradeTableMarkup = require('./buildRouteGradeTableMarkup.js');
const buildMultiSummitRouteTableMarkup = require('./buildMultiSummitRouteTableMarkup.js');
const buildSingleSummitRouteTableMarkup = require('./buildSingleSummitRouteTableMarkup.js');

const saveMDfile = require('./saveMDfile.js');


let summitList = getSummits({ routeData });
let summitStats = getSummitListStats({ summitList });


let multiSummitRoutes = getMultiSummitRoutes({routeData});
let munroRoutes = filterRoutesBySummitType({ routeData, summitType: 'Munro' });
let corbettRoutes = filterRoutesBySummitType({ routeData, summitType: 'Corbett' });
let grahamRoutes = filterRoutesBySummitType({ routeData, summitType: 'Graham' });
let donaldRoutes = filterRoutesBySummitType({ routeData, summitType: 'Donald' });
let sub2000Routes = filterRoutesBySummitType({ routeData, summitType: 'Sub 2000' });

saveMDfile({
  completionStatsMarkup: buildCompletionStatsMarkup(),
  routeGradeTableMarkup: buildRouteGradeTableMarkup({munroRoutes, corbettRoutes, grahamRoutes, donaldRoutes, sub2000Routes}),
  multiSummitRouteTableMd: buildMultiSummitRouteTableMarkup({ routeData: multiSummitRoutes }),
  singleMunroRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: munroRoutes }),
  singleCorbettRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: corbettRoutes }),
  singleGrahamRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: grahamRoutes }),
  singleDonaldRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: donaldRoutes }),
  singleSub2000RouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: sub2000Routes })
});
