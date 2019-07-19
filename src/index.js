const data = require('../data/walkTheHighlandRoutes.json');
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
  if (i < 3000) {
    let urlRouteData = {};
    try {
      urlRouteData = await urlToRouteData(ROUTE.href);
    } catch (err) {
      console.log('route err ', ROUTE.Walk);
      console.log(err);
    }

    let combinedRouteData = {...ROUTE, ...urlRouteData};
    
    try {
      await saveRouteData({newRouteData: combinedRouteData});
    } catch(err) {
      console.log('Save err', ROUTE.title);
      console.log(err);
    }
    // await sleep(400);
  }
});