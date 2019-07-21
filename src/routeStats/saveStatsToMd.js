const fs = require('fs');
const path = require('path');

const saveStatsToMd = ({totalRouteCount, typeGradeCounts,
  typeCompleteCounts}) => {
  return new Promise((resolve, reject) => {
      const mdString = `# Stats
_Don't edit directly, I'm generated!_

 * Total route count: ${totalRouteCount}
 * Munro Routes: 
    * Count by grade: 1:${typeGradeCounts.munros['1']||0}, 2:${typeGradeCounts.munros['2']||0}, 3:${typeGradeCounts.munros['3']||0}, 4:${typeGradeCounts.munros['4']||0}, 5:${typeGradeCounts.munros['5']||0}
 * Corbett Routes:
    * Count by grade: 1:${typeGradeCounts.corbetts['1']||0}, 2:${typeGradeCounts.corbetts['2']||0}, 3:${typeGradeCounts.corbetts['3']||0}, 4:${typeGradeCounts.corbetts['4']||0}, 5:${typeGradeCounts.corbetts['5']||0} 
 * Graham Routes:
    * Count by grade: 1:${typeGradeCounts.grahams['1']||0}, 2:${typeGradeCounts.grahams['2']||0}, 3:${typeGradeCounts.grahams['3']||0}, 4:${typeGradeCounts.grahams['4']||0}, 5:${typeGradeCounts.grahams['5']||0}
 * Sub 2000 Routes:
    * Count by grade: 1:${typeGradeCounts.sub2000s['1']||0}, 2:${typeGradeCounts.sub2000s['2']||0}, 3:${typeGradeCounts.sub2000s['3']||0}, 4:${typeGradeCounts.sub2000s['4']||0}, 5:${typeGradeCounts.sub2000s['5']||0}

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