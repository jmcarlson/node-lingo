var BeGlobal = require('node-beglobal');
//initialize the BeGlobal API
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'RQ6MKBDNClRSZCQnsbSbAQ%3D%3D'
});

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	translateText: function(req, res) {
		console.log(req.body);
		beglobal.translations.translate(
			req.body,
			// {text: req.body.text, from: req.body.from, to: req.body.to},
			function(err, results) {
			if (err) {
				console.log('Translation error: ', err);
				res.status(500).end('No translation found');
			}
			else {
				res.status(200).end(results.translation);
			}
  		});

		// console.log('translate func fired');
		// res.render('translate');
	},
	quiz: function(req, res) {
		res.render('quiz');
	},
	progress: function(req, res) {
		res.render('progress');
	},
	translate: function(req, res) {
		res.render('translate');
	}
};

module.exports = indexController;