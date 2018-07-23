const apiai = require('apiai-promise');
const apiaiClient = apiai('d34b01a984d24bd381e0aea0c55f65ae');

module.exports = async function smallTalkApiai(text_message) {
    const response = await apiaiClient.textRequest(text_message, {
        sessionId: 'botcube_co'
       })
    return(response
        .result
        .fulfillment
        .speech
    )
}