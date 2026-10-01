

document.addEventListener('DOMContentLoaded', () => {
  const chatItems = document.querySelectorAll('.chat-item');
  chatItems.forEach((item) => {
    item.addEventListener('click', () => {
      const unreadDot = item.querySelector('.unread-badge-dot');
      if (unreadDot) {
        unreadDot.remove();
        item.classList.remove('unread');
      }
    });
  });
  const avatars = document.querySelectorAll('.chat-avatar, .story-avatar');
  avatars.forEach((img, idx) => {
    img.addEventListener('error', function() {
      const colors = ['#fe2c55', '#25f4ee', '#7928ca', '#ff007f', '#0070f3'];
      const color = colors[idx % colors.length];
      this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30" fill="${encodeURIComponent(color)}"/><text x="30" y="38" font-size="22" font-family="Arial,sans-serif" font-weight="bold" fill="white" text-anchor="middle">U</text></svg>`;
    });
  });
});
