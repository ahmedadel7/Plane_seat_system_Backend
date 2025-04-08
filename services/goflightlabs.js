const axios = require('axios');

module.exports.mailTo = async (mailTO) => {
    const requestUrl = `https://prod-27.centralus.logic.azure.com:443/workflows/cced55b42b254109816e97112d6205f7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SFcor8Qm4efFHzPPuDL4ECueZrmsqozKaxzbF_NpZNw`;

    try {
        const mailcont ={
            to: mailTO.to,
            subject: mailTO.subject,
            email_body: mailTO.email_body
        }
        const {mailTO,data} = await axios.post(requestUrl);
        return data;
    } catch (error) {
        throw new Error('Error while fetching all flights');
    }
};
