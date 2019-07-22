const getGradeCountObj = require('./getGradeCountObj.js');

const buildRouteGradeTableMarkup = ({munroRoutes, corbettRoutes, grahamRoutes, donaldRoutes, sub2000Routes}) => {

  let totalRouteCount = munroRoutes.length + corbettRoutes.length + grahamRoutes.length + donaldRoutes.length + sub2000Routes.length;

  let munroGradeCounts = getGradeCountObj({ routeData: munroRoutes });
  munroGradeCounts.total = munroRoutes.length;
  
  let corbettGradeCounts = getGradeCountObj({ routeData: corbettRoutes });
  corbettGradeCounts.total = corbettRoutes.length;
  
  let grahamGradeCounts = getGradeCountObj({ routeData: grahamRoutes });
  grahamGradeCounts.total = grahamRoutes.length;
  
  let donaldGradeCounts = getGradeCountObj({ routeData: donaldRoutes });
  donaldGradeCounts.total = donaldRoutes.length;
  
  let sub2000GradeCounts = getGradeCountObj({ routeData: sub2000Routes });
  sub2000GradeCounts.total = sub2000Routes.length;

  let MDstring = `
| Count of summit routes: ${totalRouteCount} | 1 | 2 | 3 | 4 | 5 |
|-----------------------------------|---|---|---|---|---|
| Munros (${munroRoutes.length})    |${munroGradeCounts['1']||0}|${munroGradeCounts['2']||0}|${munroGradeCounts['3']||0}|${munroGradeCounts['4']||0}|${munroGradeCounts['5']||0}|
| Corbetts (${corbettRoutes.length})|${corbettGradeCounts['1']||0}|${corbettGradeCounts['2']||0}|${corbettGradeCounts['3']||0}|${corbettGradeCounts['4']||0}|${corbettGradeCounts['5']||0}|
| Grahams (${grahamRoutes.length})  |${grahamGradeCounts['1']||0}|${grahamGradeCounts['2']||0}|${grahamGradeCounts['3']||0}|${grahamGradeCounts['4']||0}|${grahamGradeCounts['5']||0}|
| Donalds (${donaldRoutes.length})  |${donaldGradeCounts['1']||0}|${donaldGradeCounts['2']||0}|${donaldGradeCounts['3']||0}|${donaldGradeCounts['4']||0}|${donaldGradeCounts['5']||0}|
| Sub2000s (${sub2000Routes.length})|${sub2000GradeCounts['1']||0}|${sub2000GradeCounts['2']||0}|${sub2000GradeCounts['3']||0}|${sub2000GradeCounts['4']||0}|${sub2000GradeCounts['5']||0}|
  `;

  return MDstring;
};

module.exports = buildRouteGradeTableMarkup;