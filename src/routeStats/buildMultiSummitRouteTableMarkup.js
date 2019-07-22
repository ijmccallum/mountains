const buildMultiSummitRouteTable = ({ routeData }) => {
  let markup = `
| Grade | Munroes, Corbetts, Grahams, Donalds, Sub 2000s <br /> M C G D S | Walk title | Hike time | Travel time |
|:-----:|:---------------------------------------------------------------:|------------|-----------|-------------|
`;
try {
  routeData.forEach((route) => {
    let travelTime = 'unknown';
    try {
      travelTime = route.directions.duration.text;
    } catch (err) {
      
    }
    let summitCount = {
      Munro: 0,
      Corbett: 0,
      Graham: 0,
      'Sub 2000': 0,
      Donald: 0
    };
    
    route.summitsClimbed.forEach((summit) => {
      summitCount[summit.type] += 1;
    });

    markup += `|**${route.Grade}**|${summitCount.Munro} ${summitCount.Corbett} ${summitCount.Graham} ${summitCount.Donald} ${summitCount['Sub 2000']}|[${route.Walk}](${route.link})|${route.time}|${travelTime}|
`;
    });
  } catch (err) {
    console.log('build multi summit route table err');
    console.log(err);
  }
  return markup;
};

module.exports = buildMultiSummitRouteTable;