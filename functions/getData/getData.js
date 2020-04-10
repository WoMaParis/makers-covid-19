const { getVolunteers, getOrganisations, getOrders, getMilestones } = require('./sheetsAPI.js');



// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  const data = Object.keys(event.queryStringParameters)[0]
  const param = event.queryStringParameters[data];
  console.log(`API request ~~> ${data}(${param})`);
  

  try {
    let response
    switch (data) {
      case 'volunteers':
        response = await getVolunteers(param);
        break;
      case 'organisations':
        response = await getOrganisations(param);
        break;
      case 'orders':
        response = await getOrders(param);
        break;
      case 'milestones':
        response = await getMilestones();
        break;
      default:
        return { statusCode: 404, body: 'No API with this name' }
    }
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

