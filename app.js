const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ACCION",
    price: 10,
    colors: [
      {
        code: "black",
        img: "./img/imagenes/hero_capsule (4).jpg",
      },
      {
        code: "darkblue",
        img: "./img/imagenes/imagenc2.webp",
      },
    ],
  },
  {
    id: 2,
    title: "AVENTURA",
    price: 15,
    colors: [
      {
        code: "lightgray",
        img: "./img/imagenes/hero_capsule.jpg",
      },
      {
        code: "green",
        img: "./img/imagenes/imagencomplementaria1.webp",
      },
    ],
  },
  {
    id: 3,
    title: "HORROR",
    price: 20,
    colors: [
      {
        code: "lightgray",
        img: "./img/imagenes/imagenc3.webp",
      },
      {
        code: "green",
        img: "./img/PortadaDun.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "RPG",
    price: 5,
    colors: [
      {
        code: "black",
        img: "./img/imagenes/hero_capsule (2).jpg",
      },
      {
        code: "lightgray",
        img: "./img/imagenes/imagenc4.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "ARTE",
    price: 10,
    colors: [
      {
        code: "gray",
        img: "./img/imagenes/hero_capsule (3).jpg",
      },
      {
        code: "black",
        img: "./img/imagenes/imagenc5.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    wrapper.style.transform = `translateX(${-100 * index}vw)`;


    choosenProduct = products[index];


    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});