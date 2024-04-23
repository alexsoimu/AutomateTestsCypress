describe("On LinkedIn", () => {
  it("I can login.", () => {
    cy.visit("https://linkedin.com");

    cy.get(".nav__button-secondary").click();
    cy.get("#username").type("soimualex97@gmail.com");
    cy.get("#password").type("*********");
    cy.get(".btn__primary--large").click();

    cy.get("#ember18").should("exist");
  });
});
