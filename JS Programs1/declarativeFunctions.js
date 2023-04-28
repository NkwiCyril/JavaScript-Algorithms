// writing concise declarative functions with ES6
// Only change code below this line
const bicycle = {
    gear: 2,
    OGGear: 4,
    setGear(newGear) {
        this.gear = newGear;
    }
    // setGear: function(newGear) {
    //   this.gear = newGear;
    // }
  };
  // Only change code above this line
  var change = bicycle.setGear(3,34);
  console.log(change)
  
// use class syntax to define a constructor function