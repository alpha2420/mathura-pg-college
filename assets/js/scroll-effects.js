/**
 * Mathura P.G. College — Global Scroll Effects & Interactive Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Scroll Progress Indicator if not present
  if (!document.getElementById('scrollProgressBar')) {
    const bar = document.createElement('div');
    bar.id = 'scrollProgressBar';
    bar.className = 'scroll-progress-bar';
    bar.setAttribute('aria-hidden', 'true');
    document.body.prepend(bar);
  }

  // 2. Inject Back to Top Button if not present
  if (!document.getElementById('scrollTopBtn')) {
    const topBtn = document.createElement('button');
    topBtn.id = 'scrollTopBtn';
    topBtn.className = 'scroll-top-btn';
    topBtn.setAttribute('aria-label', 'Back to top');
    topBtn.setAttribute('title', 'Back to top');
    topBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 15l-6-6-6 6"/></svg>';
    document.body.appendChild(topBtn);
  }

  const nav = document.getElementById('navbar');
  const scrollBar = document.getElementById('scrollProgressBar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // 3. Scroll Listener
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Update Progress Bar
    if (scrollBar && docHeight > 0) {
      scrollBar.style.width = ((scrollY / docHeight) * 100) + '%';
    }

    // Header elevation & glassmorphism
    if (nav) {
      nav.classList.toggle('scrolled', scrollY > 30);
    }

    // Floating Back-To-Top button visibility
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', scrollY > 280);
    }
  }, { passive: true });

  // 4. Back To Top Smooth Click
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. Scroll Reveal for Cards & Sections
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // 6. Interactive Campus Photo Lightbox Modal
  const lightboxModal = document.createElement('div');
  lightboxModal.className = 'lightbox-modal';
  lightboxModal.id = 'lightboxModal';
  lightboxModal.innerHTML = `
    <button class="lightbox-close" aria-label="Close Lightbox">✕</button>
    <div class="lightbox-img-wrap">
      <img src="" alt="" class="lightbox-img" id="lightboxImg">
    </div>
    <div class="lightbox-caption" id="lightboxCaption"></div>
  `;
  document.body.appendChild(lightboxModal);

  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = lightboxModal.querySelector('.lightbox-close');

  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) closeLightbox();
  });

  // Attach Lightbox to all campus and gallery images
  document.querySelectorAll('.campus-c img, .about-imgs img, .about-img-wrap img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.setAttribute('title', 'Click to view full photo');
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Campus Photo';
      const captionText = img.closest('.campus-c')?.querySelector('.campus-lbl')?.textContent || img.alt || 'Mathura P.G. College Campus';
      lightboxCaption.textContent = captionText;
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // 7. Interactive Card Spotlight Glow on Mouse Movement
  document.querySelectorAll('.prog-card, .hub-card, .why-card, .testi-card, .leadership-grid > div').forEach(card => {
    card.classList.add('card-spotlight');
  });
});
