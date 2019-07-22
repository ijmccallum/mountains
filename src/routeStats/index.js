const filterRoutesBySummitType = require('./filterRoutesBySummitType.js');
const routeData = require('../../data/routeData.json');
const getMultiSummitRoutes = require('./getMultiSummitRoutes.js');

const sortSingleSummitRouteData = require('./sortSingleSummitRouteData.js');
const sortMultiSummitRoutes = require('./sortMultiSummitRoutes.js');

const buildCompletionStatsMarkup = require('./buildCompletionStatsMarkup.js');
const buildRouteGradeTableMarkup = require('./buildRouteGradeTableMarkup.js');
const buildMultiSummitRouteTableMarkup = require('./buildMultiSummitRouteTableMarkup.js');
const buildSingleSummitRouteTableMarkup = require('./buildSingleSummitRouteTableMarkup.js');

const saveMDfile = require('./saveMDfile.js');

let multiSummitRoutes = getMultiSummitRoutes({ routeData });
let sortedMultiSummitRoutes = sortMultiSummitRoutes({ routeData: multiSummitRoutes });
let munroRoutes = filterRoutesBySummitType({ routeData, summitType: 'Munro' });
let sortedMunroRoutes = sortSingleSummitRouteData({ routeData: munroRoutes });
let corbettRoutes = filterRoutesBySummitType({ routeData, summitType: 'Corbett' });
let sortedCorbettRoutes = sortSingleSummitRouteData({ routeData: corbettRoutes });
let grahamRoutes = filterRoutesBySummitType({ routeData, summitType: 'Graham' });
let sortedGrahamRoutes = sortSingleSummitRouteData({ routeData: grahamRoutes });
let donaldRoutes = filterRoutesBySummitType({ routeData, summitType: 'Donald' });
let sortedDonaldRoutes = sortSingleSummitRouteData({ routeData: donaldRoutes });
let sub2000Routes = filterRoutesBySummitType({ routeData, summitType: 'Sub 2000' });
let sortedSub2000Routes = sortSingleSummitRouteData({ routeData: sub2000Routes });
console.log('sortedSub2000Routes', JSON.stringify(sortedSub2000Routes));

saveMDfile({
  completionStatsMarkup: buildCompletionStatsMarkup(),
  routeGradeTableMarkup: buildRouteGradeTableMarkup({munroRoutes, corbettRoutes, grahamRoutes, donaldRoutes, sub2000Routes}),
  multiSummitRouteTableMd: buildMultiSummitRouteTableMarkup({ routeData: multiSummitRoutes }),
  singleMunroRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: sortedMunroRoutes }),
  singleCorbettRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: sortedCorbettRoutes }),
  singleGrahamRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: sortedGrahamRoutes }),
  singleDonaldRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: sortedDonaldRoutes }),
  singleSub2000RouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: sortedSub2000Routes })
});
