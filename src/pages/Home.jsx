import { Link } from "react-router-dom";
import logo from "../../images/iteration-1-images/logo.svg";
import homeBanner from "../../images/iteration-1-images/home-banner.png";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#CE2829] bg-cover bg-bottom bg-no-repeat flex flex-col items-center pt-12 px-4 text-center text-white"
      style={{ backgroundImage: `url(${homeBanner})` }}
    >
      <header className="mb-10">
        <img src={logo} alt="Teknolojik Yemekler" className="h-10 sm:h-12" />
      </header>

      <section className="flex flex-col items-center max-w-2xl">
        <h1 className="font-['Roboto_Condensed',sans-serif] font-light text-5xl sm:text-7xl leading-tight tracking-wide uppercase mb-8">
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h1>

        <Link
          to="/order"
          data-cy="order-pizza-btn"
          className="bg-[#FDC913] text-[#292929] font-['Barlow',sans-serif] font-semibold text-base sm:text-lg px-12 py-3.5 rounded-full hover:brightness-95 transition"
        >
          ACIKTIM
        </Link>
      </section>
    </main>
  );
}