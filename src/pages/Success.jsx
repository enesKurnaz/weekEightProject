import { Link } from "react-router-dom";
import logo from "../../images/iteration-1-images/logo.svg";

export default function Success({ orderData }) {
  return (
    <main className="min-h-screen bg-[#CE2829] text-white flex flex-col items-center px-4 py-12 font-['Barlow',sans-serif]">
      <header className="mb-12">
        <Link to="/">
          <img src={logo} alt="Teknolojik Yemekler" className="h-10 sm:h-12" />
        </Link>
      </header>

      <section className="w-full max-w-[530px] flex flex-col items-center text-center">
        <p className="font-['Satisfy',cursive] text-[#FDC913] text-2xl sm:text-3xl mb-2">
          lezzetin yolda
        </p>
        <h1 className="font-['Roboto_Condensed',sans-serif] font-light text-5xl sm:text-7xl leading-tight tracking-wide uppercase mb-8">
          SİPARİŞ ALINDI
        </h1>

        <hr className="w-full border-t border-white/60 mb-8" />

        {!orderData ? (
          <div className="flex flex-col items-center gap-6">
            <p className="text-lg">Henüz aktif bir sipariş özeti bulunmuyor.</p>
            <Link
              to="/order"
              className="bg-[#FDC913] text-[#292929] font-semibold px-8 py-3 rounded-full hover:brightness-95 transition"
            >
              Sipariş Oluştur
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-[350px] flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-8">Position Absolute Acı Pizza</h2>

            <div className="w-full text-left flex flex-col gap-3 text-sm sm:text-base mb-10 px-4">
              <p>
                <span className="opacity-80">Müşteri: </span>
                <strong className="font-semibold">{orderData.isim}</strong>
              </p>
              <p>
                <span className="opacity-80">Boyut: </span>
                <strong className="font-semibold">{orderData.boyut}</strong>
              </p>
              <p>
                <span className="opacity-80">Hamur: </span>
                <strong className="font-semibold">{orderData.hamur}</strong>
              </p>
              <p>
                <span className="opacity-80">Ek Malzemeler: </span>
                <strong className="font-semibold">
                  {Array.isArray(orderData.malzemeler)
                    ? orderData.malzemeler.join(", ")
                    : ""}
                </strong>
              </p>
              {orderData.özel && (
                <p>
                  <span className="opacity-80">Sipariş Notu: </span>
                  <strong className="font-semibold">{orderData.özel}</strong>
                </p>
              )}
              <p>
                <span className="opacity-80">Adet: </span>
                <strong className="font-semibold">{orderData.adet}</strong>
              </p>
            </div>

            <aside className="w-full border border-white/60 rounded-md p-8 text-left">
              <h3 className="text-lg font-semibold mb-5">Sipariş Toplamı</h3>
              <div className="flex justify-between mb-3 text-base">
                <span>Seçimler</span>
                <span>{Number(orderData.secimlerTutari || 0).toFixed(2)}₺</span>
              </div>
              <div className="flex justify-between text-base font-semibold">
                <span>Toplam</span>
                <span>{Number(orderData.toplamTutar || 0).toFixed(2)}₺</span>
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}