import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import logo from "../../images/iteration-1-images/logo.svg";
import homeBanner from "../../images/iteration-1-images/home-banner.png";

import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";

import kart1 from "../../images/iteration-2-images/cta/kart-1.png";
import kart2 from "../../images/iteration-2-images/cta/kart-2.png";
import kart3 from "../../images/iteration-2-images/cta/kart-3.png";

import food1 from "../../images/iteration-2-images/pictures/food-1.png";
import food2 from "../../images/iteration-2-images/pictures/food-2.png";
import food3 from "../../images/iteration-2-images/pictures/food-3.png";

const CATEGORIES = [
  { id: "kore", label: "YENİ! Kore", tabLabel: "Ramen", icon: icon1 },
  { id: "pizza", label: "Pizza", tabLabel: "Pizza", icon: icon2 },
  { id: "burger", label: "Burger", tabLabel: "Burger", icon: icon3 },
  { id: "kizartma", label: "Kızartmalar", tabLabel: "French fries", icon: icon4 },
  { id: "fastfood", label: "Fast food", tabLabel: "Fast food", icon: icon5 },
  { id: "icecek", label: "Gazlı İçecek", tabLabel: "Soft drinks", icon: icon6 },
];

const POPULAR_FOODS = [
  {
    id: 1,
    name: "Terminal Pizza",
    rating: "4.9",
    reviews: "(200)",
    price: "60₺",
    image: food1,
  },
  {
    id: 2,
    name: "Position Absolute Acı Pizza",
    rating: "4.9",
    reviews: "(200)",
    price: "60₺",
    image: food2,
  },
  {
    id: 3,
    name: "useEffect Tavuklu Burger",
    rating: "4.9",
    reviews: "(200)",
    price: "60₺",
    image: food3,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("pizza");

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#292929] font-['Barlow',sans-serif]">
      {/* Hero */}
      <section
        className="min-h-[85vh] bg-[#CE2829] bg-cover bg-bottom bg-no-repeat flex flex-col items-center pt-12 px-4 text-center text-white"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        <header className="mb-8">
          <img src={logo} alt="Teknolojik Yemekler" className="h-10 sm:h-12" />
        </header>

        <div className="flex flex-col items-center max-w-2xl">
          <p className="font-['Satisfy',cursive] text-[#FDC913] text-2xl sm:text-3xl mb-1">
            fırsatı kaçırma
          </p>
          <h1 className="font-['Roboto_Condensed',sans-serif] font-light text-5xl sm:text-7xl leading-tight tracking-wide uppercase mb-8">
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </h1>

          <Link
            to="/order"
            data-cy="order-pizza-btn"
            className="bg-[#FDC913] text-[#292929] font-semibold text-base sm:text-lg px-12 py-3.5 rounded-full hover:brightness-95 transition"
          >
            ACIKTIM
          </Link>
        </div>
      </section>

      {/* Kategori Bar */}
      <nav aria-label="Kategoriler" className="bg-white py-6 shadow-xs">
        <ul className="max-w-[1060px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <Link
                to="/order"
                className="flex items-center justify-center gap-3 text-sm font-medium text-[#292929] hover:text-[#CE2829] transition"
              >
                <img src={cat.icon} alt="" className="w-8 h-8" />
                <span>{cat.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="max-w-[1060px] mx-auto px-4 py-16">
        {/* Kampanya / Promo Kartları */}
        <section aria-label="Öne Çıkan Kampanyalar" className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {/* Sol Büyük Kart */}
          <article
            className="rounded-xl bg-cover bg-center p-8 sm:p-10 text-white min-h-[340px] flex flex-col items-start justify-start"
            style={{ backgroundImage: `url(${kart1})` }}
          >
            <h2 className="font-['Quattrocento',serif] font-bold text-5xl leading-tight mb-3">
              Özel
              <br />
              Lezzetus
            </h2>
            <p className="text-base font-medium mb-6">Position:Absolute Acı Burger</p>
            <Link
              to="/order"
              className="bg-white text-[#CE2829] text-xs font-bold uppercase px-6 py-3 rounded-full hover:bg-[#FAF7F2] transition"
            >
              SİPARİŞ VER
            </Link>
          </article>

          {/* Sağ 2 Kart */}
          <div className="grid grid-rows-2 gap-4">
            <article
              className="rounded-xl bg-cover bg-center p-8 text-white flex flex-col items-start justify-center min-h-[160px]"
              style={{ backgroundImage: `url(${kart2})` }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
                Hackathlon
                <br />
                Burger Menü
              </h2>
              <Link
                to="/order"
                className="bg-white text-[#CE2829] text-xs font-bold uppercase px-6 py-3 rounded-full hover:bg-[#FAF7F2] transition"
              >
                SİPARİŞ VER
              </Link>
            </article>

            <article
              className="rounded-xl bg-cover bg-center p-8 text-[#292929] flex flex-col items-start justify-center min-h-[160px]"
              style={{ backgroundImage: `url(${kart3})` }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
                <span className="text-[#CE2829]">Çoooook</span> hızlı
                <br />
                npm gibi kurye
              </h2>
              <Link
                to="/order"
                className="bg-white text-[#CE2829] text-xs font-bold uppercase px-6 py-3 rounded-full hover:bg-[#FAF7F2] transition"
              >
                SİPARİŞ VER
              </Link>
            </article>
          </div>
        </section>

        {/* En Çok Paketlenen Menüler */}
        <section className="text-center">
          <p className="font-['Satisfy',cursive] text-[#CE2829] text-2xl sm:text-3xl mb-2">
            en çok paketlenen menüler
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Acıktıran Kodlara Doyuran Lezzetler
          </h2>

          {/* Kategori Sekmeleri */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition cursor-pointer ${
                    isActive
                      ? "bg-[#292929] text-white"
                      : "bg-white text-[#292929] hover:bg-gray-100"
                  }`}
                >
                  <img src={cat.icon} alt="" className="w-6 h-6" />
                  <span>{cat.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Ürün Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {POPULAR_FOODS.map((food) => (
              <Link
                key={food.id}
                to="/order"
                className="bg-white rounded-xl p-6 hover:shadow-md transition flex flex-col justify-between"
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-56 object-contain mb-4"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
                  <div className="flex justify-between items-center text-sm text-[#5F5F5F] font-semibold">
                    <span>{food.rating}</span>
                    <span>{food.reviews}</span>
                    <span className="text-[#292929] text-base font-bold">{food.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}