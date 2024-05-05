const silderItem = document.querySelectorAll(".slider-item");
for (let index = 0; index < silderItem.length; index++) {
  silderItem[index].style.left = index * 100 + "%";
}

const sliderItems = document.querySelector(".slider-items");
const arrowright = document.querySelector(".fa-arrow-right");
const arrowleft = document.querySelector(".fa-arrow-left");
let i = 0;
if (arrowright != null && arrowleft != null) {
  arrowright.addEventListener("click", () => {
    if (i < silderItem.length - 1) {
      i++;
      console.log(i);
      sliderMove(i);
    } else {
      return false;
    }
  });
  arrowleft.addEventListener("click", () => {
    if (i <= 0) {
      return false;
    } else {
      i--;
      console.log(i);
      sliderMove(i);
    }
  });
}
function sliderMove(i) {
  sliderItems.style.left = -i * 100 + "%";
}
// function autoSlider() {
//   if (i < silderItem.length - 1) {
//     i++;
//     sliderMove(i);
//   } else {
//     i = 0;
//     sliderMove(i);
//   }
// }

// setInterval(autoSlider, 1000);

// Menubar reponsive
const Menubar = document.querySelector(".header-bar-icon");
const headerNav = document.querySelector(".header-nav");
Menubar.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});

// stiky header
window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
  // console.log(scrollY);
});
// click product image detail
const imageSmall = document.querySelectorAll(".product-images-items img");
const imageMain = document.querySelector(".main-image");
for (let index = 0; index < imageSmall.length; index++) {
  imageSmall[index].addEventListener("click", () => {
    for (let a = 0; a < imageSmall.length; a++) {
      imageSmall[a].classList.remove("active");
    }
    imageMain.src = imageSmall[index].src;

    imageSmall[index].classList.add("active");
  });
}
// quantity-product
const quanPlus = document.querySelector(".fa-plus");
const quanMinus = document.querySelector(".fa-minus");
const quanInput = document.querySelector(".quantity-input");
let qty = 1;
quanPlus.addEventListener("click", () => {
  qty++;
  quanInput.value = qty;
  // console.log(quanInput.value);
  // console.log(qty);
});
quanMinus.addEventListener("click", () => {
  if (qty <= 1) {
    return false;
  } else {
    qty--;
    quanInput.value = qty;
  }
});
