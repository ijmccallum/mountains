const buildSingleSummitRouteTableMarkup = ({ routeData }) => {
  let markup = `
| | Grade | Walk title | Hike time | Travel time |
|-|:-----:|------------|-----------|-------------|
`;
try {
  routeData.forEach((route) => {
      let travelTime = 'unknown';
      try {
        travelTime = route.directions.duration.text;
      } catch (err) {
        
      }
      markup += `|${route.completionRatio}|${route.Grade}|[${route.Walk}](${route.link})|${route.time}|${travelTime}|
`;
    });
  } catch (err) {
    console.log('Build single summit route table markup err');
    console.log(err);
  }
  return markup;
};
module.exports = buildSingleSummitRouteTableMarkup;