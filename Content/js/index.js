let logo = document.querySelector(".logo");
let hero = document.querySelector(".hero");
let mainContent = document.querySelector(".mainContent");
let footer = document.querySelector(".wrapper-footer");
let getAPIs = localStorage.getItem("api");
let APIs = JSON.parse(getAPIs);
let app = {
  init: function () {
    this.renderHTML();
    this.handleEvent();
  },
  handleEvent: function () {},
  renderHTML: function () {
    this.renderLogo();
    this.renderHero();
    this.renderProduct();
    this.renderFooter();
  },
  renderLogo: function () {
    let htmls = `
    <a href="${APIs.mainContent.logo.path}" class="logo-link">
    <img
      class="logo-img"
      src="${APIs.mainContent.logo.image}"
      alt=""
    />
  </a>
    `;

    logo.innerHTML = htmls;
  },
  renderHero: function () {
    let htmls = `
    <h3 class="text-title hero-title">${APIs.mainContent.hero.title}</h3>
    <p class="text-paragraph hero-desc">
    ${APIs.mainContent.hero.content}
    </p>
    `;

    hero.innerHTML = htmls;
  },
  renderProduct: function () {
    let htmls = APIs.mainContent.product.map((item) => {
      return `
      <div class="col col-4">
      <div class="mainContent__item">
        <h3 class="text-title mainContent__item-title">
          ${item.title}
        </h3>
        <div class="d-flex mainContent__item-desc">
          <img
            src=${item.image}
            alt=""
            class="mainContent__item-img"
          />
          <p class="text-paragraph mainContent__item-paragraph">
            ${item.desc}
          </p>
        </div>
         <p class="text-paragraph mainContent__item-paragraph">
           ${item.moreDesc}
        </p>
      </div>
    </div>
      `;
    });
    mainContent.innerHTML = htmls.join("");
  },
  renderFooter: function () {
    let htmls = `
    <div class="container footer-container">
    <p class="footer__desc text-paragraph">${APIs.footer.content}</p>
  </div>
    `;

    footer.innerHTML = htmls;
  },
};

app.init();
