// Calculates the distance in blocks from the headquarters
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  // Calculates the distance in feet from the headquarters
  function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264;
    return distanceFromHqInBlocks(blocks) * blockInFeet;
  }
  
  // Calculates the distance traveled in feet given the start and destination blocks
  function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264;
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * blockInFeet;
  }
  
  // Calculates the fare price based on the distance traveled
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceInFeet <= 400) {
        return 0; // Free sample fare
      } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const farePrice = Math.round((distanceInFeet - 400) * 0.02 * 100) / 100;
        return farePrice;
      } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25; // Fixed fare for distance over 2000 feet
      } else if (distanceInFeet > 2500) {
        return 'cannot travel that far'; // Cannot travel over 2500 feet
      }
    }

    module.exports = {
        distanceFromHqInBlocks,
        distanceFromHqInFeet,
        distanceTravelledInFeet,
        calculatesFarePrice,
      };