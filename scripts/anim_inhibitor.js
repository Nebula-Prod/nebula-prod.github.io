document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().slice(0, 10);
  const lastVisit = localStorage.getItem('lastVisitDate');

  if (lastVisit === today) {
    // Disable animation via inline style
    const targetclass = ['.contentdiv', '.firstcontentdiv', '.mfbg'];
    const animatedElements = document.querySelectorAll(targetclass.join(','));
    animatedElements.forEach(el => {
      el.style.opacity = "100%";
      el.style.animationName = 'none';
    });
  } else {
    localStorage.setItem('lastVisitDate', today);
  }
});
