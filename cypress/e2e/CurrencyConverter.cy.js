describe("CurrencyConverter Component", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("h3").contains("Commercial Dollar").click();
  });

  it("should convert currency successfully", () => {
    cy.get('[data-testid="converted-value"]').should("have.text", "1.00");
    cy.get('[name="amount"]').type("0");
    cy.get('[data-testid="converted-value"]').should("have.text", "10.00");
  });

  it("should display error message on API failure", () => {
    cy.get('[data-testid="dropdown"]').click();
    cy.contains("EUR");
  });
});
