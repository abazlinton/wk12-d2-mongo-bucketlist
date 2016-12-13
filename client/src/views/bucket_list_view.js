var Country = require('../bucket_list/country');

var BucketListView = function(bucketList) {
  this.bucketList = bucketList;
};

BucketListView.prototype = {

  

  // bindEvents: function(){
  //   var interestButton = document.getElementById('interest-button');
  //   interestButton.onclick = function() {
  //     this.bank.payInterest(10);
  //     this.render();
  //   }.bind(this);
  //
  //   var form = document.getElementById('add-account');
  //   form.onsubmit = function(e){
  //     e.preventDefault();
  //
  //     var account = {
  //       owner: e.target.owner.value,
  //       amount: parseFloat(e.target.amount.value),
  //       type: e.target.type.value
  //     };
  //
  //     this.bank.addAccount(new Account(account));
  //     this.render();
  //     this.saveAccount(account);
  //   }.bind(this);
  // },

  // saveAccount: function(account){
  //   var url = "http://localhost:3000/accounts";
  //   var request = new XMLHttpRequest();
  //   request.open("POST", url);
  //   request.setRequestHeader("Content-Type", "application/json");
  //
  //   request.onload = function(){
  //     if(request.status === 200){
  //       console.log("Account added!!!");
  //     }
  //
  //   };
  //   request.send(JSON.stringify(account));
  //
  // },

  render: function() {

  }
};

module.exports = BucketListView;
