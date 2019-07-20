/**
 * returns an array of routes that hit either a munro or a corbett
 */

const getSummitRoutes = ({ routeData }) => {
  let summitRoutes = [];
  routeData.forEach((route) => {
    let hitsASummit = route.summitsClimbed.some((summit) => {
      if (summit.type == 'Munro' || summit.type == 'Corbett') {
        return true;
      }
    });

    if (hitsASummit) {
      summitRoutes.push(route);
    }
  });
  return summitRoutes;
}

module.exports = getSummitRoutes;