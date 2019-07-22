const request = require('request');
const cheerio = require('cheerio');

/**
 * Pass in a ROUTE object
 * should have 
 * href: link to a walk the highlands route page.
 * Optionally
 * Walk: a string title of the walk.
 * 
 * This'll pull out some bits of data from the given route page and return it in a ROUTE object
 * time, ascent, startGridRef, and summits climbed (type, title, link) from the sidebar
 * description, terrain, and gmapstart from the main content
 */

const walkTheHighlandRouteDetailScraper = async (ROUTE) => {
  return new Promise((resolve, reject) => {
    let routeData;

    try {
      request(ROUTE.link, function(err, resp, body){
        if(err) {
          reject(err);
          return;
        }
        $ = cheerio.load(body);
        
        let time = '';
        try {
          time = $('dt:contains("Time")').next().text();
        } catch (err) {
          console.log(url + ' time err');
          console.log(err);
        }
      
        let ascent = '';
        try {
          ascent = $('dt:contains("Ascent")').next().text();
        } catch (err) {
          console.log(url + ' ascent err');
          console.log(err);
        }
      
        let startGridRef = '';
        try {
          startGridRef = $('dt:contains("Start Grid Ref")').next().text();
        } catch (err) {
          console.log(url + ' startGridRef err');
          console.log(err);
        }
      
        let summitsClimbedMarkup = '';
        try {
          summitsClimbedMarkup = $('h2:contains("Summits Climbed")');
        } catch (err) {
          console.log(url + ' summitsClimbedMarkup err');
          console.log(err);
        }
      
        let summitsClimbed = [];
        try {
          summitsClimbedMarkup.next().find('dt').each((i, elm) => {
            
            let type = '';
            try {
              type = $(elm).text();
            } catch (err) {
              console.log(url + ' type err');
              console.log(err);
            }
      
            let title = '';
            try {
              title = $(elm).next().find('a').text();
            } catch (err) {
              console.log(url + ' title err');
              console.log(err);
            }
      
            let link = '';
            try {
              link = $(elm).next().find('a').attr('href');
            } catch (err) {
              console.log(url + ' link err');
              console.log(err);
            }
      
            summitsClimbed.push({
              type, title, link
            });
          });
        } catch (err) {
          console.log(url + 'summitsClimbed array err');
          console.log(err);
        }
      
        let description = '';
        try {
          description = $('h2:contains("Terrain")').prev().text();
        } catch (err) {
          console.log(ROUTE.title + 'description err');
          console.log(err);
        }
      
        let terrain = '';
        try {
          terrain = $('h2:contains("Terrain")').next().text();
        } catch (err) {
          console.log(url + 'terrain err');
          console.log(err);
        }
      
        let gmapstart = ''
        try {
          gmapstart = $('h2:contains("Start")').next().find('a').attr('href');
        } catch (err) {
          console.log(ROUTE.title + 'gmapstart err');
          console.log(err);
        }

        //TODO: optionally add all the bits of data here, not just these 2
        routeData = {time, ascent, startGridRef, summitsClimbed, description, terrain, gmapstart};
        resolve(routeData);
      });
    } catch(err) {
      console.log('request err ', ROUTE.title);
      console.log(err);
      reject(err);
    }
  });
}

module.exports = walkTheHighlandRouteDetailScraper;