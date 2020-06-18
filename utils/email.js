const sender = require('../emails/smtp-setup');

module.exports.sendMail = function(req, template, emailTo, data, callback) {
  // get the host url
//   const uri = req ? req.protocol + '://' + req.headers.host : '';
  if(!data.hasOwnProperty("cc")){
    data.cc = null;
  }
  sender.send({
    template: template,
    message: {
      to: emailTo,
      cc: data.cc
    },
    locals: {
      data: data
    }
  })
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
        console.log(err);
        
      callback(err, null);
    });
}