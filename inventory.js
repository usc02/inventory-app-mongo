var items = [{name: 'Couch', description:'comfy Ikea couch'}, {name: 'laptop', description: 'old dell laptop'}];

exports.list = function (req, res) {
	res.render('index', {items: items});
};