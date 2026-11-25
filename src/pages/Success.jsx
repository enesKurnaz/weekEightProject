import logo from "../../images/iteration-1-images/logo.svg";

export default function Success({ orderData }) {
  return (
    <main className="min-h-screen bg-[#CE2829] text-white flex flex-col items-center px-4 pt-12 text-center">
      <header>
        <img src={logo} alt="Teknolojik Yemekler" className="h-10 sm:h-12" />
      </header>

      <section className="flex-1 flex flex-col items-center justify-center -mt-16">
        <h1 className="font-['Roboto_Condensed',sans-serif] font-light text-5xl sm:text-7xl leading-tight tracking-wide uppercase">
          TEBRİKLER!
          <br />
          SİPARİŞİNİZ ALINDI!
        </h1>
      </section>
    </main>
  );
}