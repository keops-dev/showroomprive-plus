import "./styles.css";
import logger from "./logger";

let lastScrollTop = document.documentElement.scrollTop;
function isScrollingDown() {
  let res = false;
  const currentScrollTop = document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) res = true;
  lastScrollTop = currentScrollTop;

  return res;
}

function moveProductContainerToRight() {
  const productContainer = document.getElementById(
    "cph_middle_productListContainer_pnlProductContainer"
  );

  if (productContainer) {
    productContainer.style.marginLeft = "235px";
  } else {
    logger.error("productContainer n'a pas été trouvé");
  }
}

function setCategoriesContainerTopPosition(event, categoriesContainer) {
  const target = event.target;
  const { scrollTop } = target.scrollingElement;

  if (scrollTop !== 0) {
    if (isScrollingDown()) {
      logger.debug("scroll down");
      categoriesContainer.style.top = "80px";
    } else {
      logger.debug("scroll up");
      categoriesContainer.style.top = "120px";
    }
  } else {
    logger.debug("scroll 0");
    categoriesContainer.style.top = "220px";
  }
}

function initCategoriesContainer(categoriesContainer) {
  if (categoriesContainer) {
    categoriesContainer.classList.add("srpp-floating-container");

    document.body.prepend(categoriesContainer);
    initCategoriesPosition(categoriesContainer);
  } else {
    logger.error("categoriesContainer n'a pas été trouvé");
  }
}

function initCategoriesPosition(categoriesContainer) {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop !== 0) {
    categoriesContainer.style.top = "120px";
  }
}

function main() {
  logger.debug("Showroomprive+ Startup ");

  const categoriesContainer = document.querySelector(".categorie__arbo");

  initCategoriesContainer(categoriesContainer);
  moveProductContainerToRight();

  document.addEventListener("scroll", (event) =>
    setCategoriesContainerTopPosition(event, categoriesContainer)
  );
}

main();
