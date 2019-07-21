const fs = require('fs');
const path = require('path');

const saveStatsToMd = ({totalRouteCount, typeGradeCounts,
  typeCompleteCounts}) => {
  return new Promise((resolve, reject) => {
      const mdString = `# Stats
_Don't edit directly, I'm generated!_

 * Total route count: ${totalRouteCount}

 Route counts by grade

|                   | 1 | 2 | 3 | 4 | 5 |
|-------------------|---|---|---|---|---|
| Munros            |${typeGradeCounts.munros['1']||0}|${typeGradeCounts.munros['2']||0}|${typeGradeCounts.munros['3']||0}|${typeGradeCounts.munros['4']||0}|${typeGradeCounts.munros['5']||0}|
| Corbetts          |${typeGradeCounts.corbetts['1']||0}|${typeGradeCounts.corbetts['2']||0}|${typeGradeCounts.corbetts['3']||0}|${typeGradeCounts.corbetts['4']||0}|${typeGradeCounts.corbetts['5']||0}|
| Grahams           |${typeGradeCounts.grahams['1']||0}|${typeGradeCounts.grahams['2']||0}|${typeGradeCounts.grahams['3']||0}|${typeGradeCounts.grahams['4']||0}|${typeGradeCounts.grahams['5']||0}|
| Sub2000s          |${typeGradeCounts.sub2000s['1']||0}|${typeGradeCounts.sub2000s['2']||0}|${typeGradeCounts.sub2000s['3']||0}|${typeGradeCounts.sub2000s['4']||0}|${typeGradeCounts.sub2000s['5']||0}|

`;

      fs.writeFile(path.join(__dirname, '../../stats.md'), mdString, 'utf8', (err) => {
        if(err) {
          reject(err);
        } else {
          resolve();
        }
      });
  });
}

module.exports = saveStatsToMd;