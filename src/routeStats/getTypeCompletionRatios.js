const munrosAtoZ = require('../../data/munrosAtoZ.json');
const corbettsAtoZ = require('../../data/corbettsAtoZ.json');
const grahamsAtoZ = require('../../data/grahamsAtoZ.json');
/**
 * Takes a "Hiker" name
 * returns a completion ratio object
 */

const getCompletionCount = ({mountains, hiker}) => {
  let completionCount = 0;
  mountains.forEach((mountain) => {
    if (mountain.climbed) {
      mountain.climbed.some((climb) => {
        if (climb.hiker === hiker) {
          completionCount ++;
          return true;
        }
      });
    }
  });
  return completionCount;
};

const getTypeCompletionRatios = ({hiker}) => {
  return {
    munros: {
      total: munrosAtoZ.length,
      completed: getCompletionCount({mountains: munrosAtoZ, hiker})
    },
    corbetts: {
      total: corbettsAtoZ.length,
      completed: getCompletionCount({mountains: corbettsAtoZ, hiker})
    },
    grahams: {
      total: grahamsAtoZ.length,
      completed: getCompletionCount({mountains: grahamsAtoZ, hiker})
    }
  }
}

module.exports = getTypeCompletionRatios;