// Show current year and last modified date
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');
yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempC, speedKmh) {
  // Convert to imperial
  const tempF = tempC * 9/5 + 32;
  const speedMph = speedKmh / 1.609;
  
  // Only calculate if temp ≤ 50°F and speed > 3 mph
  if (tempF <= 50 && speedMph > 3) {
    const chillF = 35.74 + 0.6215 * tempF - 35.75 * speedMph ** 0.16 + 0.4275 * tempF * speedMph ** 0.16;
    const chillC = (chillF - 32) * 5/9;
    return chillC.toFixed(1) + " °C";
  } else {
    return "N/A";
  }
}

// Use static data
const temp = parseFloat(document.getElementById('temp').textContent);
const speed = parseFloat(document.getElementById('speed').textContent);
const chill = calculateWindChill(temp, speed);
document.getElementById('chill').textContent = chill;

