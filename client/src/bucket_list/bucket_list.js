var BucketList = function() {
  this.countries = [];
};

BucketList.prototype = {
  addCountry: function(country) {
    this.countries.push(country);
    console.log(country.visited);
  }
};

module.exports = BucketList;
