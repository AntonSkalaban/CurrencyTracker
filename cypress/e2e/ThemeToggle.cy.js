describe("ThemeToggle e2e", () => {
  it("Should change theme", () => {
    cy.visit("/");

    cy.get('[data-testid="timeline"]').should("have.css", "color", "rgb(32, 32, 37)");
    cy.get('[data-testid="theme-toggle"]').last().click({ force: true });
    cy.get('[data-testid="timeline"]').should("have.css", "color", "rgb(217, 217, 217)");
  });
});
