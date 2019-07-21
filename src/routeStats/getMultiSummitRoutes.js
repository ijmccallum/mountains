/**
 * Takes routeData
 * Returns an array of routes that hit multiple summits
 * sorted by grade
 * then by summit type
 */

const scores = {
  Munro: 10000,
  Corbett: 1000,
  Graham: 100,
  Donald: 10,
  'Sub 2000': 1
}

const sortRoutesByType = ({ routeData }) => {
  let ScoredRoutes = routeData.map((route) => {
    let routeScore = 0;
    route.summitsClimbed.forEach((summit) => {
      routeScore += scores[summit.type];
      if (typeof routeScore == 'undefined') {
        console.log('summ,it', summit); 
      }
    });
    route.routeScore = routeScore;
    return route;
  });

  let sortedArray = ScoredRoutes.sort((a, b) => {
      if (a.routeScore < b.routeScore) {
        return -1;
      }
      if (a.routeScore > b.routeScore) {
        return 1;
      }
      return 0;
  });

  return sortedArray;
}

const getMultiSummitRoutes = ({ routeData }) => {
  let multiSummitRoutes = {
    grade1: [],
    grade2: [],
    grade3: [],
    grade4: [],
    grade5: []
  };
  routeData.forEach((route) => {
    if (route.summitsClimbed.length > 1) {
      multiSummitRoutes[`grade${route.Grade}`].push(route);
    }
  });
  let sortedMultiSummitRoutes = [].concat(
    sortRoutesByType({routeData:multiSummitRoutes.grade1}), 
    sortRoutesByType({routeData:multiSummitRoutes.grade2}), 
    sortRoutesByType({routeData:multiSummitRoutes.grade3}), 
    sortRoutesByType({routeData:multiSummitRoutes.grade4}), 
    sortRoutesByType({routeData:multiSummitRoutes.grade5})
  );
  return sortedMultiSummitRoutes;
};

module.exports = getMultiSummitRoutes;