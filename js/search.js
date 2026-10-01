

document.addEventListener('DOMContentLoaded', () => {
  const chips = document.querySelectorAll('.category-chip');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
  const searchInput = document.getElementById('mainSearchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          console.log(`Buscando tendencias para: ${query}`);
        }
      }
    });
  }
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('error', function() {
      const parent = this.parentElement;
      const isAvatar = this.classList.contains('explore-author-img');
      if (isAvatar) {
        this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><circle cx="15" cy="15" r="15" fill="%23fe2c55"/><text x="15" y="19" font-size="12" fill="white" text-anchor="middle" font-weight="bold">U</text></svg>';
      } else {
        this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400"><rect width="100%" height="100%" fill="%231a1a24"/><text x="150" y="200" font-size="20" fill="%23555566" text-anchor="middle" font-family="sans-serif">TikTok Video</text></svg>';
      }
    });
  });
});
