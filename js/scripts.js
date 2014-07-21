var Tamagotchi = {
  initialize: function(input) {
    this.name = "Bob";
    this.foodLevel = 3;
    this.sleepLevel = 3;
    this.activityLevel = 3;
  },
  isAlive: function() {
    if (this.foodLevel >= 1) {
      return true;
    } else {
      return false;
    }
  },
  timePasses: function() {
    this.foodLevel = (this.foodLevel - 1);
    this.sleepLevel = (this.sleepLevel - 1);
    this.activityLevel = (this.activityLevel - 1);
  }
};

$(document).ready(function() {

  $("form#new-tamagotchi").submit(function(event) {
    event.preventDefault();

    $("#initial-form").hide();
    $("#bob").show();

    var myPet = Object.create(Tamagotchi);
    myPet.initialize();

    $("#btn1").click(function() {
      myPet.timePasses();

    $(".food-level").text(" " + myPet.foodLevel);
    $(".sleep-level").text(" " + myPet.sleepLevel);
    $(".activity-level").text(" " + myPet.activityLevel);

      if (!myPet.isAlive()) {
        $("#dead-bob").show();
        alert("You killed him.");
      }

    });
  });
});
