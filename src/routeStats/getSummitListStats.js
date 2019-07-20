/**
 * Returns an object, 
 * each key is a summit type, 
 * with a number showing the number of summits of that type
 */
const getSummitListStats = ({ summitList }) => {
  let types = {};
  summitList.forEach((summit) => {
    if (!types[summit.type]) {
      types[summit.type] = 1;
    } else {
      types[summit.type] = types[summit.type] + 1;
    }
  });
  return types;
}
module.exports = getSummitListStats;