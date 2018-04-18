/**
 * Every meal event that happens.
 * can have multiple injections, but they're separate and reference the relevant meal
 * can have multiple excercises, ditto
 * can have multiple measurements, ditto
 */
var keystone = require("keystone");
var Types = keystone.Field.Types;

var Meal = new keystone.List("Meal");

Meal.add({
	title: { type: String, required: true, index: true, initial: true },
	carbs: { type: Number, initial: true },
	datetime: { type: Types.Datetime, default: Date.now, initial: true },
	user: {
		type: Types.Relationship,
		ref: "User",
		initial: true
	} /* May not be required */,
	public: {
		type: Boolean,
		initial: true
	} /* would make the meal publicly searchable by other users */
});

Meal.defaultColumns = "title";
Meal.register();
