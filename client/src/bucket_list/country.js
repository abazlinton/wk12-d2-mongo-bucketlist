var Country = function(data) {
  this.data = data;
  this.visited = false;
};


Country.prototype = {

  save: function() {
    console.log("this", this);
    var url = 'http://localhost:3000/countries';
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function() {
      if(request.status === 200) {
      }
    };
    request.send(JSON.stringify(this));
  }

}
module.exports = Country;
