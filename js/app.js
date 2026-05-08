/**
 * Main app interactions
 * - Mobile menu toggle
 * - Smooth scrolling
 * - Lazy loading enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      mainNav.style.display = expanded ? 'none' : 'flex';
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Lazy load images with fade-in
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.opacity = '0';
          img.onload = () => {
            img.style.transition = 'opacity 0.3s ease';
            img.style.opacity = '1';
          };
          observer.unobserve(img);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      observer.observe(img);
    });
  }
  
  // Video button (placeholder - replace with your video URL)
  const videoBtn = document.getElementById('videoBtn');
  if (videoBtn) {
    videoBtn.addEventListener('click', () => {
      // Replace with your actual video URL or modal
      alert(window.i18n?.t('hero.video') + '\n\n[Video player would open here]');
    });
  }
});