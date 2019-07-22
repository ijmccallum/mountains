const fs = require('fs');
const path = require('path');

/**
 * This will save / update routeData to ../data/routeData.json
 * it replaces existing routes if their href matches
 * it'll add a new route if it doesn't find the given href
 */

const addNewDataToFileData = ({newRouteData, fileData}) => {
  let isUnique = true;

  fileData.forEach((fileRoute, i) => {
    if (fileRoute.link === newRouteData.link) {
      fileData[i] = newRouteData;
      isUnique = false;
    }
  });

  if (isUnique) {
    fileData.push(newRouteData);
  }

  return fileData;
}

const saveRouteData = ({newRouteData}) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '../../data/routeData.json'), 'utf8', function readFileCallback(err, rawFileData){
      if (err){
        console.log(err);
        reject(err);
      } else {
        fileData = [];
        
        try {
          fileData = JSON.parse(rawFileData);
        } catch (err) {
          reject(err);
        }

        const combinedData = addNewDataToFileData({
          newRouteData, fileData
        });

        combinedJson = JSON.stringify(combinedData);

        fs.writeFile(path.join(__dirname, '../../data/routeData.json'), combinedJson, 'utf8', (err) => {
          if(err) {
            reject(err);
          } else {
            resolve();
          }
        });
    }});
  });
}
module.exports = saveRouteData;