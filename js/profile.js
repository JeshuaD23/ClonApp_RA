

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.profile-tab');
  const grids = document.querySelectorAll('.profile-grid-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const targetTab = tab.dataset.tab;
      grids.forEach((grid) => {
        if (grid.id === `grid-${targetTab}`) {
          grid.style.display = 'grid';
        } else {
          grid.style.display = 'none';
        }
      });
    });
  });
  const profileAvatar = document.querySelector('.profile-avatar-img');
  if (profileAvatar) {
    profileAvatar.addEventListener('error', function() {
      this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23fe2c55"/><text x="50" y="62" font-size="34" font-family="Arial,sans-serif" font-weight="bold" fill="white" text-anchor="middle">MI</text></svg>';
    });
  }
  const thumbs = document.querySelectorAll('.profile-video-thumb img');
  thumbs.forEach((img, idx) => {
    img.addEventListener('error', function() {
      const colors = ['#1a102f', '#0f2027', '#200122', '#141e30', '#24243e'];
      const bg = colors[idx % colors.length];
      this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="266" viewBox="0 0 200 266"><rect width="100%" height="100%" fill="${encodeURIComponent(bg)}"/><text x="100" y="133" font-size="16" fill="%238888aa" text-anchor="middle" font-family="sans-serif">Video %23${idx + 1}</text></svg>`;
    });
  });
});
