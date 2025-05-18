// Standard symbols data
const symbolsData = [
  { symbol: "+", meaning: "positive" },
  { symbol: "-", meaning: "negative" },
  { symbol: "Ω", meaning: "ohm" },
  { symbol: "∼", meaning: "ampere" },
  { symbol: "°", meaning: "degree" },
  { symbol: "″", meaning: "inch(es)" },
  { symbol: "′", meaning: "foot (feet)" },
  { symbol: "amp", meaning: "ampere" },
  { symbol: "Btu", meaning: "British thermal unit" },
  { symbol: "C", meaning: "Celsius" },
  { symbol: "cal", meaning: "calorie(s)" },
  { symbol: "Cal", meaning: "large calorie(s)" },
  { symbol: "cm", meaning: "centimeter(s)" },
  { symbol: "cos", meaning: "cosine" },
  { symbol: "cu.cm", meaning: "cubic centimeter(s)" },
  { symbol: "cu.in", meaning: "cubic inch(es)" },
  { symbol: "cu.ft", meaning: "cubic foot (feet)" },
  { symbol: "cu.m", meaning: "cubic meter(s)" },
  { symbol: "dB", meaning: "decibel" },
  { symbol: "deg", meaning: "degree" },
  { symbol: "ESHP", meaning: "equivalent shaft horsepower" },
  { symbol: "f", meaning: "farad" },
  { symbol: "F", meaning: "Fahrenheit" },
  { symbol: "ft", meaning: "foot (feet)" },
  { symbol: "ft.-lb", meaning: "foot-pound" },
  { symbol: "ft.-lbs", meaning: "foot-pounds" },
  { symbol: "g", meaning: "gram" },
  { symbol: "gal", meaning: "gallon" },
  { symbol: "HP", meaning: "horsepower" },
  { symbol: "hr", meaning: "hour" },
  { symbol: "Hz", meaning: "hertz" },
  { symbol: "in", meaning: "inch(es)" },
  { symbol: "in.hg", meaning: "inch(es) of mercury" },
  { symbol: "IPS", meaning: "inches per second" },
  { symbol: "k", meaning: "kilo" },
  { symbol: "K", meaning: "Kelvin" },
  { symbol: "kg", meaning: "kilogram" },
  { symbol: "Kg", meaning: "kilogram of force" },
  { symbol: "kHz", meaning: "kilohertz" },
  { symbol: "km", meaning: "kilometer" },
  { symbol: "kM", meaning: "kilomega" },
  { symbol: "kw", meaning: "kilowatt" },
  { symbol: "kw-hr", meaning: "kilowatt hour" },
  { symbol: "l", meaning: "liter" },
  { symbol: "lb", meaning: "pound" },
  { symbol: "lbs", meaning: "pounds" },
  { symbol: "m", meaning: "meter" },
  { symbol: "mb", meaning: "milibar" },
  { symbol: "mf or µf", meaning: "microfarad" },
  { symbol: "mHz", meaning: "milihertz" },
  { symbol: "MHz", meaning: "megahertz" },
  { symbol: "mi", meaning: "mile(s)" },
  { symbol: "mil", meaning: "0.001 inch" },
  { symbol: "mm", meaning: "millimeter" },
  { symbol: "MPH", meaning: "miles per hour" },
  { symbol: "mv", meaning: "millivolt" },
  { symbol: "neg", meaning: "negative" },
  { symbol: "oz", meaning: "ounce(s)" },
  { symbol: "pf or µµf", meaning: "picofarad" },
  { symbol: "pos", meaning: "positive" },
  { symbol: "PPH", meaning: "pounds per hour" },
  { symbol: "ppm", meaning: "parts per million" },
  { symbol: "PSI", meaning: "pounds per square inch" },
  { symbol: "PSIA", meaning: "pounds per square inch absolute pressure" },
  { symbol: "PSID", meaning: "pound per square inch differential pressure" },
  { symbol: "PSIG", meaning: "pound per square inch gage" },
  { symbol: "pt", meaning: "pint" },
  { symbol: "qt", meaning: "quart" },
  { symbol: "R", meaning: "Rankine" },
  { symbol: "rev", meaning: "revolution(s)" },
  { symbol: "RPM", meaning: "revolutions per minute" },
  { symbol: "sec", meaning: "second" },
  { symbol: "SHP", meaning: "shaft horsepower" },
  { symbol: "sin", meaning: "sine" },
  { symbol: "sq.cm", meaning: "square centimeter(s)" },
  { symbol: "sq.in", meaning: "square inch(es)" },
  { symbol: "sq.ft", meaning: "square foot (feet)" },
  { symbol: "sq.m", meaning: "square meter" },
  { symbol: "sq.mi", meaning: "square mile(s)" },
  { symbol: "sq.mil", meaning: "square mil" },
  { symbol: "tan", meaning: "tangent" },
  { symbol: "TEHP", meaning: "thrust equivalent horsepower" },
  { symbol: "THP", meaning: "thrust horsepower" },
  { symbol: "US", meaning: "United States" },
  { symbol: "V", meaning: "Volt" },
  { symbol: "yd", meaning: "yard" }
];

// Populate the table
function populateTable() {
  const tableBody = document.querySelector('#symbolsTable tbody');
  tableBody.innerHTML = '';

  symbolsData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.symbol}</td>
      <td>${item.meaning}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Filter table based on search input
function filterTable() {
  const input = document.getElementById('searchBox').value.toLowerCase();
  const rows = document.querySelectorAll('#symbolsTable tbody tr');

  rows.forEach(row => {
    const symbol = row.cells[0].textContent.toLowerCase();
    const meaning = row.cells[1].textContent.toLowerCase();
    if (symbol.includes(input) || meaning.includes(input)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  populateTable();
});