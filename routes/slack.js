var express = require('express');
var router = express.Router();
var Mailgun = require('mailgun-js');



//Your api key, from Mailgun’s Control Panel
var api_key = 'key-78492ab5c011f10141869d291b39c160';

//Your domain, from the Mailgun Control Panel
var domain = 'mg.glawebdev.com';

//Your sending email address
var from_who = 'neilmdocherty@gmail.com';





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('slack');
});


// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
router.get('/join/:mail', function(req,res) {

    console.log('request');
    console.log(req.params.mail);

    //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    var data = {
    //Specify email data
      from: from_who,
    //The email to contact
      to: 'neilmdocherty@gmail.com',
    //Subject and text data
      subject: 'Can I join Slack?',
      html: req.params.mail
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            res.render('error', { error : err});
            console.log("got an error: ", err);
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            // res.render('submitted', { email : req.params.mail });
              // res.render('profiles/neil.pug', {
              //   name    : 'Neil Docherty',
              //   twitter : 'sdfsdf',
              //   blurb   : 'sdfsdfsdfsdf',
              //   github  : 'github'
              // });
            res.send('done')
            console.log(body);
        }
    });

});

module.exports = router;
