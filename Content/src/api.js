const api = {
  sideBar: {
    Menu: [
      {
        id: 1,
        title: "Home",
        dropdown: [],
      },
      {
        id: 2,
        title: "Services",
        dropdown: [],
      },
      {
        id: 3,
        title: "News",
        dropdown: [],
      },
      {
        id: 4,
        title: "Blog",
        dropdown: [],
      },
      {
        id: 5,
        title: "Contact",
        dropdown: [],
      },
    ],
  },
  mainContent: {
    logo: {
      image: "../Content/image/logoNCC 1.svg",
      path: "#",
    },
    hero: {
      title: "Lorem ipsum dolor sit asmet?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.",
    },
    product: [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        image: "../Content/image/css-icon%201.svg",
        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit",
        moreDesc:
          "accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        image: "../Content/image/html-icon%201.svg",
        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit",
        moreDesc:
          "accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit amet",
        image: "../Content/image/url-icon%201.svg",
        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit",
        moreDesc:
          "accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.",
      },
    ],
  },
  footer: {
    content: "Copyright © 2021",
  },
};

localStorage.setItem("api", JSON.stringify(api));
