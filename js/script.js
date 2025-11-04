const inputFirstName = document.getElementById("fname");
const inputLastName = document.getElementById("lname");
const inputEmail = document.getElementById("fmail");
const inputMessage = document.getElementById("fmessage");

function getInfo() {
  console.log(
    `First Name: ${inputFirstName.value}\nLast Name: ${inputLastName.value}\nEmail: ${inputEmail.value}\nMessage: ${inputMessage.value}`
  );

  if (
    !inputFirstName.value.trim() ||
    !inputLastName.value.trim() ||
    !inputEmail.value.trim() ||
    !inputMessage.value.trim()
  ) {
    return;
  } else {
    window.location.href = "../html/confirm.html";
  }
}

const homeButton = document.getElementById("home_button");

function goUp() {
  if (window.location.pathname.endsWith("main.html")) {
    window.location.href = "../html/main.html#bdy";
  } else if (window.location.pathname.endsWith("shop.html")) {
    window.location.href = "../html/shop.html#bdy";
  } else if (window.location.pathname.endsWith("about.html")) {
    window.location.href = "../html/about.html#bdy";
  }

  homeButton.style.boxShadow = "0 0 20px black";
  homeButton.style.transition = "all 0.7s ease";

  setTimeout(() => {
    homeButton.style.boxShadow = "none";
  }, 1500);
}

let responsiveNavBool = false;
const responsiveNavbar = document.getElementById("navbar_responsive_inner");
function mainControlResponsive() {
  if (!responsiveNavBool) {
    responsiveNavbar.style.display = "block";
    responsiveNavBool = true;
  } else {
    responsiveNavbar.style.display = "none";
    responsiveNavBool = false;
  }
}

const mainCardCtn = document.getElementsByClassName("section-f2-card");
const allElements = document.querySelectorAll("body");
const mainCardBtn = document.getElementsByClassName("section-f2-card-btn");
function lightMode() {
  document.querySelector("body").style.backgroundColor = "white";
  allElements.forEach((element) => {
    element.style.color = "black";
  });
  for (let i = 0; i < mainCardCtn.length; i++) {
    mainCardCtn[i].style.backgroundColor = "#f3f3f3";
    mainCardCtn[i].style.boxShadow = "0 0 10px black";
  }
  for (let i = 0; i < mainCardBtn.length; i++) {
    mainCardBtn[i].style.backgroundColor = "black";
    mainCardBtn[i].style.color = "white";
  }
}

function darkMode() {
  document.querySelector("body").style.backgroundColor = "#171718";
  allElements.forEach((element) => {
    element.style.color = "white";
  });
  for (let i = 0; i < mainCardCtn.length; i++) {
    mainCardCtn[i].style.backgroundColor = "black";
    mainCardCtn[i].style.boxShadow = "0 0 10px white";
  }
  for (let i = 0; i < mainCardBtn.length; i++) {
    mainCardBtn[i].style.backgroundColor = "white";
    mainCardBtn[i].style.color = "black";
  }
}
