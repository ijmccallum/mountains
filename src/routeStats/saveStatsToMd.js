const fs = require('fs');
const path = require('path');

const saveStatsToMd = ({totalRouteCount, typeCounts, typeCompleteCounts}) => {
  return new Promise((resolve, reject) => {
      const mdString = `# Stats
_Don't edit directly, I'm generated!_

 * Total route count: ${totalRouteCount}
 * Munro Routes: 
 * Corbett Routes:
 * Graham Routes:
 * Sub 2000 Routes:

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