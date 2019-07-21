/**
 * Returns an object
 * keys are the grades, number of routes for each grade
 */
const getGradeCountObj = ({ routeData }) => {
  let grades = {};
  routeData.forEach((route) => {
    if (!grades[route.Grade]) {
      grades[route.Grade] = 1;
    } else {
      grades[route.Grade] = grades[route.Grade] + 1;
    }
  });
  return grades;
}
module.exports = getGradeCountObj;