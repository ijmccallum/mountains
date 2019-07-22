const buildSingleSummitRouteTableMarkup = ({ routeData }) => {
  let markup = `
| Grade | Walk title | time |
|:-----:|------------|------|
`;
  try {
    routeData.forEach((route) => {
      markup += `|${route.Grade}|[${route.Walk}](${route.href})|${route.time}|
`;
    });
  } catch (err) {
    console.log('Build single summit route table markup err');
    console.log(err);
  }
  return markup;
};
module.exports = buildSingleSummitRouteTableMarkup;