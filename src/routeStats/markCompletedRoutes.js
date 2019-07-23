/**
 * Takes routeData
 * Takes summitList
 * Returns routeData with completed routes marked
 */

//how many of the summits in the given route are in the completedSummits list?
const getCompletionRatio = ({route, completedSummits}) => {
  if (!route.summitsClimbed || route.summitsClimbed.length == 0) {
    return '0/0';
  }
  let completionCount = 0;
  let summitCount = route.summitsClimbed.length;
  route.summitsClimbed.forEach((routeSummit) => {
    completedSummits.forEach((completedSummit) => {
      if (completedSummit.Mountain == routeSummit.title) {
        completionCount += 1;
      }
    }); 
  });
  return `${completionCount}/${summitCount}`;
}

const markCompletedRoutes = ({routeData, completedSummits}) => {
  let markedRouteData = [];
  routeData.forEach((route) => {
    let completionRatio = getCompletionRatio({route, completedSummits})
    markedRouteData.push({...route, completionRatio});
  });
  return markedRouteData;
};

module.exports = markCompletedRoutes;