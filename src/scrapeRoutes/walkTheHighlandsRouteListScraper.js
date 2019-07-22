const request = require('request');
const cheerio = require('cheerio');

/**
 * Loads the full list of routes from walk the highlands
 * returns an array of the full list.
 * The first stage in creating a ROUTE object
 */

const walkTheHighlandsRouteListScraper = ({start}) => {
  return new Promise((resolve, reject) => {
    let routeData = [];

    try {
      request.post(
        `https://www.walkhighlands.co.uk/Forum/find-a-walk.php?regions%5B%5D=Aberdeenshire&regions%5B%5D=Angus&regions%5B%5D=Argyll&regions%5B%5D=Arran&regions%5B%5D=Borders&regions%5B%5D=Cairngorms&regions%5B%5D=Dumfries%2C+Galloway&regions%5B%5D=Edinburgh%2C+Lothian&regions%5B%5D=Fife%2C+Stirling&regions%5B%5D=Fort+William&regions%5B%5D=Glasgow%2C+Ayrshire%2C+Lanark&regions%5B%5D=Islay%2C+Jura%2C+Colonsay&regions%5B%5D=Kintail&regions%5B%5D=Loch+Lomond&regions%5B%5D=Loch+Ness&regions%5B%5D=Moray&regions%5B%5D=Mull&regions%5B%5D=Orkney&regions%5B%5D=Outer+Hebrides&regions%5B%5D=Perthshire&regions%5B%5D=Shetland&regions%5B%5D=Skye&regions%5B%5D=Small+Isles%2C+Coll%2C+Tiree&regions%5B%5D=Sutherland&regions%5B%5D=Torridon&regions%5B%5D=Ullapool&start=${start}`, 
        {form: {}},
        function(err, resp, body){
          if(err) {
            reject(err);
            return;
          }
          try {
            $ = cheerio.load(body);
            $('#memberlist').find('tr').each((routeRow) => {
              let routeObj = {
                title: $($(routeRow).find('td')[0]).text(),
                link: $($(routeRow).find('td')[0]).find('a').attr('href'),
                grade: $($(routeRow).find('td')[1]).text(),
                rating: $($(routeRow).find('td')[2]).text(),
                distance: $($(routeRow).find('td')[3]).text()
              }
              routeData.push(routeObj);
            });
          } catch (err) {
            console.log('loading search page err');
            console.log(err);
            reject(err);
          }
          resolve(routeData);
      });
    } catch(err) {
      console.log('request search page err start:', start);
      console.log(err);
      reject(err);
    }
  });
};

module.exports = walkTheHighlandsRouteListScraper;