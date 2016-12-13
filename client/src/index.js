var BucketListView = require("./views/bucket_list_view.js");
var BucketList = require("./bucket_list/bucket_list.js");
var Country = require("./bucket_list/country");

// var sampleAccounts = require('./sample.json');

var countries;

window.onload = function() {

  var url = "https://restcountries.eu/rest/v1/all";

  makeRequest(url, requestComplete);
  var bucketList = new BucketList();
  var bucketListView = new BucketListView(countries);
  var addButton = document.getElementById('add-country');

  addButton.onclick = function(){
    var countrySelect = document.getElementById('country-select');
    var countrySelectedIndex = countrySelect.value;
    var country = new Country(countries[parseInt(countrySelectedIndex)])
    bucketList.addCountry(country);
  };


  // var bank = new Bank();
  //
  // var url = "http://localhost:3000/accounts";
  //
  // var request = new XMLHttpRequest();
  // request.open('GET', url);
  // request.onload = function(){
  //   if (request.status == 200){
  //     var sampleAccounts = JSON.parse(request.responseText);
  //     for(account of sampleAccounts) {
  //       bank.addAccount(new Account(account));
  //     }
  //     var bankView = new BankView(bank);
  //     bankView.bindEvents();
  //     bankView.render();
  //   };
  // };
  // request.send();

};

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var requestComplete = function(){
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  populateList(countries);

};

var populateList = function(countries){
  var select = document.getElementById('country-select');
  for (i=0; i<countries.length; i++){
    var option = document.createElement('option');
      option.innerText = countries[i].name;
      option.value = i;
      select.appendChild(option);
    };
}.bind(this);
