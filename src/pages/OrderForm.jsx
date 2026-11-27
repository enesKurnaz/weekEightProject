import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import logo from "../../images/iteration-1-images/logo.svg";
import formBanner from "../../images/iteration-2-images/pictures/form-banner.png";

const TOPPINGS = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

const SIZES = [
  { value: "Küçük", short: "S" },
  { value: "Orta", short: "M" },
  { value: "Büyük", short: "L" },
];

const DOUGHS = ["İnce", "Orta", "Kalın"];

const BASE_PRICE = 85.5;
const TOPPING_PRICE = 5;

const initialForm = {
  isim: "",
  boyut: "",
  hamur: "",
  malzemeler: [],
  not: "",
  adet: 1,
};

export default function OrderForm({ setOrderData }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const newErrors = {};

    if (formData.isim.trim().length > 0 && formData.isim.trim().length < 3) {
      newErrors.isim = "İsim en az 3 karakter olmalıdır.";
    }
    if (formData.malzemeler.length > 0 && formData.malzemeler.length < 4) {
      newErrors.malzemeler = "En az 4 malzeme seçmelisiniz.";
    } else if (formData.malzemeler.length > 10) {
      newErrors.malzemeler = "En fazla 10 malzeme seçebilirsiniz.";
    }

    setErrors(newErrors);

    const formIsValid =
      formData.isim.trim().length >= 3 &&
      formData.boyut !== "" &&
      formData.hamur !== "" &&
      formData.malzemeler.length >= 4 &&
      formData.malzemeler.length <= 10;

    setIsValid(formIsValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedToppings = checked
          ? [...prev.malzemeler, value]
          : prev.malzemeler.filter((item) => item !== value);
        return { ...prev, malzemeler: updatedToppings };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleQuantityChange = (delta) => {
    setFormData((prev) => ({
      ...prev,
      adet: Math.max(1, prev.adet + delta),
    }));
  };

  const toppingsTotal = formData.malzemeler.length * TOPPING_PRICE;
  const grandTotal = (BASE_PRICE + toppingsTotal) * formData.adet;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    setApiError("");

    const payload = {
      isim: formData.isim.trim(),
      boyut: formData.boyut,
      hamur: formData.hamur,
      malzemeler: formData.malzemeler,
      özel: formData.not.trim(),
      adet: formData.adet,
      secimlerTutari: toppingsTotal,
      toplamTutar: grandTotal,
    };

    axios
      .post("https://reqres.in/api/pizza", payload, {
        headers: { "x-api-key": "free_user_3MYBvZ1CFbJRvQfLaTql8I1tUlO" },
      })
      .then((res) => {
        console.log("Sipariş Özeti (API Yanıtı):", res.data);
        setOrderData(res.data);
        history.push("/success");
      })
      .catch((err) => {
        console.error("Sipariş gönderim hatası:", err);
        setApiError("İnternet'e bağlanılamadı veya sipariş gönderilemedi. Lütfen tekrar deneyin.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-white text-[#292929] font-['Barlow',sans-serif] flex flex-col">
      {/* Kırmızı Üst Header */}
      <header className="bg-[#CE2829] py-8 px-4 flex justify-center">
        <Link to="/">
          <img src={logo} alt="Teknolojik Yemekler" className="h-9 sm:h-10" />
        </Link>
      </header>

      {/* Bej Banner + Ürün Tanıtım Alanı */}
      <section className="bg-[#FAF7F2] pb-10 px-4">
        <div className="max-w-[530px] mx-auto">
          <img
            src={formBanner}
            alt="Position Absolute Acı Pizza"
            className="w-full max-w-[460px] mx-auto mb-8"
          />

          <nav aria-label="Breadcrumb" className="text-sm text-[#5F5F5F] mb-6">
            <Link to="/" className="hover:text-[#292929]">
              Anasayfa
            </Link>
            <span> - </span>
            <strong className="text-[#CE2829] font-semibold">Sipariş Oluştur</strong>
          </nav>

          <h1 className="text-[1.4rem] font-semibold mb-4">Position Absolute Acı Pizza</h1>
          <div className="flex justify-between items-center mb-5">
            <span className="text-[1.75rem] font-bold">{BASE_PRICE.toFixed(2)}₺</span>
            <div className="flex gap-12 text-[#5F5F5F] text-[0.95rem]">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
          <p className="text-[#5F5F5F] leading-relaxed text-[0.95rem]">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana
            göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha
            sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
            genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
            lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </div>
      </section>

      {/* Form Alanı */}
      <main className="max-w-[530px] w-full mx-auto px-4 pt-10 pb-20 flex-1">
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {/* Boyut Seç (Yuvarlak S / M / L) */}
            <fieldset className="border-0 p-0 m-0">
              <legend className="text-[1.1rem] font-semibold mb-4">
                Boyut Seç <span className="text-[#CE2829]">*</span>
              </legend>
              <div className="flex items-center gap-4">
                {SIZES.map((size) => {
                  const isSelected = formData.boyut === size.value;
                  return (
                    <label
                      key={size.value}
                      htmlFor={`size-${size.value}`}
                      className="relative w-12 h-12 flex items-center justify-center cursor-pointer"
                    >
                      <input
                        id={`size-${size.value}`}
                        type="radio"
                        name="boyut"
                        value={size.value}
                        checked={isSelected}
                        onChange={handleChange}
                        className="appearance-none w-12 h-12 rounded-full bg-[#FAF7F2] checked:bg-[#FFEECC] transition cursor-pointer"
                      />
                      <span className="pointer-events-none absolute font-semibold text-sm text-[#5F5F5F]">
                        {size.short}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Hamur Seç */}
            <div>
              <label htmlFor="hamur-select" className="block text-[1.1rem] font-semibold mb-4">
                Hamur Seç <span className="text-[#CE2829]">*</span>
              </label>
              <select
                id="hamur-select"
                name="hamur"
                value={formData.hamur}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-md bg-[#FAF7F2] text-[#5F5F5F] text-sm font-medium border-0 cursor-pointer"
              >
                <option value="" disabled>
                  - Hamur Kalınlığı Seç -
                </option>
                {DOUGHS.map((dough) => (
                  <option key={dough} value={dough}>
                    {dough}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Ek Malzemeler (Özel Sarı Checkbox) */}
          <fieldset className="border-0 p-0 m-0 mb-10">
            <legend className="text-[1.1rem] font-semibold mb-2">Ek Malzemeler</legend>
            <p className="text-[#5F5F5F] text-sm mb-6">
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4">
              {TOPPINGS.map((topping) => {
                const isChecked = formData.malzemeler.includes(topping);
                const isDisabled = !isChecked && formData.malzemeler.length >= 10;
                return (
                  <label
                    key={topping}
                    htmlFor={`topping-${topping}`}
                    className={`flex items-center gap-3 text-[#5F5F5F] text-sm font-semibold cursor-pointer ${
                      isDisabled ? "opacity-45 cursor-not-allowed" : ""
                    }`}
                  >
                    <span className="relative flex items-center justify-center w-9 h-9 shrink-0">
                      <input
                        id={`topping-${topping}`}
                        type="checkbox"
                        name="malzemeler"
                        value={topping}
                        checked={isChecked}
                        disabled={isDisabled}
                        onChange={handleChange}
                        className="appearance-none w-9 h-9 rounded-md bg-[#FAF7F2] checked:bg-[#FDC913] transition cursor-pointer disabled:cursor-not-allowed"
                      />
                      {isChecked && (
                        <span className="pointer-events-none absolute text-[#292929] font-bold text-base">
                          ✓
                        </span>
                      )}
                    </span>
                    <span>{topping}</span>
                  </label>
                );
              })}
            </div>
            {errors.malzemeler && (
              <p className="text-[#CE2829] text-sm font-medium mt-3" role="alert">
                {errors.malzemeler}
              </p>
            )}
          </fieldset>

          {/* İsim */}
          <div className="mb-8">
            <label htmlFor="isim-input" className="block text-[1.1rem] font-semibold mb-3">
              Adınız Soyadınız <span className="text-[#CE2829]">*</span>
            </label>
            <input
              id="isim-input"
              type="text"
              name="isim"
              value={formData.isim}
              onChange={handleChange}
              placeholder="Adınızı giriniz (en az 3 karakter)"
              className="w-full px-4 py-4 bg-[#FAF7F2] rounded-md text-sm border-0"
            />
            {errors.isim && (
              <p className="text-[#CE2829] text-sm font-medium mt-2" role="alert">
                {errors.isim}
              </p>
            )}
          </div>

          {/* Sipariş Notu */}
          <div className="mb-8">
            <label htmlFor="not-textarea" className="block text-[1.1rem] font-semibold mb-3">
              Sipariş Notu
            </label>
            <textarea
              id="not-textarea"
              name="not"
              value={formData.not}
              onChange={handleChange}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              rows={2}
              className="w-full px-4 py-4 bg-[#FAF7F2] rounded-md text-sm border-0"
            />
          </div>

          <hr className="border-t border-[#D9D9D9] my-8" />

          {apiError && (
            <p className="text-[#CE2829] text-sm font-medium mb-4" role="alert">
              {apiError}
            </p>
          )}

          {/* Adet & Özet */}
          <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-start gap-6">
            <div
              className="flex items-center rounded-md overflow-hidden self-start bg-[#FAF7F2]"
              aria-label="Adet seçimi"
            >
              <button
                type="button"
                onClick={() => handleQuantityChange(-1)}
                aria-label="Adeti azalt"
                className="bg-[#FAF7F2] hover:bg-[#FDC913] w-12 h-12 text-lg font-bold transition cursor-pointer"
              >
                -
              </button>
              <span
                data-cy="quantity-value"
                className="w-12 h-12 flex items-center justify-center font-semibold bg-white border-y border-[#D9D9D9]"
              >
                {formData.adet}
              </span>
              <button
                type="button"
                onClick={() => handleQuantityChange(1)}
                aria-label="Adeti artır"
                className="bg-[#FAF7F2] hover:bg-[#FDC913] w-12 h-12 text-lg font-bold transition cursor-pointer"
              >
                +
              </button>
            </div>

            <aside className="flex-1 bg-[#FAF7F2] rounded-md overflow-hidden border border-[#D9D9D9]">
              <div className="px-8 py-6">
                <h2 className="text-[1.1rem] font-semibold mb-4">Sipariş Toplamı</h2>
                <div className="flex justify-between mb-2.5 text-[#5F5F5F] font-semibold">
                  <span>Seçimler</span>
                  <span>{toppingsTotal.toFixed(2)}₺</span>
                </div>
                <div className="flex justify-between text-[#CE2829] font-semibold">
                  <span>Toplam</span>
                  <span>{grandTotal.toFixed(2)}₺</span>
                </div>
              </div>
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                data-cy="submit-order"
                className="w-full bg-[#FDC913] text-[#292929] py-4 font-bold text-base cursor-pointer hover:brightness-95 transition disabled:opacity-55 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "GÖNDERİLİYOR..." : "SİPARİŞ VER"}
              </button>
            </aside>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}