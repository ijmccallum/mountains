const routeData = require('../../data/routeData.json');
const munrosAtoZ = require('../../data/munrosAtoZ.json');
const corbettsAtoZ = require('../../data/corbettsAtoZ.json');
const grahamsAtoZ = require('../../data/grahamsAtoZ.json');

const filterRoutesBySummitType = require('./filterRoutesBySummitType.js');
const getMultiSummitRoutes = require('./getMultiSummitRoutes.js');
const getCompletedSummits = require('./getCompletedSummits.js');

const markCompletedRoutes = require('./markCompletedRoutes.js');
const sortSingleSummitRouteData = require('./sortSingleSummitRouteData.js');
const sortMultiSummitRoutes = require('./sortMultiSummitRoutes.js');

const buildCompletionStatsMarkup = require('./buildCompletionStatsMarkup.js');
const buildRouteGradeTableMarkup = require('./buildRouteGradeTableMarkup.js');
const buildMultiSummitRouteTableMarkup = require('./buildMultiSummitRouteTableMarkup.js');
const buildSingleSummitRouteTableMarkup = require('./buildSingleSummitRouteTableMarkup.js');

const saveMDfile = require('./saveMDfile.js');

let summitList = [].concat(munrosAtoZ, corbettsAtoZ, grahamsAtoZ);
let completedSummits = getCompletedSummits({summitList, hiker: "I"});

let multiSummitRoutes = getMultiSummitRoutes({ routeData });
let sortedMultiSummitRoutes = sortMultiSummitRoutes({ routeData: multiSummitRoutes });
let markedMultiSummitRoutes = markCompletedRoutes({ routeData:sortedMultiSummitRoutes, completedSummits });

let munroRoutes = filterRoutesBySummitType({ routeData, summitType: 'Munro' });
let sortedMunroRoutes = sortSingleSummitRouteData({ routeData: munroRoutes });
let markedMunroRoutes = markCompletedRoutes({ routeData:sortedMunroRoutes, completedSummits });

let corbettRoutes = filterRoutesBySummitType({ routeData, summitType: 'Corbett' });
let sortedCorbettRoutes = sortSingleSummitRouteData({ routeData: corbettRoutes });
let markedCorbettRoutes = markCompletedRoutes({ routeData:sortedCorbettRoutes, completedSummits });

let grahamRoutes = filterRoutesBySummitType({ routeData, summitType: 'Graham' });
let sortedGrahamRoutes = sortSingleSummitRouteData({ routeData: grahamRoutes });
let markedGrahamRoutes = markCompletedRoutes({ routeData:sortedGrahamRoutes, completedSummits });

let donaldRoutes = filterRoutesBySummitType({ routeData, summitType: 'Donald' });
let sortedDonaldRoutes = sortSingleSummitRouteData({ routeData: donaldRoutes });
let markedDonaldRoutes = markCompletedRoutes({ routeData:sortedDonaldRoutes, completedSummits });

let sub2000Routes = filterRoutesBySummitType({ routeData, summitType: 'Sub 2000' });
let sortedSub2000Routes = sortSingleSummitRouteData({ routeData: sub2000Routes });
let markedSub2000Routes = markCompletedRoutes({ routeData:sortedSub2000Routes, completedSummits });

saveMDfile({
  completionStatsMarkup: buildCompletionStatsMarkup(),
  routeGradeTableMarkup: buildRouteGradeTableMarkup({munroRoutes, corbettRoutes, grahamRoutes, donaldRoutes, sub2000Routes}),
  multiSummitRouteTableMd: buildMultiSummitRouteTableMarkup({ routeData: markedMultiSummitRoutes }),
  singleMunroRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: markedMunroRoutes }),
  singleCorbettRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: markedCorbettRoutes }),
  singleGrahamRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: markedGrahamRoutes }),
  singleDonaldRouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: markedDonaldRoutes }),
  singleSub2000RouteTableMd: buildSingleSummitRouteTableMarkup({ routeData: markedSub2000Routes })
});
