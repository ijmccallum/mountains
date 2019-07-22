const asyncForEach = require('./asyncForEach.js');
const sleep = require('./sleep.js');
const walkTheHighlandsRouteListScraper = require('./walkTheHighlandsRouteListScraper.js');
const walkTheHighlandRouteDetailScraper = require('./walkTheHighlandRouteDetailScraper.js');
const saveRouteData = require('./saveRouteData.js');

const go = async () => {
  //1 get the routes, they're in a search list paged into groups of 500
  console.log('list page 1: 0 - 500');
  let routeListPage1 = await walkTheHighlandsRouteListScraper({start:0});
  console.log('list page 2: 500 - 1000');
  let routeListPage2 = await walkTheHighlandsRouteListScraper({start:500});
  console.log('list page 3: 1000 - 1500');
  let routeListPage3 = await walkTheHighlandsRouteListScraper({start:1000});
  console.log('list page 4: 1500 - 2000');
  let routeListPage4 = await walkTheHighlandsRouteListScraper({start:1500});
  console.log('list page 5: 2000 - end');
  let routeListPage5 = await walkTheHighlandsRouteListScraper({start:2000});
  let routeData = [].concat(routeListPage1, routeListPage2, routeListPage3, routeListPage4, routeListPage5);

  try {
    await saveRouteData({newRouteData: routeData});
  } catch(err) {
    console.log('Save err', listRouteData.title);
    console.log(err);
  }

  //2 get the route details
  asyncForEach(routeData, async (listRouteData, i) => {
    console.log(`${i}/${routeData.length} Route: ${listRouteData.title}`);
  
    let routeDetailData = {};
    try {
      routeDetailData = await walkTheHighlandRouteDetailScraper(listRouteData);
    } catch (err) {
      console.log('route err ', listRouteData.title);
      console.log(err);
    }
  
    let combinedRouteData = {...listRouteData, ...routeDetailData};
    
    try {
      await saveRouteData({newRouteData: combinedRouteData});
    } catch(err) {
      console.log('Save err', listRouteData.title);
      console.log(err);
    }
  
    let sleepDur = Math.floor(Math.random() * 1000) + 1;
    await sleep(sleepDur);
  });
}

go();
