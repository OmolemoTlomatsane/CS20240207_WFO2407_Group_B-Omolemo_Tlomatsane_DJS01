/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = ({vel, acc, time}) => {
  const acc_in_km_per_h_squared = acc *(0.001)* Math.pow(3600,2)
  const time_in_hours = time/3600
  return vel + (acc_in_km_per_h_squared*(time_in_hours))
}

const d2 = d + (vel*(time/3600)) //calcultes new distance
const rf = fuel - fbr*(time) //calculates remaining fuel
const vel2 = calcNewVel({vel, acc, time}) //calculates new velocity based on acceleration



console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






