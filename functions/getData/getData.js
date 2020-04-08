const { getVolunteers } = require('./sheetsAPI.js');



// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const volunteers = await getVolunteers();
    return {
      statusCode: 200,
      body: JSON.stringify(volunteers)
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
