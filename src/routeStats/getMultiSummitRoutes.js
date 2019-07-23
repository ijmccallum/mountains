/**
 * Takes routeData
 * Returns an array of routes that hit multiple summits
 */

const getMultiSummitRoutes = ({ routeData }) => {
  let multiSummitRoutes = [];
  routeData.forEach((route) => {
    if (route.summitsClimbed.length > 1) {
      multiSummitRoutes.push(route);
    }
  });
  return multiSummitRoutes;
};

module.exports = getMultiSummitRoutes;