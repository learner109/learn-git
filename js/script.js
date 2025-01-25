const showScrollPoint = 150;
const scrollTopEle = document.querySelector(".scroll-top");

const handleScrollAppearance = (e) => {
  const scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition <= 150) scrollTopEle.classList.remove("show");
  else scrollTopEle.classList.add("show");
};

const handleScrollTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
};

window.addEventListener("scroll", handleScrollAppearance);
scrollTopEle.addEventListener("click", handleScrollTop);
