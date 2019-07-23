/**
 * Takes a summit list and a hiker id
 * returns an array of summits that hiker has completed
 */
const getCompletedSummits = ({summitList, hiker}) => {
  const completedSummits = [];
  summitList.forEach((summit) => {
    if (summit.climbed) {
      if (summit.climbed.length > 0) {
        let wasClimbedByThisHiker = false;
        summit.climbed.forEach((climb) => {
          if (climb.hiker == hiker) {
            wasClimbedByThisHiker = true;
          }
        });
        if (wasClimbedByThisHiker) {
          completedSummits.push(summit);
        }
      }
    }
  });
  return completedSummits;
}

module.exports = getCompletedSummits;