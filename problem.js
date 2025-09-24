const total = 1000000000;
const vans = 6;
const luggages = 50000000;

//problem 1
const howManyLuggages = Math.floor(total / luggages);
console.log("total luggages: " + howManyLuggages);


//problem 2
const howManyLuggagesPerVan = howManyLuggages / vans;
console.log("total luggages per van: " + howManyLuggagesPerVan);

