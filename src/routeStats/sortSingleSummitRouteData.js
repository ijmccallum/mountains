const sortSingleSummitRouteData = ({ routeData }) => {
  //hike time
  let sortedRoutes = routeData.sort((a, b) => {
    if (a.Grade < b.Grade) {
      return -1;
    }
    if (a.Grade > b.Grade) {
      return 1;
    }
    //equal grade! sort by travel time
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
    return 0;
  });
  return sortedRoutes;
}

module.exports = sortSingleSummitRouteData;