// src/pages/Catalog/mockData.js

export const ITEMS_PER_PAGE = 4;

// Общие данные (используются как fallback для страницы товара)
const defaultDetails = {
  description:
    "Плавные линии, натуральное дерево и выразительные латунные акценты. Компактная тумба с открытой нишей и мягкой геометрией создаёт лёгкий архитектурный акцент в интерьере.",
  params: {
    height: 650,
    width: 500,
    depth: 350,
    image: "/product-size.png",
  },
  images: [
    "/product-1.png",
    "/product-2.png",
    "/product-3.png",
    "/product-4.png",
    "/product-5.png",
  ],
  colorPalette: [
    { name: "Темно - зеленый", desc: "Тёплая фактура дерева", img: "/green.png" },
    { name: "Натуральный орех", desc: "Элегантный глубокий тон", img: "/natural-nut.png" },
    { name: "Матовая латунь", desc: "Деликатный благородный акцент", img: "/brass.png" },
  ],
  asideInfo: [
    { title: "Натуральный шпон", desc: "Тёплая фактура натурального ореха.", img: "/aside-1.svg" },
    { title: "Матовая латунь", desc: "Деликатный золотистый акцент.", img: "/aside-2.svg" },
    { title: "Мягкая геометрия", desc: "Плавные линии и выразительный силуэт.", img: "/aside-3.svg" },
    { title: "Ручная отделка", desc: "Внимание к каждой детали изделия.", img: "/aside-4.svg" },
  ],
};

export const catalogItems = [
  // Страница 1
  {
    id: 1,
    image: "/catalog-1.png",
    tag: "СТОЛ • КОЛЛЕКЦИЯ",
    name: 'Стол "Nordic"',
    category: "Столы",
    material: "Массив ореха, кожа, латунь",
    price: 999,
    ...defaultDetails,
  },
  {
    id: 2,
    image: "/catalog-2.png",
    tag: "КОМОД • КОЛЛЕКЦИЯ",
    name: 'Комод "Geometry"',
    category: "Комоды",
    material: "Массив дуба, латунь, лак",
    price: 999,
    ...defaultDetails,
  },
  {
    id: 3,
    image: "/catalog-3.png",
    tag: "БУФЕТ • АРТ",
    name: 'Тумба "Art Faces"',
    category: "Комоды",
    material: "Керамика, дерево, металл",
    price: 999,
    ...defaultDetails,
  },
  {
    id: 4,
    image: "/catalog-4.png",
    tag: "СТУЛ • ПРЕМИУМ",
    name: 'Стул "Rein"',
    category: "Стулья",
    material: "Ткань букле, массив дуба",
    price: 999,
    ...defaultDetails,
  },
  // Страница 2
  {
    id: 5,
    image: "/catalog-1.png",
    tag: "СТОЛ • КОЛЛЕКЦИЯ",
    name: 'Стол "Oslo"',
    category: "Столы",
    material: "Массив ясеня, металл",
    price: 1299,
    ...defaultDetails,
  },
  {
    id: 6,
    image: "/catalog-2.png",
    tag: "КОМОД • КОЛЛЕКЦИЯ",
    name: 'Комод "Linea"',
    category: "Комоды",
    material: "Шпон дуба, латунь",
    price: 899,
    ...defaultDetails,
  },
  {
    id: 7,
    image: "/catalog-3.png",
    tag: "СТУЛ • КОЛЛЕКЦИЯ",
    name: 'Стул "Velvet"',
    category: "Стулья",
    material: "Велюр, массив бука",
    price: 599,
    ...defaultDetails,
  },
  {
    id: 8,
    image: "/catalog-4.png",
    tag: "СВЕТИЛЬНИК • АРТ",
    name: 'Лампа "Aurora"',
    category: "Освещение",
    material: "Латунь, стекло",
    price: 749,
    ...defaultDetails,
  },
  // Страница 3
  {
    id: 9,
    image: "/catalog-1.png",
    tag: "СТОЛ • ПРЕМИУМ",
    name: 'Стол "Royal"',
    category: "Столы",
    material: "Массив ореха, мрамор",
    price: 2499,
    ...defaultDetails,
  },
  {
    id: 10,
    image: "/catalog-2.png",
    tag: "КОМОД • АРТ",
    name: 'Комод "Bauhaus"',
    category: "Комоды",
    material: "Массив дуба, сталь",
    price: 1099,
    ...defaultDetails,
  },
  {
    id: 11,
    image: "/catalog-3.png",
    tag: "СТУЛ • ПРЕМИУМ",
    name: 'Стул "Elegance"',
    category: "Стулья",
    material: "Кожа, массив ореха",
    price: 799,
    ...defaultDetails,
  },
  {
    id: 12,
    image: "/catalog-4.png",
    tag: "СВЕТИЛЬНИК • КОЛЛЕКЦИЯ",
    name: 'Люстра "Crystal"',
    category: "Освещение",
    material: "Хрусталь, латунь",
    price: 1899,
    ...defaultDetails,
  },
];

// Получить товар по id
export function getProductById(id) {
  return catalogItems.find((item) => item.id === Number(id));
}