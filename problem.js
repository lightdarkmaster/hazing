/**
 * Calculate the total number of luggages and the number of luggages per van
 * @param {number} total - the total number of luggages
 * @param {number} vans - the number of vans
 * @param {number} luggages - the number of luggages per van
 */
function calculateLuggagesPerVan(total, vans, luggages) {
    // calculate the total number of luggages
    const howManyLuggages = Math.floor(total / luggages);
    console.log("total luggages: " + howManyLuggages);

    // calculate the number of luggages per van
    const howManyLuggagesPerVan = howManyLuggages / vans;
    console.log("total luggages per van: " + howManyLuggagesPerVan);
}

// call the function with the parameters
calculateLuggagesPerVan(total, vans, luggages);


const test=()=>{
    var total = 100;
    var vans = 10;
    var luggages = 10;
    calculateLuggagesPerVan(total, vans, luggages);
}

