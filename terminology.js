let terminologyData = [];

fetch('term.json')
  .then(response => response.json())
  .then(data => {
    terminologyData = data;
    renderTable(data);
  });

function renderTable(data) {
  const tbody = document.querySelector('#terminologyTable tbody');
  tbody.innerHTML = '';

  data.forEach(entry => {
    const row = document.createElement('tr');

    const termCell = document.createElement('td');
    termCell.textContent = entry.term;

    const defCell = document.createElement('td');
    defCell.textContent = entry.definition;

    row.appendChild(termCell);
    row.appendChild(defCell);

    tbody.appendChild(row);
  });
}

function filterTable() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const filtered = terminologyData.filter(entry =>
    entry.term.toLowerCase().includes(query) ||
    entry.definition.toLowerCase().includes(query)
  );
  renderTable(filtered);
}
