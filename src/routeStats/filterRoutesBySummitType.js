/**
 * returns an array of routes that hit either a munro or a corbett
 */

const filterRoutesBySummitType = ({ routeData, summitType }) => {
  let summitRoutes = [];
  routeData.forEach((route) => {
    let hitsASummit = route.summitsClimbed.some((summit) => {
      if (summit.type == summitType) {
        return true;
      }
    });

    if (hitsASummit) {
      summitRoutes.push(route);
    }
  });
  return summitRoutes;
}

module.exports = filterRoutesBySummitType;