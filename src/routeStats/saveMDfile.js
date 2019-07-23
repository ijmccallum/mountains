const fs = require('fs');
const path = require('path');

const saveMDfile = ({ 
  completionStatsMarkup,
  routeGradeTableMarkup,
  multiSummitRouteTableMd,
  singleMunroRouteTableMd,
  singleCorbettRouteTableMd,
  singleGrahamRouteTableMd,
  singleDonaldRouteTableMd,
  singleSub2000RouteTableMd
}) => {
let MDstring = `# Mountains

${completionStatsMarkup}

## Hiking Routes

_Counts of routes by summit type & grade._

${routeGradeTableMarkup}

## Multi Summit Routes

I've pulled out all the routes that hit more than one summit, they're sorted from easiest to hardest based on the route grade.
Within each grade they're sorted by the number of summits hit. And for the few that are still equal, the final sort is by driving time from Joppa.

${multiSummitRouteTableMd}

## Routes by summit type

### Munro Routes

${singleMunroRouteTableMd}

### Corbett Routes

${singleCorbettRouteTableMd}

### Graham Routes

${singleGrahamRouteTableMd}

### Donald Routes

${singleDonaldRouteTableMd}

### Sub 2000 Routes

${singleSub2000RouteTableMd}

`;

try {
  fs.writeFile(path.join(__dirname, `../../README.md`), MDstring, 'utf8', (err) => {
    if(err) {
      console.log('write MD file err');
      console.log(err);
    }
  });
} catch(err) {
  console.log('write MD file err');
  console.log(err);
}
}

module.exports = saveMDfile;