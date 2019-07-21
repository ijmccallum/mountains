const fs = require('fs');
const path = require('path');

const saveStatsToMd = ({totalRouteCount, typeCounts, typeCompleteCounts}) => {
  return new Promise((resolve, reject) => {
      const mdString = `# Stats
_Don't edit directly, I'm generated!_

 * Total route count: ${totalRouteCount}
 * Munro Routes: 
    * Count by grade: 1: , 2: , 3: , 4: , 5: 
 * Corbett Routes:
    * Count by grade: 1: , 2: , 3: , 4: , 5:  
 * Graham Routes:
    * Count by grade: 1: , 2: , 3: , 4: , 5: 
 * Sub 2000 Routes:
    * Count by grade: 1: , 2: , 3: , 4: , 5: 

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