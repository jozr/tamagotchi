describe("Tamagotchi", function()  {
  describe("initialize", function() {
    it("sets the name and other properties", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Bob");
      myPet.name.should.equal("Bob");
      myPet.foodLevel.should.equal(2);
      myPet.sleepLevel.should.equal(2);
      myPet.activityLevel.should.equal(2);
    });
  });
  describe("timePasses", function() {
    it("decreases the amount of food the Tamogatchi has left by 1", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize();
      myPet.timePasses();
      myPet.foodLevel.should.equal(1);
    });
  });
  describe("isAlive", function () {
    it("is alive if the food level is above 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize();
      myPet.isAlive().should.equal(true);
    });
    it("is dead if the food level is 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  });

});
