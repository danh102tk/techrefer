let dictionary = {};

fetch('dictionary.json')
  .then(response => response.json())
  .then(data => {
    dictionary = data;
  });

function updateSuggestions() {
  const input = document.getElementById('searchBox').value.toLowerCase();
  const suggestions = document.getElementById('suggestions');
  suggestions.innerHTML = '';

  if (!input) return;

  Object.keys(dictionary)
    .filter(word => word.startsWith(input))
    .forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      li.onclick = () => selectWord(word);
      suggestions.appendChild(li);
    });
}

function selectWord(word) {
  const lowerWord = word.toLowerCase();  // ← chuẩn hoá về chữ thường
  document.getElementById('searchBox').value = word;
  document.getElementById('suggestions').innerHTML = '';
  const wordData = dictionary[lowerWord];

  if (wordData) {
    document.getElementById('resultVi').textContent = wordData.vi;
    document.getElementById('resultEn').textContent = wordData.en;
  } else {
    document.getElementById('resultVi').textContent = 'Không tìm thấy từ.';
    document.getElementById('resultEn').textContent = 'Not found.';
  }
}
