const carPassing = function (cars, speed) {
  // Your code in here ...
  var newCar = {
    time: Date.now(),
    speed: speed
  }
  cars.push(newCar);
  return cars;
}

