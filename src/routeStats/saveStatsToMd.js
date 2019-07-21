const fs = require('fs');
const path = require('path');

const saveStatsToMd = ({
  totalRouteCount, 
  typeGradeCounts,
  typeCompleteCounts,
  multiSummitRoutes
}) => {
  return new Promise((resolve, reject) => {
      let mdString = `# Stats
_Don't edit directly, I'm generated!_

 * Total route count: ${totalRouteCount}

 Count of routes that include a type of summit by grade.

|                   | 1 | 2 | 3 | 4 | 5 |
|-------------------|---|---|---|---|---|
| Munros (${typeGradeCounts.munros.total})            |${typeGradeCounts.munros['1']||0}|${typeGradeCounts.munros['2']||0}|${typeGradeCounts.munros['3']||0}|${typeGradeCounts.munros['4']||0}|${typeGradeCounts.munros['5']||0}|
| Corbetts (${typeGradeCounts.corbetts.total})          |${typeGradeCounts.corbetts['1']||0}|${typeGradeCounts.corbetts['2']||0}|${typeGradeCounts.corbetts['3']||0}|${typeGradeCounts.corbetts['4']||0}|${typeGradeCounts.corbetts['5']||0}|
| Grahams (${typeGradeCounts.grahams.total})           |${typeGradeCounts.grahams['1']||0}|${typeGradeCounts.grahams['2']||0}|${typeGradeCounts.grahams['3']||0}|${typeGradeCounts.grahams['4']||0}|${typeGradeCounts.grahams['5']||0}|
| Sub2000s (${typeGradeCounts.sub2000s.total})          |${typeGradeCounts.sub2000s['1']||0}|${typeGradeCounts.sub2000s['2']||0}|${typeGradeCounts.sub2000s['3']||0}|${typeGradeCounts.sub2000s['4']||0}|${typeGradeCounts.sub2000s['5']||0}|

Multi summit routes, sorted by grade, then summit types from Munros through Sub 2000s:

| Grade | M C G D Sub 2000 | Walk title | time |
|-------|:----------------:|------------|------|
`;
    
      multiSummitRoutes.forEach((route) => {
        let summitCount = {
          Munro: 0,
          Corbett: 0,
          Graham: 0,
          'Sub 2000': 0,
          Donald: 0
        };
        route.summitsClimbed.forEach((summit) => {
          summitCount[summit.type] += 1;
        });

        try {
          mdString += `|**${route.Grade}**|${summitCount.Munro} ${summitCount.Corbett} ${summitCount.Graham} ${summitCount.Donald} ${summitCount['Sub 2000']}|[${route.Walk}](${route.href})|${route.time}|
`;
        } catch (err) {
          console.log('multi summit stat err', err);
        }
      });

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