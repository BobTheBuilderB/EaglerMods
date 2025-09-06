function renderMods(modsToShow) {
  const list = document.getElementById('mods-list');
  list.innerHTML = '';
  if (modsToShow.length === 0) {
    list.innerHTML = '<p>No mods found.</p>';
    return;
  }
  modsToShow.forEach(mod => {
    const card = document.createElement('div');
    card.className = 'mod-card';
    card.innerHTML = `
      <img src="${mod.img}" alt="${mod.name}">
      <div class="content">
        <h2>${mod.name}</h2>
        <div class="version">Version: ${mod.version}</div>
        <p>${mod.description}</p>
        <a href="${mod.download}" target="_blank">Download</a>
      </div>
    `;
    list.appendChild(card);
  });
}

// Initial render
renderMods(mods);

document.getElementById('version-filter').addEventListener('change', function() {
  filterMods();
});

document.getElementById('search').addEventListener('input', function() {
  filterMods();
});

function filterMods() {
  const version = document.getElementById('version-filter').value;
  const search = document.getElementById('search').value.toLowerCase();
  let filtered = mods;
  if (version !== 'all') {
    filtered = filtered.filter(mod => mod.version === version);
  }
  if (search) {
    filtered = filtered.filter(mod => mod.name.toLowerCase().includes(search));
  }
  renderMods(filtered);
}
