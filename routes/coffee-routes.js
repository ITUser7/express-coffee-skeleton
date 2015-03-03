exports.findAll = function(req, res){
	res.send([{name:'coffee1'}, {name:'coffee2'}, {name:'coffee3'}]);
};
exports.findById = function(req, res){
	res.send({id:req.params.id, name: "The Name", description: "description"});
};
exports.addCoffee = function(req, res) {id:req.params.id, name: "The Name", description: "description"}
