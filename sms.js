var sms = module.exports;

var part1 = "Hi, this is a reminder to complete your 10 minutes of daily meditation. Your participant number is ";
var part2 = ".\nThis is your day ";
var part3 = " of meditation.\n\nRegards,\nBrenda"

sms.send = function sms_send(req, res) {
	res.json(200, {});
	req.models.sms.find({ }, function (err, smss) {
		smss.forEach(function (sms, i) {
			var accountSid = 'AC5c1eb49f29087d8b125fcd4d57e7d162';
			var authToken = "42c9e857eb2e024f7bcd74ef64bd086f";
			var client = require('twilio')(accountSid, authToken);
  
  		  	console.log(part1 + sms.name + part2 + sms.day + part3);
			client.sms.messages.create({
			    body: part1 + sms.name + part2 + sms.day + part3,
			    to: sms.number,
			    from: "+1 720-408-2464"
			}, function(err, message) {
				console.log(message.sid);
			});
		});
	});
}