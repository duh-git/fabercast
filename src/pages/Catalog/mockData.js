// src/pages/Catalog/mockData.js

export const ITEMS_PER_PAGE = 4;

export const catalogItems = [
  // ============ 1. Кресло с приставным столиком ============
  {
    id: 1,
    name: "Кресло с приставным столиком",
    category: "Кресла",
    tag: "КРЕСЛО • КОЛЛЕКЦИЯ",
    price: 2499,
    preview: "/products/product1/image1.png",
    description:
      "Кресло с органичной формой и приставным столиком. Спинка повторяет изгибы тела, обеспечивая комфортную поддержку спины. Сочетание мягкого велюра, фактурной ткани и шпона дерева создаёт тактильный и выразительный образ.",
    images: [
      "/products/product1/image1.png",
      "/products/product1/image2.png",
      "/products/product1/image3.png",
      "/products/product1/image4.png",
      "/products/product1/image5.png",
    ],
    materials: [
      { name: "Велюр", desc: "Пыльно-синий; мягкий, приятный на ощупь, устойчивый к истиранию", img: "/products/product1/mat1.png" },
      { name: "Ткань", desc: "Тёплый бежевый; фактурная, прочная, износостойкая", img: "/products/product1/mat2.png" },
      { name: "Шпон дерева", desc: "Тёплый орех; натуральный рисунок дерева, матовое покрытие", img: "/products/product1/mat3.png" },
      { name: "Латунь", desc: "Матовая; устойчивая к коррозии, декоративный акцент", img: "/products/product1/mat4.png" },
    ],
    params: {
      height: 950,
      width: 650,
      depth: 820,
      seatHeight: 450,
      tableHeight: 620,
      tableDiameter: 350,
    },
    plan: "/products/product1/plan.png",
    features: [
      { title: "Эргономичная форма", desc: "Спинка повторяет изгибы тела и обеспечивает поддержку спины." },
      { title: "Тактильные материалы", desc: "Мягкий велюр и фактурная ткань создают приятные тактильные ощущения." },
      { title: "Премиальное исполнение", desc: "Качественные материалы и продуманные детали подчёркивают статус и долговечность." },
      { title: "Органичный дизайн", desc: "Плавные линии и природные оттенки вписываются в современный интерьер." },
    ],
  },

  // ============ 2. Тумба «Art Faces» ============
  {
    id: 2,
    name: 'Тумба "Art Faces"',
    category: "Тумбы",
    tag: "ТУМБА • АРТ",
    price: 1899,
    preview: "/products/product2/image1.png",
    description:
      "Тумба с рельефными фасадами и абстрактными лицами. Ручная работа делает каждое изделие уникальным, а сочетание керамики, натурального шпона и металла подчёркивает выразительность предмета.",
    images: [
      "/products/product2/image1.png",
      "/products/product2/image2.png",
      "/products/product2/image3.png",
      "/products/product2/image4.png",
      "/products/product2/image5.png",
    ],
    materials: [
      { name: "Керамика (беж)", desc: "Тёплый бежевый; фактурная, ручная работа, матовая поверхность", img: "/products/product2/mat1.png" },
      { name: "Керамика (графит)", desc: "Графитовый; фактурная, ручная работа, матовая поверхность", img: "/products/product2/mat2.png" },
      { name: "Керамика (терракота)", desc: "Терракотовый; фактурная, ручная работа, матовая поверхность", img: "/products/product2/mat3.png" },
      { name: "Металл", desc: "Матовый чёрный; порошковая окраска, матовая текстура", img: "/products/product2/mat4.png" },
      { name: "Шпон дерева", desc: "Натуральный, тёплый орех; натуральный рисунок", img: "/products/product2/mat5.png" },
    ],
    params: {
      height: 750,
      width: 900,
      depth: 450,
      legsHeight: 180,
    },
    plan: "/products/product2/plan.png",
    features: [
      { title: "Авторский дизайн", desc: "Рельефные фасады с абстрактными лицами создают выразительный акцент." },
      { title: "Ручная работа", desc: "Каждый элемент фасада создан вручную, делая изделие уникальным." },
      { title: "Натуральные материалы", desc: "Керамика, натуральный шпон и металл обеспечивают долговечность и эстетику." },
      { title: "Продуманное хранение", desc: "Внутреннее пространство с полкой позволяет удобно хранить разные вещи." },
    ],
  },

  // ============ 3. Прихожая «Radius» ============
  {
    id: 3,
    name: 'Прихожая "Radius"',
    category: "Прихожие",
    tag: "ПРИХОЖАЯ • КОЛЛЕКЦИЯ",
    price: 3299,
    preview: "/products/product3/image1.png",
    description:
      "Функциональная композиция, объединяющая скамью и шкаф. Скруглённые линии создают мягкий и лёгкий силуэт, а сочетание шпона ореха, натуральных тканей и латунных деталей добавляет интерьеру выразительность.",
    images: [
      "/products/product3/image1.png",
      "/products/product3/image2.png",
      "/products/product3/image3.png",
      "/products/product3/image4.png",
      "/products/product3/image5.png",
    ],
    materials: [
      { name: "Шпон ореха", desc: "Натуральный рисунок, матовая поверхность", img: "/products/product3/mat1.png" },
      { name: "Ткань (полосатая)", desc: "Молочный + коричневый", img: "/products/product3/mat2.png" },
      { name: "Ткань (лён)", desc: "Бежевый; фактурная поверхность", img: "/products/product3/mat3.png" },
      { name: "Ткань (терракота)", desc: "Акцентный цвет", img: "/products/product3/mat4.png" },
      { name: "Ткань (беж)", desc: "Бежевый; натуральный оттенок", img: "/products/product3/mat5.png" },
    ],
    params: {
      length: 2100,
      height: 1900,
      depth: 450,
      seatHeight: 400,
      backHeight: 950,
      wardrobeWidth: 900,
    },
    plan: "/products/product3/plan.png",
    features: [
      { title: "Плавные формы", desc: "Скруглённые линии придают изделию мягкость и визуальную лёгкость." },
      { title: "Натуральные материалы", desc: "Шпон ореха и натуральные ткани обеспечивают выразительность и долговечность." },
      { title: "Функциональность", desc: "Комбинация скамьи и шкафа даёт удобное место для сидения и хранения." },
      { title: "Детали и акценты", desc: "Тканевая спинка с полосатым узором и латунные ручки добавляют индивидуальность." },
    ],
  },

  // ============ 4. Туалетная зона ============
  {
    id: 4,
    name: "Туалетная зона",
    category: "Туалетные зоны",
    tag: "ТУАЛЕТНАЯ ЗОНА • КОЛЛЕКЦИЯ",
    price: 2899,
    preview: "/products/product4/image1.png",
    description:
      "Функциональное место для ежедневных бьюти-ритуалов и хранения. Зеркало с ритмичной рамой становится центральным декоративным элементом, а сочетание шпона, металла и мягких текстур создаёт гармоничный интерьер.",
    images: [
      "/products/product4/image1.png",
      "/products/product4/image2.png",
      "/products/product4/image3.png",
      "/products/product4/image4.png",
      "/products/product4/image5.png",
    ],
    materials: [
      { name: "Шпон ореха", desc: "Тёплый, насыщенный оттенок", img: "/products/product4/mat1.png" },
      { name: "Декоративная штукатурка", desc: "Эффект глубины и мягкого рассеянного света", img: "/products/product4/mat2.png" },
      { name: "Зеркало", desc: "Полотно высокого качества", img: "/products/product4/mat3.png" },
      // { name: "Металл", desc: "Латунь, матовая", img: "/products/product4/mat4.png" },
      // { name: "Текстиль", desc: "Плотная, износостойкая обивка", img: "/products/product4/mat5.png" },
    ],
    params: {
      cabinetHeight: 2500,
      cabinetWidth: 1200,
      cabinetDepth: 600,
      tableHeight: 780,
      tableWidth: 1800,
    },
    plan: "/products/product4/plan.png",
    features: [
      { title: "Пространство для себя", desc: "Удобное место для бьюти-ритуалов, хранения и ежедневного комфорта." },
      { title: "Акцент в интерьере", desc: "Зеркало с ритмичной рамой становится центральным декоративным элементом." },
      { title: "Гармония материалов", desc: "Натуральный шпон, благородные металлы и мягкие текстуры создают тактильный баланс." },
      { title: "Премиальное исполнение", desc: "Качественные материалы и внимание к деталям на каждом этапе производства." },
    ],
  },

  // ============ 5. Тумба «Arc Balance» ============
  {
    id: 5,
    name: 'Тумба "Arc Balance"',
    category: "Тумбы",
    tag: "ТУМБА • КОЛЛЕКЦИЯ",
    price: 1199,
    preview: "/products/product5/image1.png",
    description:
      "Компактная тумба с мягкой геометрией и выразительными плавными линиями. Сочетание натурального ореха, рифлёного матового фасада и матовой латуни создаёт лёгкий архитектурный акцент в интерьере.",
    images: [
      "/products/product5/image1.png",
      "/products/product5/image2.png",
      "/products/product5/image3.png",
      "/products/product5/image4.png",
      "/products/product5/image5.png",
    ],
    materials: [
      { name: "Фасад МДФ", desc: "Рифлёный, матовая эмаль", img: "/products/product5/mat1.png" },
      { name: "Корпус", desc: "Шпон ореха, натуральное дерево", img: "/products/product5/mat2.png" },
      { name: "Фурнитура", desc: "Матовая латунь, покрытие PVD", img: "/products/product5/mat3.png" },
    ],
    params: {
      height: 650,
      width: 500,
      depth: 350,
      drawerHeight: 120,
      nicheHeight: 300,
    },
    plan: "/products/product5/plan.png",
    features: [
      { title: "Натуральный шпон", desc: "Корпус выполнен из шпона ореха с природной текстурой." },
      { title: "Матовая латунь", desc: "Фурнитура с матовой латунной отделкой и покрытием PVD." },
      { title: "Мягкая геометрия", desc: "Плавные линии и арочная форма создают выразительный силуэт." },
      { title: "Ручная отделка", desc: "Внимание к деталям и качеству исполнения изделия." },
    ],
  },

  // ============ 6. Комод с геометрическим фасадом ============
  {
    id: 6,
    name: "Комод с геометрическим фасадом",
    category: "Комоды",
    tag: "КОМОД • ГЕОМЕТРИЯ",
    price: 2199,
    preview: "/products/product6/image1.png",
    description:
      "Выразительный комод с геометрическим рельефом фасадов. Сочетание шпона ореха и дуба подчёркивает природную текстуру, а комбинация ящиков и распашных секций обеспечивает практичное хранение.",
    images: [
      "/products/product6/image1.png",
      "/products/product6/image2.png",
      "/products/product6/image3.png",
      "/products/product6/image4.png",
      "/products/product6/image5.png",
    ],
    materials: [
      { name: "Шпон ореха", desc: "Тёмный орех, натуральный рисунок", img: "/products/product6/mat1.png" },
      { name: "Шпон дуба", desc: "Светлый дуб, натуральный рисунок", img: "/products/product6/mat2.png" },
      { name: "Фасад ореха", desc: "Тёплый орех, глубокий оттенок", img: "/products/product6/mat3.png" },
      { name: "Фасад ореха", desc: "Геометрический инкрустационный рисунок", img: "/products/product6/mat4.png" },
      // { name: "Металл", desc: "Графитовый, порошковое покрытие", img: "/products/product6/mat5.png" },
    ],
    params: {
      length: 1800,
      height: 750,
      depth: 450,
      supportHeight: 200,
      drawers: 4,
      doors: 2,
    },
    plan: "/products/product6/plan.png",
    features: [
      { title: "Уникальный дизайн", desc: "Геометрический рельеф фасадов создаёт выразительный визуальный акцент." },
      { title: "Натуральные материалы", desc: "Сочетание шпона ореха и дуба подчёркивает природную красоту текстур." },
      { title: "Практичное хранение", desc: "Выдвижные ящики и распашные секции позволяют удобно организовать хранение." },
      { title: "Надёжность и качество", desc: "Прочная конструкция и премиальная фурнитура рассчитаны на комфортное использование." },
    ],
  },

  // ============ 7. Комод с каменными акцентами ============
  {
    id: 7,
    name: "Комод с каменными акцентами",
    category: "Комоды",
    tag: "КОМОД • КАМЕНЬ",
    price: 2599,
    preview: "/products/product7/image1.png",
    description:
      "Комод со скульптурным силуэтом, мягкими скруглёнными формами и выразительными каменными деталями. Тёплый шпон дерева и натуральный камень создают гармоничное сочетание природных материалов.",
    images: [
      "/products/product7/image1.png",
      "/products/product7/image2.png",
      "/products/product7/image3.png",
      "/products/product7/image4.png",
      "/products/product7/image5.png",
    ],
    materials: [
      { name: "Шпон дуба (медовый)", desc: "Медовый оттенок", img: "/products/product7/mat1.png" },
      { name: "Шпон дуба", desc: "Светлый", img: "/products/product7/mat2.png" },
      { name: "Натуральный камень", desc: "Тёмный мрамор", img: "/products/product7/mat3.png" },
    ],
    params: {
      length: 2100,
      height: 650,
      depth: 500,
      bodyHeight: 380,
      supportHeight: "230–240",
    },
    plan: "/products/product7/plan.png",
    features: [
      { title: "Скульптурный силуэт", desc: "Мягкие скруглённые формы придают изделию визуальную лёгкость." },
      { title: "Натуральные материалы", desc: "Тёплый шпон дерева в сочетании с натуральным камнем создаёт гармонию природы." },
      { title: "Каменные акценты", desc: "Ручки из камня и массивные опоры выглядят как природные артефакты." },
      { title: "Функциональное хранение", desc: "Вместительные отделения и полки обеспечивают организованное хранение." },
    ],
  },

  // ============ 8. Туалетная зона в гардеробной ============
  {
    id: 8,
    name: "Туалетная зона в гардеробной",
    category: "Туалетные зоны",
    tag: "ТУАЛЕТНАЯ ЗОНА • ГАРДЕРОБ",
    price: 3599,
    preview: "/products/product8/image1.png",
    description:
      "Комплексная туалетная зона с системой хранения, туалетным столиком, зеркалом и мягким пуфом. Натуральный шпон ореха, мрамор, латунь и текстиль формируют выразительную и тактильную композицию.",
    images: [
      "/products/product8/image1.png",
      "/products/product8/image2.png",
      "/products/product8/image3.png",
      "/products/product8/image4.png",
      "/products/product8/image5.png",
    ],
    materials: [
      { name: "Шпон ореха", desc: "Тёплый оттенок", img: "/products/product8/mat1.png" },
      { name: "Мрамор", desc: "Dark Emperador", img: "/products/product8/mat2.png" },
      { name: "Декоративная штукатурка", desc: "Отделка стен", img: "/products/product8/mat3.png" },
      { name: "Ткань пуфа", desc: "Леопард", img: "/products/product8/mat4.png" },
      // { name: "Фасады", desc: "Текстильные панели", img: "/products/product8/mat5.png" },
    ],
    params: {
      note: "Габариты не указаны в каталоге",
    },
    plan: "/products/product8/plan.png",
    features: [
      { title: "Система хранения", desc: "Два встроенных стеллажа с открытыми полками и подсветкой." },
      { title: "Туалетный столик", desc: "Просторная столешница из натурального камня и две тумбы с ящиками." },
      { title: "Зеркало", desc: "Настенное зеркало с закруглёнными углами в тонкой латунной раме." },
      { title: "Пуф", desc: "Мягкий круглый пуф на скрытом основании с акцентной обивкой." },
    ],
  },

  // ============ 9. Шкаф с каменным акцентом ============
  {
    id: 9,
    name: "Шкаф с каменным акцентом",
    category: "Шкафы",
    tag: "ШКАФ • КАМЕНЬ",
    price: 3999,
    preview: "/products/product9/image1.png",
    description:
      "Композиция со встроенной системой хранения, открытыми полками и закрытыми фасадами. Натуральный шпон ореха сочетается с каменной панелью, металлом и стеклом, создавая выразительный многослойный интерьер.",
    images: [
      "/products/product9/image1.png",
      "/products/product9/image2.png",
      "/products/product9/image3.png",
      "/products/product9/image4.png",
      "/products/product9/image5.png",
    ],
    materials: [
      { name: "Шпон ореха", desc: "Тёплый ореховый оттенок", img: "/products/product9/mat1.png" },
      { name: "Стены", desc: "Тёплый бежевый", img: "/products/product9/mat2.png" },
      // { name: "Натуральный камень", desc: "Мраморная плита с прожилками", img: "/products/product9/mat2.png" },
      { name: "Металл", desc: "Графит / тёмная бронза", img: "/products/product9/mat3.png" },
      // { name: "Стекло", desc: "Прозрачное / тонированное", img: "/products/product9/mat4.png" },
    ],
    params: {
      height: 2600,
      width: 1600,
      cabinetDepth: 600,
      shelfSectionWidth: 300,
      wardrobeWidth: 900,
      stonePanelWidth: 400,
    },
    plan: "/products/product9/plan.png",
    features: [
      { title: "Натуральный шпон ореха", desc: "Выразительная текстура натурального дерева." },
      { title: "Открытые полки", desc: "Полки для декора и хранения." },
      { title: "Точная проработка", desc: "Внимание к стыкам и кромкам." },
      { title: "Игра материалов", desc: "Дерево, камень, металл и стекло работают как единая композиция." },
    ],
  },

  // ============ 10. Рабочая зона с системой хранения — вариант 1 ============
  {
    id: 10,
    name: "Рабочая зона с системой хранения — вариант 1",
    category: "Рабочие зоны",
    tag: "РАБОЧАЯ ЗОНА • КОЛЛЕКЦИЯ",
    price: 4599,
    preview: "/products/product10/image1.png",
    description:
      "Рабочая зона с монолитным письменным столом и встроенной системой хранения. Столешница из натурального ореха покрыта маслом с твёрдым воском, а глубокий синий МДФ и терракотовая фактурная отделка создают выразительный контраст.",
    images: [
      "/products/product10/image1.png",
      "/products/product10/image2.png",
      "/products/product10/image3.png",
      "/products/product10/image4.png",
      "/products/product10/image5.png",
    ],
    materials: [
      { name: "Шпон ореха", desc: "Натуральное дерево", img: "/products/product10/mat1.png" },
      { name: "Матовая эмаль", desc: "Синий индиго", img: "/products/product10/mat2.png" },
      { name: "Текстурная штукатурка", desc: "Терракота", img: "/products/product10/mat3.png" },
      { name: "Натуральная кожа", desc: "Акцент", img: "/products/product10/mat4.png" },
      // { name: "Алюминиевый профиль", desc: "Чёрный металл", img: "/products/product10/mat5.png" },
    ],
    params: {
      wallWidth: 3200,
      wallHeight: 2700,
      wallDepth: 450,
      tableWidth: 2200,
      tableHeight: 760,
    },
    plan: "/products/product10/plan.png",
    features: [
      { title: "Скульптурный рабочий стол", desc: "Плавные радиусы и монолитные опоры при массивной визуальной форме." },
      { title: "Натуральный орех", desc: "Столешница подчёркивает текстуру дерева и защищена маслом с твёрдым воском." },
      { title: "Система хранения", desc: "Шкафы, ящики и открытые полки организуют пространство." },
      { title: "Интегрированная подсветка", desc: "LED-подсветка полок и ниш обеспечивает комфортный свет." },
    ],
  },

  // ============ 11. Рабочая зона с системой хранения — вариант 2 ============
  {
    id: 11,
    name: "Рабочая зона с системой хранения — вариант 2",
    category: "Рабочие зоны",
    tag: "РАБОЧАЯ ЗОНА • АРКА",
    price: 4299,
    preview: "/products/product11/image1.png",
    description:
      "Просторная рабочая зона с плавными краями столешницы и встроенной модульной системой. Арочные ниши, матовые фасады, натуральный орех и тёплый коньячный оттенок кожи создают спокойный, статусный образ.",
    images: [
      "/products/product11/image1.png",
      "/products/product11/image2.png",
      "/products/product11/image3.png",
      "/products/product11/image4.png",
      "/products/product11/image5.png",
    ],
    materials: [
      { name: "Шпон ореха", desc: "Тонированный", img: "/products/product11/mat1.png" },
      { name: "Кожа", desc: "Коньячный оттенок", img: "/products/product11/mat2.png" },
      { name: "МДФ", desc: "Тёмно-зелёный", img: "/products/product11/mat3.png" },
      { name: "Металл", desc: "Чёрный матовый", img: "/products/product11/mat4.png" },
    ],
    params: {
      tableWidth: 2200,
      tableHeight: 760,
      tableDepth: 900,
    },
    plan: "/products/product11/plan.png",
    features: [
      { title: "Просторная рабочая поверхность", desc: "Плавные края и удобная форма столешницы обеспечивают свободу движений." },
      { title: "Арочные ниши", desc: "Открытые полки с подсветкой подчёркивают предметы интерьера." },
      { title: "Продуманная организация", desc: "Закрытые секции обеспечивают аккуратное хранение." },
      { title: "Премиальная фурнитура", desc: "Качественная фурнитура и продуманная конструкция делают систему функциональной." },
    ],
  },

  // ============ 12. Рабочая зона с системой хранения — вариант 3 ============
  {
    id: 12,
    name: "Рабочая зона с системой хранения — вариант 3",
    category: "Рабочие зоны",
    tag: "РАБОЧАЯ ЗОНА • КАМЕНЬ",
    price: 4899,
    preview: "/products/product12/image1.png",
    description:
      "Цельная рабочая зона с просторным столом, встроенной модульной системой хранения, журнальными столиками и мягким поворотным креслом. Натуральный орех, камень, чёрный металл и карамельная кожа создают сдержанный и статусный интерьер.",
    images: [
      "/products/product12/image1.png",
      "/products/product12/image2.png",
      "/products/product12/image3.png",
      "/products/product12/image4.png",
      "/products/product12/image5.png",
    ],
    materials: [
      { name: "Шпон ореха", desc: "Тёмный", img: "/products/product12/mat1.png" },
      { name: "Металл", desc: "Чёрный, матовый", img: "/products/product12/mat2.png" },
      { name: "Натуральный камень", desc: "Мрамор", img: "/products/product12/mat3.png" },
      { name: "Светлый камень", desc: "Столешница", img: "/products/product12/mat4.png" },
      // { name: "Кожа", desc: "Карамельный оттенок", img: "/products/product12/mat5.png" },
    ],
    params: {
      shelfHeight: 2300,
      shelfWidth: 3000,
      shelfDepth: 450,
      chairHeight: 760,
      chairWidth: 880,
    },
    plan: "/products/product12/plan.png",
    features: [
      { title: "Просторный рабочий стол", desc: "Столешница с плавными краями и опорными боковинами из шпонированных панелей." },
      { title: "Модульная система хранения", desc: "Открытые ниши и закрытые секции; задняя стенка выполнена из натурального камня." },
      { title: "Продуманная композиция", desc: "Рабочий стол, книжные полки, журнальные столики и кресло объединены в единую зону." },
      { title: "Сочетание материалов", desc: "Дерево, камень, металл и натуральная кожа формируют выразительную фактурную палитру." },
    ],
  },
];

export function getProductById(id) {
  return catalogItems.find((item) => item.id === Number(id));
}