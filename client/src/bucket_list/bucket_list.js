var BucketList = function() {
  this.countries = [];
};

BucketList.prototype = {
  addCountry: function(country) {
    this.countries.push(country);
    console.log(country.visited);
  }
  ,
  getCountries: function(){

    var url = 'http://localhost:3000/countries';
      var request = new XMLHttpRequest();
      request.open("GET", url);
      request.onload = function() {
        if(request.status === 200) {
          var countries = JSON.parse(request.responseText);
          for(country of countries) {
            this.addCountry(new Country(account));
          }
          this.onFetchSuccess();
        }
      }.bind(this);
      request.send(null);
  }

};

module.exports = BucketList;
