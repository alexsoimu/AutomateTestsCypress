describe("Exemplu unde", () => {
  // Test verificare segment din URL
  it("verific daca un URL contine ceva", () => {
    cy.visit(
      "https://www.digisport.ro/tenis/cosac-nu-crede-ca-halep-va-juca-in-billie-jean-king-cup-ce-spune-despre-participarea-ei-la-jo-2888473"
    );
    cy.get("#onetrust-accept-btn-handler").click();
    cy.url().should("include", "/tenis/"); // verifica un segment
  });
  // Testul cu delay
  it("asteapta 10 secunde", () => {
    cy.visit("https://google.com");
    cy.get("#L2AGLb > .QS5gu").click();
    cy.wait(2000);
    cy.get("#APjFqb").type("Asteapta 2 secunde");
  });
  // Testul cu selector de timp atribut
  it("selectez folosind un atribut", () => {
    cy.visit("https://www.google.com");
    cy.get("#L2AGLb > .QS5gu").click();
    cy.get('[alt="Google"]').should("be.visible"); // Selector atribut alt + assertion cu visible
  });
  // Testul screenshot pagina
  it("fac un screenshot la pagina", () => {
    cy.visit("https://www.google.com");
    cy.get("#L2AGLb > .QS5gu").click();
    cy.screenshot(); // Face screenshot intr-un folder
  });
  // Testul constanta si verificare continut input
  it("verific o valoare din input", () => {
    cy.visit("https://www.google.com");
    cy.get("#L2AGLb > .QS5gu").click();
    const googleSearch = cy.get(".gLFyf"); // constanta
    googleSearch.type("123");
    googleSearch.should("have.value", "123"); // Assertion contine textul
  });
  // Testul verifica existenta unei clase pe un element selectat
  it("verific o valoare din input", () => {
    cy.visit("https://www.libris.ro");
    cy.get("#autoCompleteButton").should("have.class", "onSearchClick"); // Exista clasa pe buton?
  });
});
