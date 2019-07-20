const addSummit = ({newSummit, summitList}) => {
  let isUnique = true;
  summitList.forEach((existingSummit) => {
    if (existingSummit.link === newSummit.link) {
      isUnique = false;
    }
  });
  if (isUnique) {
    summitList.push(newSummit);
  }
  return summitList;
};

const getSummits = ({routeData}) => {
  let summits = [];
  routeData.forEach((route) => {
    route.summitsClimbed.forEach((summit) => {
      summits = addSummit({newSummit: summit, summitList: summits});
    });
  });
  return summits;
}

module.exports = getSummits;