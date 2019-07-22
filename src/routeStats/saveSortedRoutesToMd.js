const fs = require('fs');
const path = require('path');
const buildRouteTableMarkup = require('./buildRouteTableMd.js');

const saveSortedRoutesToMd = ({routeData, type}) => {
  return new Promise((resolve, reject) => {
    
    let mdString = `#${type} Route List
    
    ${buildRouteTableMarkup({routeData})}
    `;
    
    try {
      fs.writeFile(path.join(__dirname, `../../dist/${type}RouteList.md`), mdString, 'utf8', (err) => {
        if(err) {
          console.log('write sourted route err', err);
          reject(err);
        } else {
          resolve();
        }
      });
    } catch(err) {
      console.log('write sorted route err');
      console.log(err);
    }
  });
}
module.exports = saveSortedRoutesToMd;