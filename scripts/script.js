
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');

  if (!mobileMenu.classList.contains('active')) {
    mobileMenu.classList.add('active');
    gsap.fromTo(
      mobileMenu,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  } else {
    gsap.to(mobileMenu, {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => mobileMenu.classList.remove('active')
    });
  }
});

// Close menu when link clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    gsap.to(mobileMenu, {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => mobileMenu.classList.remove('active')
    });
    menuToggle.classList.remove('active');
  });
});