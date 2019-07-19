const fs = require('fs');
const path = require('path');

const addNewDataToFileData = ({newRouteData, fileData}) => {
  let isUnique = true;

  fileData.forEach((fileRoute, i) => {
    if (fileRoute.href === newRouteData.href) {
      console.log('dupe found, updating it', fileRoute.href);
      fileData[i] = newRouteData;
      isUnique = false;
    }
  });

  if (isUnique) {
    console.log('new route, adding', newRouteData.href);
    fileData.push(newRouteData);
  }

  return fileData;
}

const saveRouteData = ({newRouteData}) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '../data/test.json'), 'utf8', function readFileCallback(err, rawFileData){
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

        fs.writeFile(path.join(__dirname, '../data/test.json'), combinedJson, 'utf8', (err) => {
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