// get an array of summit types
  // for each type, create an array of that type

const getSummits = require('./getSummitList.js');
const getSummitListStats = require('./getSummitListStats.js');
const routeData = require('../../data/routeData.json');
const aToZCorbetts = require('../../data/corbettsAtoZ.json');

let summitList = getSummits({ routeData });
let summitStats = getSummitListStats({ summitList });

let corbettSummitList = summitList.filter((summit) => {
  return summit.type == 'Corbett'
});

//which corbetts do I not have?

console.log('corbettSummitList', corbettSummitList.length);
console.log('aToZCorbetts', aToZCorbetts.length);
let missingCorbetts = aToZCorbetts.filter((corbett) => {
  let isInRouteList = false;
  corbettSummitList.forEach((routeCorbett) => {
    if (routeCorbett.title == corbett.Mountain) {
      isInRouteList = true;
    }
  });
  return !isInRouteList;
});

console.log('missingCorbetts', missingCorbetts);
console.log(missingCorbetts.length);
