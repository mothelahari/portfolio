const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 20) header.style.background = 'rgba(255,255,255,.92)';
  else header.style.background = 'transparent';
  header.style.backdropFilter = current > 20 ? 'blur(14px)' : 'none';
  lastScroll = current;
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Use the committed repository image instead of an embedded data URI.
const profilePhoto = document.querySelector('.profile-photo');
if (profilePhoto) {
  profilePhoto.src = './images/profile.svg';
}
