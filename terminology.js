// let terminologyData = [];

// fetch('term.json')
//   .then(response => response.json())
//   .then(data => {
//     terminologyData = data;
//     renderTable(data);
//   });

// function renderTable(data) {
//   const tbody = document.querySelector('#terminologyTable tbody');
//   tbody.innerHTML = '';

//   data.forEach(entry => {
//     const row = document.createElement('tr');

//     const termCell = document.createElement('td');
//     termCell.textContent = entry.term;

//     const defCell = document.createElement('td');
//     defCell.textContent = entry.definition;

//     row.appendChild(termCell);
//     row.appendChild(defCell);

//     tbody.appendChild(row);
//   });
// }

// function filterTable() {
//   const query = document.getElementById('searchBox').value.toLowerCase();
//   const filtered = terminologyData.filter(entry =>
//     entry.term.toLowerCase().includes(query) ||
//     entry.definition.toLowerCase().includes(query)
//   );
//   renderTable(filtered);
// }





let terminologyData = [];
let currentIndex = 0;
const batchSize = 9;
let isLoading = false;

fetch('term.json')
  .then(response => response.json())
  .then(data => {
    terminologyData = data;
    loadNextBatch();
    setupScrollListener();
  });

function loadNextBatch() {
  if (isLoading || currentIndex >= terminologyData.length) return;

  isLoading = true;
  const nextBatch = terminologyData.slice(currentIndex, currentIndex + batchSize);
  renderTable(nextBatch);
  currentIndex += batchSize;
  isLoading = false;
}

function renderTable(data) {
  const tbody = document.querySelector('#terminologyTable tbody');

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

function setupScrollListener() {
  const container = document.querySelector('.table-container');
  container.addEventListener('scroll', () => {
    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
      loadNextBatch();
    }
  });
}

function filterTable() {
  const query = document.getElementById('searchBox').value.toLowerCase();
  const filtered = terminologyData.filter(entry =>
    entry.term.toLowerCase().includes(query) ||
    entry.definition.toLowerCase().includes(query)
  );

  const tbody = document.querySelector('#terminologyTable tbody');
  tbody.innerHTML = '';
  currentIndex = 0;

  renderTable(filtered);
}

