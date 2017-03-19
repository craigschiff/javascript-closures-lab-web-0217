const app = "I don't do much."

function bumpCounter() {
  var counter = 0
  function getBumps() {
    return counter
  }
  function addBump () {
    counter += 1
    return counter
  }
  return {getBumps, addBump}
}

// const threePointTurn

function createAnimal(type) {
  function deadlyDevice(device) {
    return {type, device}
  }
  return deadlyDevice
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinCannon = {animalType: 'Shark', deadlyDevice: 'Cannon' }
var sharkWithFrickinLaserbeam = {animalType: 'Shark', deadlyDevice: 'Laserbeam' }
