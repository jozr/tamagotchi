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
    $(".message-from-bob").text('"My name is Bob. Will you play with me?"');

    var myPet = Object.create(Tamagotchi);
    myPet.initialize();

    $("#btn1").click(function() {
      myPet.timePasses();

    $(".food-level").text(" " + myPet.foodLevel);
    $(".sleep-level").text(" " + myPet.sleepLevel);
    $(".activity-level").text(" " + myPet.activityLevel);

      if (!myPet.isAlive()) {
        $("#rip-bob").fadeOut(30000, function() {
        });
        $("#dead-bob").show();
        $("#bob").hide();

        // $("#dead-bob").append('<iframe width="420" height="315" src="http://www.youtube.com/embed/VQAoI977oNI?rel=0" frameborder="0" allowfullscreen></iframe>');
      }
    });

    $(".play-btn").click(function()  {
        $(".message-from-bob").text('"I am so sleepy now. Tuck me in?"');
    });
    $(".sleep-btn").click(function()  {
        $(".message-from-bob").text('"I feel faint. Please feed me."');
    });
    $(".feed-btn").click(function()  {
        $(".message-from-bob").text('"I feel like playing again!"');
    });

  });
});
