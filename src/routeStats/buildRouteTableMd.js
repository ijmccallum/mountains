const buildRouteTable = ({routeData}) => {
  let markup = `
| Grade | Walk title | time |
|:-----:|------------|------|
`;
  routeData.forEach((route) => {
    markup += `|${route.Grade}|[${route.Walk}](${route.href})|${route.time}|
`;
  });
  return markup;
};
module.exports = buildRouteTable;