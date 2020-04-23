const sheetsAPI = require('./sheetsAPI.js');



// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  const data = Object.keys(event.queryStringParameters)[0]
  const param = event.queryStringParameters[data];
  console.log(`API request ~~> ${data}(${param})`);
  

  try {
    let response
    switch (data) {
      case 'volunteers':
        response = await sheetsAPI.getVolunteers(param);
        break;
      case 'organisations':
        response = await sheetsAPI.getOrganisations(param);
        break;
      case 'orders':
        response = await sheetsAPI.getOrders(param);
        break;
      case 'stocks':
        response = await sheetsAPI.getStocks(param);        
        break;
      case 'milestones':
        response = await sheetsAPI.getMilestones();
        break;
      case 'models':
        response = await sheetsAPI.getModels(param);
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

