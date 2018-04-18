var keystone = require("keystone");
var Meal = keystone.list("Meal");
var Measurement = keystone.list("Measurement");
var Snack = keystone.list("Snack");
var Injection = keystone.list("Injection");
var Exercise = keystone.list("Exercise");

exports = module.exports = async function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = "meals";

	//get a list of meals
	locals.meals = await Meal.model
		.find()
		.populate("user")
		.exec();

	locals.meals.forEach(async meal => {
		meal.measurements = await Measurement.model
			.find()
			.where("meal", meal.id)
			.exec();
	});

	// Render the view
	view.render("meals");
};
