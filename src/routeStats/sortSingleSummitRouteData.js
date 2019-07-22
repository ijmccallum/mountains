const sortByTravelTime = ({routeData}) => {
  let sortedRoutes = routeData.sort((a, b) => {
    if (!a.directions || !a.directions.duration) {
      return -1;
    }
    if (!b.directions || !b.directions.duration) {
      return 1;
    }
    if (a.directions.duration.value < b.directions.duration.value) {
      return -1;
    }
    if (a.directions.duration.value > b.directions.duration.value) {
      return 1;
    }
    return 0;
  });
  return sortedRoutes;
}

const sortSingleSummitRouteData = ({ routeData }) => {
  //hike time

  //grade
  let grades = { g1: [], g2: [], g3: [], g4: [], g5: [] };

  routeData.forEach((route) => {
    grades[`g${route.Grade}`].push(route);
  });

  //smallest sort travel time
  let sortedGrades = {
    g1: sortByTravelTime({ routeData:grades.g1 }),
    g2: sortByTravelTime({ routeData:grades.g2 }),
    g3: sortByTravelTime({ routeData:grades.g3 }),
    g4: sortByTravelTime({ routeData:grades.g4 }),
    g5: sortByTravelTime({ routeData:grades.g5 })
  }

  let sortedRoutes = [].concat(sortedGrades.g1, sortedGrades.g2, sortedGrades.g3, sortedGrades.g4, sortedGrades.g5);
  
  return sortedRoutes;
}

module.exports = sortSingleSummitRouteData;