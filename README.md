# The API!

Keystone!

This is essentially a prototype. So keep it mini!

## TODOs

* check if meals added are automatically linked to the current user
* enter some meal data
* set up a search page - a new auth page (in the admin?)
  * search by text
  * filter by exercise
  * show results in text form
* create meal data visualisation component (mealvis) to apply to the search results

With those things done I should be able to search for a previously entered meal and use it to judge what to do. Next up will be adding meal & related data while seeing the relevant other meals

* Add a meal creation component in the search page
  * enter meal data
  * automatically linked to the current user (is this required?)
  * add Injection data (multiple) linked to the current meal
  * add Exercise data (multiple) linked to the current meal
  * add snack data (multiple) linked to the current meal
  * add Measurement data (multiple) linked to the current meal

Now I should be able to search for relevant meals, view them, and enter a new meal at the same time. Next up will be to get this thing public!

* Deploy to Heroku because there's already a proc file :P (maybe)
