const munrosAtoZ = require('../../data/munrosAtoZ.json');
const corbettsAtoZ = require('../../data/corbettsAtoZ.json');
const grahamsAtoZ = require('../../data/grahamsAtoZ.json');

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

const buildCompletionStatsMarkup = () => {
  let MDstring = ``;

  try {
    MDstring += `
Munros hiked: **${getCompletionCount({mountains: munrosAtoZ, hiker:'I'})}/${munrosAtoZ.length}**
Corbetts hiked: **${getCompletionCount({mountains: corbettsAtoZ, hiker:'I'})}/${corbettsAtoZ.length}**
Grahams hiked: **${getCompletionCount({mountains: grahamsAtoZ, hiker:'I'})}/${grahamsAtoZ.length}**
    `;

  } catch (err) {
    console.log('completion stats err');
    console.log(err);
  }

  return MDstring;
}

module.exports = buildCompletionStatsMarkup;