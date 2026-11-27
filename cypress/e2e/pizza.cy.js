describe("Teknolojik Yemekler - Pizza Sipariş Akışı", () => {
  const BASE_URL = "http://localhost:5173";

  beforeEach(() => {
    cy.visit(`${BASE_URL}/order`);
  });

  it("İsim inputuna metin girilebilmeli ve 3 karakter altı validasyonu çalışmalı", () => {
    cy.get("#isim-input").type("Al");
    cy.contains("İsim en az 3 karakter olmalıdır.").should("be.visible");
    cy.get('[data-cy="submit-order"]').should("be.disabled");

    cy.get("#isim-input").clear().type("Enes");
    cy.get("#isim-input").should("have.value", "Enes");
    cy.contains("İsim en az 3 karakter olmalıdır.").should("not.exist");
  });

  it("Birden fazla malzeme seçilebilmeli ve fiyat dinamik güncellenmeli", () => {
    const toppings = ["Pepperoni", "Sosis", "Mısır", "Jalepeno"];

    toppings.forEach((item) => {
      cy.get(`#topping-${item}`).check().should("be.checked");
    });

    // 4 malzeme x 5₺ = 20.00₺, Toplam = 85.50 + 20.00 = 105.50₺
    cy.contains("20.00₺").should("be.visible");
    cy.contains("105.50₺").should("be.visible");
  });

  it("Anasayfadan başlayarak formu doldurup gönderebilmeli ve onay sayfasına geçmeli", () => {
    cy.visit(BASE_URL);
    cy.get('[data-cy="order-pizza-btn"]').click();
    cy.url().should("include", "/order");

    // Boyut ve hamur seçimi
    cy.get("#size-Orta").check();
    cy.get("#hamur-select").select("İnce");

    // En az 4 malzeme seçimi
    ["Pepperoni", "Sosis", "Mısır", "Ananas"].forEach((item) => {
      cy.get(`#topping-${item}`).check();
    });

    // İsim ve sipariş notu
    cy.get("#isim-input").type("Enes Kurnaz");
    cy.get("#not-textarea").type("Sıcak ve hızlı gelsin lütfen.");

    // Gönder butonu aktif olmalı ve tıklanınca /success açılmalı
    cy.get('[data-cy="submit-order"]').should("not.be.disabled").click();
    cy.url({ timeout: 10000 }).should("include", "/success");
    cy.contains("SİPARİŞ ALINDI").should("be.visible");
  });
});