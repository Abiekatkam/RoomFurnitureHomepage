// DOM

const titleElem = document.getElementById("title");
const paraElem = document.getElementById("para");

const fig1Elem = document.getElementById("fig1");
const fig2Elem = document.getElementById("fig2");
const fig3Elem = document.getElementById("fig3");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");

console.log(titleElem.textContent);

nextButton.addEventListener("click", () => {
  if (titleElem.textContent === "Discover innovative ways to decorate") {
    titleElem.innerHTML = "We are available all across the globe";
    paraElem.innerHTML =
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";

    fig1Elem.classList.add("hidden");
    fig2Elem.classList.remove("hidden");
  } else if (
    titleElem.textContent === "We are available all across the globe"
  ) {
    titleElem.innerHTML = "Manufactured with the best materials";
    paraElem.innerHTML =
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";

    fig2Elem.classList.add("hidden");
    fig3Elem.classList.remove("hidden");
  } else {
    titleElem.innerHTML = "Discover innovative ways to decorate";
    paraElem.innerHTML =
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";

    fig3Elem.classList.add("hidden");
    fig1Elem.classList.remove("hidden");
  }
});

// Previous

prevButton.addEventListener("click", () => {
  if (titleElem.textContent === "Discover innovative ways to decorate") {
    titleElem.innerHTML = "Manufactured with the best materials";
    paraElem.innerHTML =
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";

    fig1Elem.classList.add("hidden");
    fig3Elem.classList.remove("hidden");
  } else if (titleElem.textContent === "Manufactured with the best materials") {
    titleElem.innerHTML = "We are available all across the globe";
    paraElem.innerHTML =
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";

    fig3Elem.classList.add("hidden");
    fig2Elem.classList.remove("hidden");
  } else {
    titleElem.innerHTML = "Discover innovative ways to decorate";
    paraElem.innerHTML =
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";

    fig2Elem.classList.add("hidden");
    fig1Elem.classList.remove("hidden");
  }
});
