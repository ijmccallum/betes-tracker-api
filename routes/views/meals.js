var keystone = require("keystone");
var Meal = keystone.list("Meal");

exports = module.exports = async function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = "meals";

	//get a list of meals
	locals.meals = await Meal.model.find().exec();

	// Render the view
	view.render("meals");
};
