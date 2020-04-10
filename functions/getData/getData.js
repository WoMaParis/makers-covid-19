const { getVolunteers } = require('./sheetsAPI.js');



// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  const data = Object.keys(event.queryStringParameters)[0]
  const param = event.queryStringParameters[data];
  console.log(`API request : ${data}(${param})`);
  

  try {
    let response
    switch (data) {
      case 'volunteers':
        response = await getVolunteers(param);
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

