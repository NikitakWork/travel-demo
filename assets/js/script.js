window.addEventListener("scroll", () => {
  const heroText = document.querySelector(".hero-text");
  heroText.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});
