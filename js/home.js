

document.addEventListener('DOMContentLoaded', () => {
  const feedContainer = document.getElementById('feedContainer');
  const muteBtn = document.getElementById('muteToggleBtn');
  const muteText = document.getElementById('muteText');

  const TOTAL_VIDEOS = 10;
  let isMuted = true;
  let currentActiveIndex = 0;
  const videoData = [
    {
      id: 1,
      author: 'sergio_07',
      avatar: 'perfil_1.jpg',
      caption: 'JSKJSKJSKJSKSJKSJK',
      music: 'Sonido original - sergio_07 🎵',
      likes: '142.8K',
      comments: '1,280',
      bookmarks: '12.4K',
      shares: '5,320'
    },
    {
      id: 2,
      author: 'ramses_',
      avatar: 'perfil_2.jpg',
      caption: 'I LOVE LIRU SISA',
      music: 'Sonido original - ramses_ 🎵',
      likes: '89.4K',
      comments: '640',
      bookmarks: '35.1K',
      shares: '18.9K'
    },
    {
      id: 3,
      author: 'luis_fernando',
      avatar: 'perfil_3.jpg',
      caption: 'scuba',
      music: 'Sonido original - luis_fernando 🎵',
      likes: '45.1K',
      comments: '310',
      bookmarks: '8,200',
      shares: '1,450'
    },
    {
      id: 4,
      author: 'Jeshua._23',
      avatar: 'perfil_4.jpg',
      caption: 'Temazo',
      music: 'Sonido original - Jeshua._23 🎵',
      likes: '310.5K',
      comments: '4,120',
      bookmarks: '45.2K',
      shares: '28.1K'
    },
    {
      id: 5,
      author: 'sergio_07',
      avatar: 'perfil_1.jpg',
      caption: 'Video de mi galeria xd',
      music: 'Sonido original - sergio_07 🎵',
      likes: '98.3K',
      comments: '890',
      bookmarks: '19.7K',
      shares: '7,600'
    },
    {
      id: 6,
      author: 'ramses_',
      avatar: 'perfil_2.jpg',
      caption: 'Hecho con JAMMABLE',
      music: 'Sonido original - ramses_ 🎵',
      likes: '67.2K',
      comments: '530',
      bookmarks: '28.4K',
      shares: '9,120'
    },
    {
      id: 7,
      author: 'luis_fernando',
      avatar: 'perfil_3.jpg',
      caption: 'kitties',
      music: 'Sonido original - luis_fernando 🎵',
      likes: '512.9K',
      comments: '8,400',
      bookmarks: '62.3K',
      shares: '74.5K'
    },
    {
      id: 8,
      author: 'Jeshua._23',
      avatar: 'perfil_4.jpg',
      caption: 'Meowscarade edit',
      music: 'Sonido original - Jeshua._23 🎵',
      likes: '115.6K',
      comments: '1,050',
      bookmarks: '41.8K',
      shares: '15.3K'
    },
    {
      id: 9,
      author: 'sergio_07',
      avatar: 'perfil_1.jpg',
      caption: '6767676767676767',
      music: 'Sonido original - sergio_07 🎵',
      likes: '73.4K',
      comments: '720',
      bookmarks: '14.9K',
      shares: '3,800'
    },
    {
      id: 10,
      author: 'ramses_',
      avatar: 'perfil_2.jpg',
      caption: 'Que tan latino podria yo ser?',
      music: 'Sonido original - ramses_ 🎵',
      likes: '230.1K',
      comments: '2,980',
      bookmarks: '39.5K',
      shares: '21.0K'
    }
  ];
  function getFallbackAvatar(id, name) {
    const colors = ['#fe2c55', '#25f4ee', '#ff007f', '#7928ca', '#0070f3', '#ff4081', '#ff9800', '#4caf50', '#9c27b0', '#00bcd4'];
    const color = colors[(id - 1) % colors.length];
    const initial = name.charAt(0).toUpperCase();
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${encodeURIComponent(color)}"/><text x="50" y="62" font-size="36" font-family="Arial,sans-serif" font-weight="bold" fill="white" text-anchor="middle">${initial}</text></svg>`;
  }
  function createVideoCard(item) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.index = item.id;
    const videoSrc = `assets/videos/video_${item.id}.mp4`;
    const userImgSrc = `assets/images/${item.avatar}`;
    const fallbackAvatar = getFallbackAvatar(item.id, item.author);

    card.innerHTML = `
      <div class="video-stage">
        
        <video class="video-player" src="${videoSrc}" loop playsinline webkit-playsinline muted preload="metadata"></video>
        
        
        <div class="video-fallback">
          <h3 class="fallback-user">@${item.author}</h3>
          <span class="fallback-num">video (${item.id})</span>
        </div>

        
        <div class="play-pause-overlay">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>

        
        <div class="video-counter-pill">
          ${item.id} / ${TOTAL_VIDEOS}
        </div>

        
        <div class="video-info-overlay">
          <div class="video-author-name">
            @${item.author}
            <svg class="verified-badge" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div class="video-caption">
            ${item.caption}
          </div>
          <div class="video-music-track">
            <svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
            <div class="marquee-text">${item.music}</div>
          </div>
        </div>

        
        <div class="actions-sidebar">
          
          <div class="action-author-avatar">
            <img class="author-avatar-img" src="${userImgSrc}" alt="${item.author}" />
            <div class="follow-plus-badge" title="Seguir">+</div>
          </div>

          
          <button class="action-item btn-like" title="Me gusta">
            <div class="action-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <span class="action-count">${item.likes}</span>
          </button>

          
          <button class="action-item btn-comment" title="Comentarios">
            <div class="action-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
            </div>
            <span class="action-count">${item.comments}</span>
          </button>

          
          <button class="action-item btn-favorite" title="Guardar">
            <div class="action-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
            </div>
            <span class="action-count">${item.bookmarks}</span>
          </button>

          
          <button class="action-item btn-share" title="Compartir">
            <div class="action-icon-wrap">
              <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
            </div>
            <span class="action-count">${item.shares}</span>
          </button>

          
          <div class="action-music-disc">
            <img class="music-disc-img" src="${userImgSrc}" alt="Música" />
          </div>
        </div>
      </div>
    `;
    const video = card.querySelector('.video-player');
    const fallback = card.querySelector('.video-fallback');
    card.querySelectorAll('.author-avatar-img, .music-disc-img').forEach((img) => {
      img.addEventListener('error', () => { img.src = fallbackAvatar; }, { once: true });
    });

    video.addEventListener('loadeddata', () => {
      fallback.style.display = 'none';
    });
    setupCardInteractions(card, video, item);

    return card;
  }
  function setupCardInteractions(card, video, item) {
    const playOverlay = card.querySelector('.play-pause-overlay');
    const likeBtn = card.querySelector('.btn-like');
    const favoriteBtn = card.querySelector('.btn-favorite');
    const followBadge = card.querySelector('.follow-plus-badge');

    let lastTap = 0;
    followBadge.addEventListener('click', (e) => {
      e.stopPropagation();
      followBadge.classList.toggle('followed');
      if (followBadge.classList.contains('followed')) {
        followBadge.textContent = '✓';
      } else {
        followBadge.textContent = '+';
      }
    });
    likeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      likeBtn.classList.toggle('liked');
    });
    favoriteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      favoriteBtn.classList.toggle('favorited');
    });
    card.addEventListener('click', (e) => {
      if (e.target.closest('.actions-sidebar') || e.target.closest('.video-counter-pill')) {
        return;
      }

      const currentTime = new Date().getTime();
      const tapInterval = currentTime - lastTap;

      if (tapInterval < 300 && tapInterval > 0) {
        showDoubleTapHeart(card, e);
        if (!likeBtn.classList.contains('liked')) {
          likeBtn.classList.add('liked');
        }
      } else {
        togglePlayPause(video, playOverlay);
      }
      lastTap = currentTime;
    });
  }
  function showDoubleTapHeart(card, e) {
    const heart = document.createElement('div');
    heart.className = 'double-tap-heart';
    heart.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
    const rect = card.getBoundingClientRect();
    const x = e.clientX ? e.clientX - rect.left : rect.width / 2;
    const y = e.clientY ? e.clientY - rect.top : rect.height / 2;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    card.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 800);
  }
  function togglePlayPause(video, overlay) {
    if (video.paused) {
      video.play().catch(() => {});
      overlay.classList.remove('visible');
    } else {
      video.pause();
      overlay.classList.add('visible');
    }
  }
  videoData.forEach((item) => {
    const cardNode = createVideoCard(item);
    feedContainer.appendChild(cardNode);
  });

  const cards = Array.from(feedContainer.querySelectorAll('.video-card'));
  const observerOptions = {
    root: feedContainer,
    threshold: 0.65
  };

  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector('.video-player');
      const index = parseInt(entry.target.dataset.index, 10);

      if (entry.isIntersecting) {
        currentActiveIndex = index;
        video.muted = isMuted;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
          });
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, observerOptions);

  cards.forEach((card) => videoObserver.observe(card));
  let isCycling = false;

  feedContainer.addEventListener('scroll', () => {
    if (isCycling) return;

    const scrollTop = feedContainer.scrollTop;
    const scrollHeight = feedContainer.scrollHeight;
    const clientHeight = feedContainer.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 8) {
      isCycling = true;
      setTimeout(() => {
        feedContainer.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setTimeout(() => {
          isCycling = false;
        }, 600);
      }, 400);
    }
  });
  feedContainer.addEventListener('wheel', (e) => {
    if (currentActiveIndex === TOTAL_VIDEOS && e.deltaY > 20) {
      e.preventDefault();
      feedContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, { passive: false });
  let touchStartY = 0;
  feedContainer.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  feedContainer.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY - touchEndY;
    if (currentActiveIndex === TOTAL_VIDEOS && diffY > 60) {
      feedContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, { passive: true });
  if (muteBtn) {
    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isMuted = !isMuted;
      cards.forEach((c) => {
        const v = c.querySelector('.video-player');
        if (v) v.muted = isMuted;
      });

      if (isMuted) {
        muteText.textContent = 'Silenciado';
        muteBtn.style.opacity = '0.7';
      } else {
        muteText.textContent = 'Sonido activado';
        muteBtn.style.opacity = '1';
      }
    });
  }
  const topTabs = document.querySelectorAll('.top-tab');
  topTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      topTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});
