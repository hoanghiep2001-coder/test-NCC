let mainContent = document.querySelector(".mainContent");
let contentItems = [
  {
    title: "Lorem ipsum dolor sit amet",
    image: "../Content/image/css-icon%201.svg",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit",
    moreDesc:
      "accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    image: "../Content/image/html-icon%201.svg",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit",
    moreDesc:
      "accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    image: "../Content/image/url-icon%201.svg",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit",
    moreDesc:
      "accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
  },
];

let app = {
  init: function () {
    this.renderHTML();
    this.handleEvent();
  },
  handleEvent: function () {},
  renderHTML: function () {
    let htmls = contentItems.map((item) => {
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
};

app.init();
