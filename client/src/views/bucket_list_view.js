var Country = require('../bucket_list/country');

var BucketListView = function(bucketList) {
  this.bucketList = bucketList;
};

BucketListView.prototype = {

  // bindEvents: function(){
  //   var addCountryButton = document.getElementById('add-country');
  //   addCountryButton.onclick = function() {
  //     this.bucketList.addCountry()
  //     this.render();
  //   }.bind(this);
  
  //   var form = document.getElementById('add-account');
  //   form.onsubmit = function(e){
  //     e.preventDefault();
  
  //     var account = {
  //       owner: e.target.owner.value,
  //       amount: parseFloat(e.target.amount.value),
  //       type: e.target.type.value
  //     };
  
  //     this.bank.addAccount(new Account(account));
  //     this.render();
  //     this.saveAccount(account);
  //   }.bind(this);
  // },

  saveCountry: function(country){
    var url = "http://localhost:3000/countries";
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    };
  
  },

  render: function() {

  }
};

module.exports = BucketListView;
