const menuItems = [
  'panel',
  'configuration',
  'moderation',
  'payments',
  'q&a',
  'seo',
  'minimodule',
  'newsletter',
  'tools',
  'faq',
  'tutorial',
  'roadmap',
];

const wrapper = document.querySelector('.wrapper');
const footer = document.querySelector('.footer');
const logo = document.querySelector('.logo');
const navItems = document.querySelectorAll('.nav__item');
const sublistItems = document.querySelectorAll('.nav__item__sublist');
const foldButton = document.querySelector('.fold');

let isFolded = false;

navItems.forEach((item, index) => {
  const itemIcon = document.createElement('div');
  itemIcon.style.backgroundImage = `url(/src/icons/${menuItems[index]}.png)`;
  itemIcon.className = 'nav__item__icon';
  item.prepend(itemIcon);

  item.addEventListener('click', () => {
    navItems.forEach((el) => el.classList.remove('nav__item--active'));
    sublistItems.forEach((el) => el.classList.add('hidden'));
    item.classList.add('nav__item--active');

    if (!isFolded) {
      if (item.children.length > 2) {
        item.querySelector('.nav__item__sublist').classList.remove('hidden');
      }
    }
  });
});

foldButton.addEventListener('click', () => {
  isFolded = !isFolded;

  if (isFolded) {
    wrapper.classList.add('wrapper__folded');
    footer.classList.add('footer__folded');
    logo.classList.add('logo__folded');

    navItems.forEach((item) => {
      item.classList.add('nav__item__folded');
    });

    foldButton.querySelector('.fold__tooltip').innerText = 'Rozwiń menu';
  } else {
    wrapper.classList.remove('wrapper__folded');
    footer.classList.remove('footer__folded');
    logo.classList.remove('logo__folded');

    navItems.forEach((item) => {
      item.classList.remove('nav__item__folded');
    });

    foldButton.querySelector('.fold__tooltip').innerText = 'Zwiń menu';
  }
});

document.querySelectorAll(':is(.nav__item) ul').forEach((el) => {
  const dropIcon = document.createElement('i');
  dropIcon.className = 'fas fa-sort-down nav__item__drop__icon';
  el.previousElementSibling.appendChild(dropIcon);
});
