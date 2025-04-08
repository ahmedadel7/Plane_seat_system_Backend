const goflightlabs = require('../services/goflightlabs');

module.exports.goflightlabs = async (req, res) => {
    try {
        const mailTO ={
            to: req.body.to,
            subject: req.body.subject,
            email_body: req.body.email_body
        }
        const mail = await goflightlabs.mailTo(mailTO);
        res.send({ mail });
    } catch (error) {
        res.status(500);
        res.send({
            error: error.message
        });
    }
}
