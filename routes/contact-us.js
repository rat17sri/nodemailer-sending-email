const express = require('express');
const router = express.Router();

const Email = require('../utils/email');

router.post('/email', (req, res) => {

    Email.sendMail(req, 'contact-us', 'info@advancetranscription.com', req.body, (err, result) => {
        if (err) {
            
            return res.json({
                message: 'Error in sending',
                success: false,
                error: err
            })
        }

        return res.json({
            message: 'Email sent',
            success: true,
            result: result
        })

    });

});

module.exports = router;