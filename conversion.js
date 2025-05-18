// Conversion data
const conversionData = {
  pressure: {
    title: "Pressure Conversion",
    units: [
      { name: "Atmospheres", conversions: [
        { to: "inches Hg (0°C)", factor: 29.921 },
        { to: "inches H₂O", factor: 406.9 },
        { to: "kilogrammes per sq cm", factor: 1.0333 },
        { to: "milibars", factor: 1013.25 },
        { to: "millimetres Hg (0°C)", factor: 760.00 },
        { to: "pounds per sq in", factor: 14.696 },
        { to: "pascals", factor: 101325.000 }
      ]},
      // Add all other pressure units similarly
    ]
  },
  velocity: {
    title: "Velocity Conversion",
    units: [
      { name: "Feet per minute", conversions: [
        { to: "feet per second", factor: 0.01667 },
        { to: "kilogrammes per hour", factor: 0.01829 },
        { to: "knots", factor: 35.524 },
        { to: "metres per minute", factor: 0.3048 },
        { to: "miles per hour", factor: 0.01136 }
      ]},
      // Add all other velocity units
    ]
  },
  // Add data for other categories similarly
  temperature: {
    title: "Temperature Conversion",
    formulas: [
      { from: "Celsius", to: "Fahrenheit", formula: "(°C × 9/5) + 32" },
      { from: "Fahrenheit", to: "Celsius", formula: "(°F - 32) × 5/9" },
      { from: "Celsius", to: "Kelvin", formula: "°C + 273.15" },
      { from: "Kelvin", to: "Celsius", formula: "K - 273.15" }
    ]
  },
  volumetric: {
    title: "Volumetric Conversion",
    units: [
      {
        name: "Cubic centimetres",
        conversions: [
          { to: "cubic feet", factor: 3.531e-5 },
          { to: "cubic inches", factor: 0.06102 },
          { to: "imperial gallons", factor: 2.1997e-4 },
          { to: "litres", factor: 0.001 },
          { to: "pints", factor: 1.7598e-3 },
          { to: "quarts", factor: 8.7988e-4 }
        ]
      },
      {
        name: "Cubic feet",
        conversions: [
          { to: "cubic centimetres", factor: 28316.85 },
          { to: "cubic inches", factor: 1728.00 },
          { to: "imperial gallons", factor: 6.2288 },
          { to: "litres", factor: 28.32 },
          { to: "pints", factor: 59.84 },
          { to: "quarts", factor: 29.92 },
          { to: "US gallons", factor: 7.481 }
        ]
      },
      {
        name: "Cubic inches",
        conversions: [
          { to: "cubic centimetres", factor: 16.39 },
          { to: "cubic feet", factor: 5.787e-4 },
          { to: "imperial gallons", factor: 3.6047e-3 },
          { to: "litres", factor: 0.01639 },
          { to: "pints", factor: 0.5688 },
          { to: "quarts", factor: 0.2844 }
        ]
      },
      {
        name: "Imperial gallons",
        conversions: [
          { to: "cubic centimetres", factor: 4546.087 },
          { to: "cubic feet", factor: 0.160544 },
          { to: "cubic inches", factor: 277.42 },
          { to: "litres", factor: 4.54596 },
          { to: "US gallons", factor: 1.201 }
        ]
      },
      {
        name: "Litres",
        conversions: [
          { to: "cubic centimetres", factor: 1000.00 },
          { to: "cubic feet", factor: 0.03532 },
          { to: "cubic inches", factor: 61.025 },
          { to: "imperial gallons", factor: 0.21998 },
          { to: "pints", factor: 1.7598 },
          { to: "quarts", factor: 0.8799 },
          { to: "US gallons", factor: 0.2642 }
        ]
      },
      {
        name: "Pints",
        conversions: [
          { to: "cubic centimetres", factor: 568.26 },
          { to: "cubic feet", factor: 0.02007 },
          { to: "cubic inches", factor: 34.68 },
          { to: "litres", factor: 0.5682 },
          { to: "quarts", factor: 0.5 }
        ]
      },
      {
        name: "Quarts",
        conversions: [
          { to: "cubic centimetres", factor: 1136.522 },
          { to: "cubic feet", factor: 0.04014 },
          { to: "cubic inches", factor: 69.3548 },
          { to: "litres", factor: 1.13649 }
        ]
      },
      {
        name: "US gallons",
        conversions: [
          { to: "cubic centimetres", factor: 3786.44 },
          { to: "cubic feet", factor: 0.1337 },
          { to: "cubic inches", factor: 231.00 },
          { to: "imperial gallons", factor: 0.8327 },
          { to: "litres", factor: 3.785 }
        ]
      }
    ]
  },
  angularMeasure: {
    title: "Angular Measure Conversion",
    units: [
      {
        name: "Degrees",
        conversions: [
          { to: "minutes", factor: 60.00 },
          { to: "quadrants", factor: 0.0111 },
          { to: "radians", factor: 0.0175 }
        ]
      },
      {
        name: "Minutes",
        conversions: [
          { to: "degrees", factor: 0.0166 },
          { to: "quadrants", factor: 1.852e-4 },
          { to: "radians", factor: 2.909e-4 }
        ]
      },
      {
        name: "Quadrants",
        conversions: [
          { to: "degrees", factor: 90.00 },
          { to: "minutes", factor: 5400.00 },
          { to: "radians", factor: 1.571 }
        ]
      },
      {
        name: "Radians",
        conversions: [
          { to: "degrees", factor: 57.2957 },
          { to: "minutes", factor: 3437.75 },
          { to: "quadrants", factor: 0.6366 }
        ]
      }
    ]
  },
  angularVelocity: {
    title: "Angular Velocity Conversion",
    units: [
      {
        name: "Degrees per second",
        conversions: [
          { to: "radians per second", factor: 0.01745 },
          { to: "revolutions per second", factor: 2.788e-3 },
          { to: "revolutions per minute", factor: 0.1667 }
        ]
      },
      {
        name: "Radians per second",
        conversions: [
          { to: "degrees per second", factor: 57.30 },
          { to: "revolutions per second", factor: 0.1592 },
          { to: "revolutions per minute", factor: 9.5493 }
        ]
      },
      {
        name: "Revolutions per second",
        conversions: [
          { to: "degrees per second", factor: 360.00 },
          { to: "radians per second", factor: 6.283 },
          { to: "revolutions per minute", factor: 60.00 }
        ]
      },
      {
        name: "Revolutions per minute",
        conversions: [
          { to: "degrees per second", factor: 6.00 },
          { to: "radians per second", factor: 0.10472 },
          { to: "revolutions per second", factor: 0.01667 }
        ]
      }
    ]
  },
};

function showConversionTable(category) {
  const container = document.getElementById('conversionTableContainer');
  container.innerHTML = `<h2>${conversionData[category].title}</h2>`;

  if (category === 'temperature') {
    // Xử lý đặc biệt cho nhiệt độ
    container.innerHTML += `
      <!-- Giữ nguyên phần temperature như trước -->
    `;
  } else {
    // Tạo bảng hệ số chuyển đổi cho các mục khác
    container.innerHTML += `
      <table class="conversion-table">
        <thead>
          <tr>
            <th>From Unit</th>
            <th>To Unit</th>
            <th>Multiply By</th>
          </tr>
        </thead>
        <tbody>
          ${conversionData[category].units.flatMap(unit => 
            unit.conversions.map(conv => `
              <tr>
                <td>${unit.name}</td>
                <td>${conv.to}</td>
                <td>${conv.factor}</td>
              </tr>
            `)
          ).join('')}
        </tbody>
      </table>
      
      <div class="converter-tool">
        <h3>Conversion Calculator</h3>
        <div class="input-group">
          <input type="number" id="convInput" placeholder="Enter value">
          <select id="convFrom">
            ${conversionData[category].units.map(unit => `
              <option value="${unit.name}">${unit.name}</option>
            `).join('')}
          </select>
          <span>to</span>
          <select id="convTo">
            ${conversionData[category].units.flatMap(unit => 
              unit.conversions.map(conv => `
                <option value="${conv.to}">${conv.to}</option>
              `)
            ).join('')}
          </select>
        </div>
        <button onclick="calculateConversion('${category}')">Calculate</button>
        <div id="convResult" class="result-box"></div>
      </div>
    `;
  }
}

function convertTemperature() {
  const input = parseFloat(document.getElementById('tempInput').value);
  const fromUnit = document.getElementById('tempFrom').value;
  const resultsDiv = document.getElementById('tempResults');
  
  if (isNaN(input)) {
    resultsDiv.innerHTML = "Please enter a valid number";
    return;
  }

  let conversions = [];
  
  if (fromUnit === 'c') {
    conversions.push({ unit: "Fahrenheit", value: (input * 9/5) + 32 });
    conversions.push({ unit: "Kelvin", value: input + 273.15 });
  } else if (fromUnit === 'f') {
    conversions.push({ unit: "Celsius", value: (input - 32) * 5/9 });
    conversions.push({ unit: "Kelvin", value: (input - 32) * 5/9 + 273.15 });
  } else if (fromUnit === 'k') {
    conversions.push({ unit: "Celsius", value: input - 273.15 });
    conversions.push({ unit: "Fahrenheit", value: (input - 273.15) * 9/5 + 32 });
  }

  resultsDiv.innerHTML = `
    <h3>Conversion Results:</h3>
    <ul>
      ${conversions.map(conv => `
        <li>${conv.value.toFixed(2)} ${conv.unit}</li>
      `).join('')}
    </ul>
  `;
}

function calculateConversion(category) {
  console.log('Calculating for category:', category); // Debug
  
  const input = parseFloat(document.getElementById('convInput').value);
  const fromUnit = document.getElementById('convFrom').value;
  const toUnit = document.getElementById('convTo').value;
  const resultDiv = document.getElementById('convResult');

  console.log('Input values:', {input, fromUnit, toUnit}); // Debug

  if (isNaN(input)) {
    resultDiv.innerHTML = "Please enter a valid number";
    return;
  }

  // Tìm hệ số chuyển đổi
  let factor = 1;
  const fromData = conversionData[category].units.find(u => u.name === fromUnit);
  if (fromData) {
    const conversion = fromData.conversions.find(c => c.to === toUnit);
    if (conversion) factor = conversion.factor;
  }

  const result = input * factor;
  resultDiv.innerHTML = `${input} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`;
  console.log('Calculation result:', result); // Debug
}