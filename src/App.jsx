// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import "./App.css";
import { useMemo, useState } from "react";

const translations = {
  ru: {
    brand: "Чайхона",
    heroTitle: "ЧАЙХОНА",
    heroText:
      "Восточная кухня, красивые карточки блюд, удобный интерфейс и переключение языков.",
    menu: "Меню",
    all: "Все",
    grill: "Мангал",
    main: "Основные",
    soup: "Супы",
    ingredients: "Состав",
    aboutDish: "О блюде",
    details: "Подробнее",
    categories: "Категории",
    rating: "рейтинг",
    hours: "10:00 – 22:00",
    city: "Инчхон",
  },
  en: {
    brand: "Chaikhona",
    heroTitle: "CHAIIKHONA",
    heroText:
      "Eastern cuisine, beautiful food cards, smooth interface, and language switching.",
    menu: "Menu",
    all: "All",
    grill: "Grill",
    main: "Main",
    soup: "Soups",
    ingredients: "Ingredients",
    aboutDish: "About dish",
    details: "Details",
    categories: "Categories",
    rating: "rating",
    hours: "10:00 – 22:00",
    city: "Incheon",
  },
  kr: {
    brand: "차이호나",
    heroTitle: "앱처럼 보이는 레스토랑 사이트",
    heroText:
      "동양 요리, 아름다운 음식 카드, 편한 인터페이스, 언어 전환 기능.",
    menu: "메뉴",
    all: "전체",
    grill: "그릴",
    main: "메인",
    soup: "수프",
    ingredients: "재료",
    aboutDish: "요리 소개",
    details: "자세히",
    categories: "카테고리",
    rating: "평점",
    hours: "10:00 – 22:00",
    city: "인천",
  },
};

const dishes = [
  // МАНГАЛ
  {
    id: 1,
    category: "grill",
    image: "/images/kebab.jpg",
    title: { ru: "Люля-кебаб", en: "Kebab", kr: "케밥" },
    ingredients: {
      ru: "Говядина, специи",
      en: "Beef, spices",
      kr: "소고기, 향신료",
    },
    story: {
      ru: "Сочный кебаб, приготовленный на мангале.",
      en: "Juicy grilled meat.",
      kr: "숯불에서 구운 육즙 가득한 고기",
    },
    price: "9.0",
  },
  {
    id: 2,
    category: "grill",
    image: "/images/chicken.jpg",
    title: { ru: "Курица кусок", en: "Chicken", kr: "닭고기" },
    ingredients: {
      ru: "Курица, специи",
      en: "Chicken, spices",
      kr: "닭고기, 향신료",
    },
    story: {
      ru: "Ароматная курица на огне.",
      en: "Grilled chicken.",
      kr: "숯불 닭고기",
    },
    price: "9.0",
  },

  // ОСНОВНЫЕ
  {
    id: 3,
    category: "main",
    image: "/images/plov.jpg",
    title: { ru: "Плов", en: "Plov", kr: "플로브" },
    ingredients: {
      ru: "Рис, мясо, морковь",
      en: "Rice, meat, carrot",
      kr: "쌀, 고기, 당근",
    },
    story: {
      ru: "Традиционный плов восточной кухни.",
      en: "Traditional plov.",
      kr: "전통 플로브",
    },
    price: "13.0",
  },
  {
    id: 4,
    category: "main",
    image: "/images/manti.jpg",
    title: { ru: "Манты", en: "Manti", kr: "만티" },
    ingredients: {
      ru: "Тесто, мясо",
      en: "Dough, meat",
      kr: "반죽, 고기",
    },
    story: {
      ru: "Паровые манты с сочной начинкой.",
      en: "Steamed dumplings.",
      kr: "찐 만두",
    },
    price: "13.0",
  },

  // СУПЫ
  {
    id: 5,
    category: "soup",
    image: "/images/lagman.jpg",
    title: { ru: "Лагман", en: "Lagman", kr: "라그만" },
    ingredients: {
      ru: "Лапша, мясо",
      en: "Noodles, meat",
      kr: "면, 고기",
    },
    story: {
      ru: "Сытный суп с лапшой.",
      en: "Noodle soup.",
      kr: "면 요리",
    },
    price: "13.0",
  },
  {
    id: 6,
    category: "soup",
    image: "/images/shurpa.jpg",
    title: { ru: "Шурпа", en: "Shurpa", kr: "슈르파" },
    ingredients: {
      ru: "Мясной бульон",
      en: "Meat broth",
      kr: "고기 국",
    },
    story: {
      ru: "Наваристый восточный суп.",
      en: "Rich soup.",
      kr: "진한 국물",
    },
    price: "9.0",
  },
   {
    id: 7,
    category: "soup",
    image: "/images/shurpa.jpg",
    title: { ru: "Шурпа", en: "Shurpa", kr: "슈르파" },
    ingredients: {
      ru: "Мясной бульон",
      en: "Meat broth",
      kr: "고기 국",
    },
    story: {
      ru: "Наваристый восточный суп.",
      en: "Rich soup.",
      kr: "진한 국물",
    },
    price: "9.0",
  },
   {
    id: 8,
    category: "soup",
    image: "/images/shurpa.jpg",
    title: { ru: "Шурпа", en: "Shurpa", kr: "슈르파" },
    ingredients: {
      ru: "Мясной бульон",
      en: "Meat broth",
      kr: "고기 국",
    },
    story: {
      ru: "Наваристый восточный суп.",
      en: "Rich soup.",
      kr: "진한 국물",
    },
    price: "9.0",
  },
];

function App() {
  const [cart, setCart] = useState([]);
const [cartOpen, setCartOpen] = useState(false);
const [checkoutOpen, setCheckoutOpen] = useState(false);
const [orderForm, setOrderForm] = useState({
  name: "",
  phone: "",
  address: "",
  comment: "",
  orderType: "pickup",
});

function handleFormChange(e) {
  const { name, value } = e.target;
  setOrderForm((prev) => ({
    ...prev,
    [name]: value,
  }));
}

async function submitOrder(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Корзина пуста");
    return;
  }

  if (!orderForm.name || !orderForm.phone) {
    alert("Заполни имя и телефон");
    return;
  }

  if (orderForm.orderType === "delivery" && !orderForm.address) {
    alert("Введи адрес доставки");
    return;
  }

  const orderData = {
    customer: orderForm,
    items: cart.map((item) => ({
      id: item.id,
      title: item.title[lang],
      qty: item.qty,
      price: item.price,
    })),
    total: total.toFixed(2),
    createdAt: new Date().toLocaleString(),
  };

  try {
    const response = await fetch("/.netlify/functions/send-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      alert("Ошибка отправки заказа");
      return;
    }

    alert("Заказ отправлен в Telegram ✅");

    setCart([]);
    setCartOpen(false);
    setCheckoutOpen(false);
    setOrderForm({
      name: "",
      phone: "",
      address: "",
      comment: "",
      orderType: "pickup",
    });
  } catch (error) {
    console.error(error);
    alert("Ошибка соединения с сервером");
  }
}
function addToCart(dish) {
  setCart((prev) => {
    const exist = prev.find((item) => item.id === dish.id);

    if (exist) {
      return prev.map((item) =>
        item.id === dish.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    }

    return [...prev, { ...dish, qty: 1 }];
  });
}
function removeFromCart(id) {
  setCart((prev) => prev.filter((item) => item.id !== id));
}
const total = cart.reduce(
  (sum, item) => sum + item.qty * parseFloat(item.price),
  0
);
  const [lang, setLang] = useState("ru");
  const [activeCategory, setActiveCategory] = useState("all");

  const t = translations[lang];

  const filteredDishes = useMemo(() => {
    if (activeCategory === "all") return dishes;
    return dishes.filter((dish) => dish.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="app">
      <header className="header">
        <div className="brandWrap">
          <div className="logoBox">
            <img src="/images/logo.png" alt="Logo" className="logoImage" />
          </div>
          <div>
            <div className="brand">{t.brand}</div>
            <div className="brandSub">Eastern Cuisine</div>
          </div>
        </div>

        <div className="langSwitch">
          <button
            className={lang === "ru" ? "active" : ""}
            onClick={() => setLang("ru")}
          >
            RU
          </button>
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={lang === "kr" ? "active" : ""}
            onClick={() => setLang("kr")}
          >
            KR
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <span className="heroBadge">{t.city}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>

          <div className="heroMeta">
            <span>⭐ 4.9 {t.rating}</span>
            <span>🕒 {t.hours}</span>
            <span>📍 {t.city}</span>
          </div>
        </div>
      </section>

      <main className="container">
        <section className="sectionTop">
          <div>
            <h2>{t.categories}</h2>
          </div>
        </section>

        <div className="categories">
          <button
            className={activeCategory === "all" ? "active" : ""}
            onClick={() => setActiveCategory("all")}
          >
            {t.all}
          </button>
          <button
            className={activeCategory === "grill" ? "active" : ""}
            onClick={() => setActiveCategory("grill")}
          >
            {t.grill}
          </button>
          <button
            className={activeCategory === "main" ? "active" : ""}
            onClick={() => setActiveCategory("main")}
          >
            {t.main}
          </button>
          <button
            className={activeCategory === "soup" ? "active" : ""}
            onClick={() => setActiveCategory("soup")}
          >
            {t.soup}
          </button>
        </div>

        <section className="menuSection">
          <h2>{t.menu}</h2>

          <div className="cards">
            {filteredDishes.map((dish) => (
              <article className="card" key={dish.id}>
                <img src={dish.image} alt={dish.title[lang]} className="cardImage" />

                <div className="cardBody">
                  <div className="cardTop">
                    <div>
                      <h3>{dish.title[lang]}</h3>
                      <p className="categoryLabel">{dish.category}</p>
                    </div>
                    <div className="price">${dish.price}</div>
                  </div>

                  <div className="infoBox">
                    <div className="infoTitle">{t.ingredients}</div>
                    <p>{dish.ingredients[lang]}</p>
                  </div>

                  <div className="infoBox">
                    <div className="infoTitle">{t.aboutDish}</div>
                    <p>{dish.story[lang]}</p>
                  </div>

                  <button
  className="addBtn"
  onClick={() => addToCart(dish)}
>
  ➕ В корзину
</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <nav className="bottomNav">
        <button>🏠</button>
        <button>🍽️</button>
        <button>📍</button>
        <button>📞</button>
      </nav>
      <button className="orderBtn">
        <button className="cartBtn" onClick={() => setCartOpen(true)}>
  🛒 ({cart.length})
</button>
  🍽 Заказать
</button>


{cartOpen && (
  <div className="cartModal">
    <div className="cartContent">
      <h2>Корзина</h2>

      {cart.length === 0 && <p>Пусто</p>}

      {cart.map((item) => (
        <div key={item.id} className="cartItem">
          <div>
            {item.title[lang]} x {item.qty}
          </div>
          <div>${item.price}</div>
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}

      <h3>Итого: ${total.toFixed(2)}</h3>

      <button
  className="checkoutBtn"
  onClick={() => {
    setCartOpen(false);
    setCheckoutOpen(true);
  }}
>
  Оформить заказ
</button>

      <button onClick={() => setCartOpen(false)}>
        Закрыть
      </button>
    </div>
  </div>
)}


{checkoutOpen && (
  <div className="checkoutModal">
    <div className="checkoutContent">
      <h2>Оформление заказа</h2>

      <form onSubmit={submitOrder} className="checkoutForm">
        <label>
          Имя
          <input
            type="text"
            name="name"
            value={orderForm.name}
            onChange={handleFormChange}
            placeholder="Введите имя"
          />
        </label>

        <label>
          Телефон
          <input
            type="tel"
            name="phone"
            value={orderForm.phone}
            onChange={handleFormChange}
            placeholder="Введите телефон"
          />
        </label>

        <label>
          Способ получения
          <select
            name="orderType"
            value={orderForm.orderType}
            onChange={handleFormChange}
          >
            <option value="pickup">Самовывоз</option>
            <option value="delivery">Доставка</option>
          </select>
        </label>

        {orderForm.orderType === "delivery" && (
          <label>
            Адрес
            <input
              type="text"
              name="address"
              value={orderForm.address}
              onChange={handleFormChange}
              placeholder="Введите адрес"
            />
          </label>
        )}

        <label>
          Комментарий
          <textarea
            name="comment"
            value={orderForm.comment}
            onChange={handleFormChange}
            placeholder="Комментарий к заказу"
            rows="4"
          />
        </label>

        <div className="checkoutSummary">
          <h3>Ваш заказ</h3>
          {cart.map((item) => (
            <div key={item.id} className="summaryRow">
              <span>
                {item.title[lang]} x {item.qty}
              </span>
              <span>${(item.qty * parseFloat(item.price)).toFixed(2)}</span>
            </div>
          ))}
          <div className="summaryTotal">
            <strong>Итого:</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>

        <div className="checkoutActions">
          <button type="submit" className="confirmBtn">
            Подтвердить заказ
          </button>

          <button
            type="button"
            className="closeBtn"
            onClick={() => setCheckoutOpen(false)}
          >
            Закрыть
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
  );
}

export default App;
