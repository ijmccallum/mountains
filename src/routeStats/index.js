// get an array of summit types
  // for each type, create an array of that type

const getSummits = require('./getSummitList.js');
const getSummitListStats = require('./getSummitListStats.js');
const routeData = require('../../data/routeData.json');
const aToZMunros = require('../../data/munrosAtoZ.json');

let summitList = getSummits({ routeData });
let summitStats = getSummitListStats({ summitList });

let munroSummitList = summitList.filter((summit) => {
  return summit.type == 'Munro'
});

//which munros do I not have?

console.log('munroSummitList', munroSummitList.length);
console.log('aToZMunros', aToZMunros.length);
let missingMunros = aToZMunros.filter((munro) => {
  let isInRouteList = false;
  munroSummitList.forEach((routeMunro) => {
    if (routeMunro.title == munro.Mountain) {
      isInRouteList = true;
    }
  });
  return !isInRouteList;
});

console.log('missingMunros', missingMunros);
console.log(missingMunros.length);
