import logoFooter from "../../images/iteration-2-images/footer/logo-footer.svg";
import icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import li0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import li1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import li2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import li3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import li4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import li5 from "../../images/iteration-2-images/footer/insta/li-5.png";

const HOT_MENUS = [
  "Terminal Pizza",
  "5 Kişilik Hackathlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger",
];

const INSTA_IMAGES = [li0, li1, li2, li3, li4, li5];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white font-['Barlow',sans-serif] pt-16 pb-8">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/15">
          {/* Sol: Logo & İletişim */}
          <div className="flex flex-col gap-6">
            <img src={logoFooter} alt="Teknolojik Yemekler" className="w-40" />
            <ul className="flex flex-col gap-4 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <img src={icon1} alt="Adres" className="w-5 h-5 mt-0.5" />
                <span>
                  341 Londonderry Road,
                  <br />
                  Istanbul Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3">
                <img src={icon2} alt="E-posta" className="w-5 h-5" />
                <span>aciktim@teknolojikyemekler.com</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={icon3} alt="Telefon" className="w-5 h-5" />
                <span>+90 216 123 45 67</span>
              </li>
            </ul>
          </div>

          {/* Orta: Hot Menu */}
          <div>
            <h2 className="text-xl font-medium mb-6">Hot Menu</h2>
            <ul className="flex flex-col gap-3 text-sm text-white/85">
              {HOT_MENUS.map((item) => (
                <li key={item} className="hover:text-[#FDC913] transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sağ: Instagram */}
          <div>
            <h2 className="text-xl font-medium mb-6">Instagram</h2>
            <div className="grid grid-cols-3 gap-3 max-w-[300px]">
              {INSTA_IMAGES.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Instagram gönderisi ${index + 1}`}
                  className="w-full aspect-square object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-between items-center text-sm text-white/70">
          <p>© 2023 Teknolojik Yemekler.</p>
          <span aria-label="Twitter" className="text-white/85">
            𝕏
          </span>
        </div>
      </div>
    </footer>
  );
}