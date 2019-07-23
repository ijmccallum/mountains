const scores = {
  Munro: 10000,
  Corbett: 1000,
  Graham: 100,
  Donald: 10,
  'Sub 2000': 1
}

const sortRoutesBySummitScore = ({ routeData }) => {
  //apply scores
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

  //sort
  let sortedArray = ScoredRoutes.sort((a, b) => {
      if (a.Grade < b.Grade) {
        return -1;
      }
      if (a.Grade > b.Grade) {
        return 1;
      }
      if (a.routeScore < b.routeScore) {
        return -1;
      }
      if (a.routeScore > b.routeScore) {
        return 1;
      }
      //equal score! sort by travel time
      if (a.directions.duration.value < b.directions.duration.value) {
        return -1;
      }
      if (a.directions.duration.value > b.directions.duration.value) {
        return 1;
      }
      //equal score and travel time? Damn
      return 0;
  });

  return sortedArray;
}

const sortMultiSummitRoutes = ({ routeData }) => {
  //apply scores
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

  //sort
  let sortedArray = ScoredRoutes.sort((a, b) => {
    if (a.Grade < b.Grade) {
      return -1;
    }
    if (a.Grade > b.Grade) {
      return 1;
    }
    if (a.routeScore < b.routeScore) {
      return -1;
    }
    if (a.routeScore > b.routeScore) {
      return 1;
    }
    //equal score! sort by travel time
    //unknown is longest
    if (!a.directions || !a.directions.duration) {
      return 1;
    }
    if (!b.directions || !b.directions.duration) {
      return -1;
    }
    if (a.directions.duration.value < b.directions.duration.value) {
      return -1;
    }
    if (a.directions.duration.value > b.directions.duration.value) {
      return 1;
    }
    //equal score and travel time? Damn
    return 0;
  });
  return sortedArray;
}

module.exports = sortMultiSummitRoutes;