// add scripts


Car = function(){
  this.state = "off";
  this.owners = [];
  this.passengers = [];
  this.current_owner = "manufacturer";
};

Car.prototype.sale = function(buyer){
  this.owners.push(buyer);
  this.current_owner = buyer;
};
Car.prototype.paint= function(color){
  this.color = color;
};
Car.prototype.start= function(){
  this.state = "on";
};
Car.prototype.off= function(){
  this.state = "off";
};
Car.prototype.driveTo= function(place){
  if (this.state === "on"){
    console.log("You are now driving to " + place +".");
  }else{
    console.log("Sorry, this car is off");
  }
};
Car.prototype.park= function(){
  if(this.state === "off"){
    console.log("Parked");
  }else{
    console.log("Sorry the cat is still on");
  }

};
Car.prototype.pickUp = function(passenger){
    if(this.state === "on"){
      console.log("You have picked up "+ passenger);
    }
    this.passengers.push(passenger);
};
Car.prototype.dropOff = function(passenger){
    if(this.state === "on"){
     var pasengerIndex = this.passengers.indexOf(passenger);
     this.passengers.splice(pasengerIndex, 1);
     console.log("You have dropped off "+ passenger);
    }
};

$(document).on('ready', function() {
  console.log('sanity check!');
  beetle = new Car();
  beetle.sale("Brandon");
  beetle.start();
  beetle.paint("blue");
  beetle.driveTo("Ketchups house");
  console.log(beetle);
  beetle.pickUp("Ketchup");
  console.log(beetle);
  beetle.dropOff("Ketchup");
  beetle.off();
  console.log(beetle);
  beetle.park();
});
