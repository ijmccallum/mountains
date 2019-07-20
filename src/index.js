const data = require('../data/routeData.json');
const urlToRouteData = require('./urlToRouteData.js');
const saveRouteData = require('./saveRouteData.js');

function sleep(ms){
  return new Promise(resolve=>{
      setTimeout(resolve,ms)
  })
}
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
asyncForEach(data, async (ROUTE, i) => {
  if (!ROUTE.gmapstart) {
    console.log(`${i}/${data.length} Route: ${ROUTE.Walk}`);
  
    let urlRouteData = {};
    try {
      urlRouteData = await urlToRouteData(ROUTE);
    } catch (err) {
      console.log('route err ', ROUTE.Walk);
      console.log(err);
    }
  
    let combinedRouteData = {...ROUTE, ...urlRouteData};
    
    try {
      await saveRouteData({newRouteData: combinedRouteData});
    } catch(err) {
      console.log('Save err', ROUTE.Walk);
      console.log(err);
    }
  
    let sleepDur = Math.floor(Math.random() * 1000) + 1;
    await sleep(sleepDur);
  }
});