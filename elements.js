// Chemical elements data
const elementsData = [
  { symbol: "Ac", name: "Actinium" },
  { symbol: "Al", name: "Aluminum" },
  { symbol: "Am", name: "Americum" },
  { symbol: "Sb", name: "Antimony" },
  { symbol: "Ar", name: "Argon" },
  { symbol: "As", name: "Arsenic" },
  { symbol: "At", name: "Astatine" },
  { symbol: "Ba", name: "Barium" },
  { symbol: "Bk", name: "Berkelium" },
  { symbol: "Be", name: "Beryllium" },
  { symbol: "Bi", name: "Bismuth" },
  { symbol: "B", name: "Boron" },
  { symbol: "Br", name: "Bromine" },
  { symbol: "Cd", name: "Cadmium" },
  { symbol: "Ca", name: "Calcium" },
  { symbol: "Cf", name: "Californium" },
  { symbol: "C", name: "Carbon" },
  { symbol: "Ce", name: "Cerium" },
  { symbol: "Cs", name: "Cesium" },
  { symbol: "Cl", name: "Chlorine" },
  { symbol: "Cr", name: "Chromium" },
  { symbol: "Co", name: "Cobalt" },
  { symbol: "Cb", name: "Columbium" },
  { symbol: "Cu", name: "Copper" },
  { symbol: "Cm", name: "Curium" },
  { symbol: "Dy", name: "Dysprosium" },
  { symbol: "Es", name: "Einsteinium" },
  { symbol: "Er", name: "Erbium" },
  { symbol: "Eu", name: "Europium" },
  { symbol: "Fm", name: "Fermium" },
  { symbol: "F", name: "Fluorine" },
  { symbol: "Fr", name: "Francium" },
  { symbol: "Gd", name: "Gadolinium" },
  { symbol: "Ga", name: "Gallium" },
  { symbol: "Ge", name: "Germanium" },
  { symbol: "Au", name: "Gold" },
  { symbol: "Hf", name: "Hafnium" },
  { symbol: "He", name: "Helium" },
  { symbol: "Ho", name: "Holmium" },
  { symbol: "H", name: "Hydrogen" },
  { symbol: "In", name: "Indium" },
  { symbol: "I", name: "Iodine" },
  { symbol: "Ir", name: "Iridium" },
  { symbol: "Fe", name: "Iron" },
  { symbol: "Kr", name: "Krypton" },
  { symbol: "La", name: "Lanthanum" },
  { symbol: "Lr", name: "Lawrencium" },
  { symbol: "Pb", name: "Lead" },
  { symbol: "Li", name: "Lithium" },
  { symbol: "Lu", name: "Lutetium" },
  { symbol: "Mg", name: "Magnesium" },
  { symbol: "Mn", name: "Manganese" },
  { symbol: "Md", name: "Mendelevium" },
  { symbol: "Hg", name: "Mercury" },
  { symbol: "Mo", name: "Molybdenum" },
  { symbol: "Nd", name: "Neodymium" },
  { symbol: "Ne", name: "Neon" },
  { symbol: "Np", name: "Neptunium" },
  { symbol: "Ni", name: "Nickel" },
  { symbol: "Nb", name: "Niobium" },
  { symbol: "N", name: "Nitrogen" },
  { symbol: "No", name: "Nobelium" },
  { symbol: "Os", name: "Osmium" },
  { symbol: "O", name: "Oxygen" },
  { symbol: "Pd", name: "Palladium" },
  { symbol: "P", name: "Phosphorus" },
  { symbol: "Pt", name: "Platinum" },
  { symbol: "Pu", name: "Plutonium" },
  { symbol: "Po", name: "Polonium" },
  { symbol: "K", name: "Potassium" },
  { symbol: "Pr", name: "Praseodymium" },
  { symbol: "Pm", name: "Promethium" },
  { symbol: "Pa", name: "Protactinium" },
  { symbol: "Ra", name: "Radium" },
  { symbol: "Rn", name: "Radon" },
  { symbol: "Re", name: "Rhenium" },
  { symbol: "Rh", name: "Rhodium" },
  { symbol: "Rb", name: "Rubidium" },
  { symbol: "Ru", name: "Ruthenium" },
  { symbol: "Sm", name: "Samarium" },
  { symbol: "Sc", name: "Scandium" },
  { symbol: "Se", name: "Selenium" },
  { symbol: "Si", name: "Silicon" },
  { symbol: "Ag", name: "Silver" },
  { symbol: "Na", name: "Sodium" },
  { symbol: "Sr", name: "Strontium" },
  { symbol: "S", name: "Sulfur" },
  { symbol: "Ta", name: "Tantalum" },
  { symbol: "Tc", name: "Technetium" },
  { symbol: "Te", name: "Tellurium" },
  { symbol: "Tb", name: "Terbium" },
  { symbol: "Tl", name: "Thallium" },
  { symbol: "Th", name: "Thorium" },
  { symbol: "Tm", name: "Thulium" },
  { symbol: "Sn", name: "Tin" },
  { symbol: "Ti", name: "Titanium" },
  { symbol: "W", name: "Tungsten" },
  { symbol: "U", name: "Uranium" },
  { symbol: "V", name: "Vanadium" },
  { symbol: "Xe", name: "Xenon" },
  { symbol: "Yb", name: "Ytterbium" },
  { symbol: "Y", name: "Yttrium" },
  { symbol: "Zn", name: "Zinc" },
  { symbol: "Zr", name: "Zirconium" }
];

// Populate the table
function populateTable() {
  const tableBody = document.querySelector('#elementsTable tbody');
  tableBody.innerHTML = '';

  elementsData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${item.symbol}</strong></td>
      <td>${item.name}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Filter table based on search input
function filterTable() {
  const input = document.getElementById('searchBox').value.toLowerCase();
  const rows = document.querySelectorAll('#elementsTable tbody tr');

  rows.forEach(row => {
    const symbol = row.cells[0].textContent.toLowerCase();
    const name = row.cells[1].textContent.toLowerCase();
    if (symbol.includes(input) || name.includes(input)) {
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