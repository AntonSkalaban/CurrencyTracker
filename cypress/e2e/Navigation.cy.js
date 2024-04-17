describe("Page Navigation", () => {
  it("should navigate to Timeline page", () => {
    cy.visit("/");

    cy.intercept("GET", "https://currency-converter18.p.rapidapi.com/api/v1/convert", {
      statusCode: 200,
      body: {
        from: "USD",
        to: "EUR",
        amount: 1,
        data: {
          rate: 0.85,
        },
      },
    });

    cy.get("nav").contains("Timeline").click();

    cy.url().should("include", "/timeline");

    cy.contains("Try yourself!");
  });
});
