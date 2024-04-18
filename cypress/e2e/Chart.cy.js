describe("Chart Component", () => {
  it("should display loading spinner while fetching data", () => {
    cy.visit("/timeline");

    cy.intercept(
      "GET",
      "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_EUR_USD/history*",
      (req) => {
        req.reply({
          statusCode: 200,
          body: [
            {
              time_period_start: "2024-03-16T00:00:00.0000000Z",
              time_period_end: "2024-03-17T00:00:00.0000000Z",
              time_open: "2024-03-16T00:07:25.5940000Z",
              time_close: "2024-03-16T23:52:52.2280000Z",
              price_open: 1.08839,
              price_high: 1.08938,
              price_low: 1.08694,
              price_close: 1.08938,
              volume_traded: 1778159.41134,
              trades_count: 2421,
            },
          ],
        });
      },
    ).as("fetchHistory");

    cy.get("canvas").should("not.exist");
    cy.get('[data-testid="loading-spinner"]').should("exist");

    cy.wait("@fetchHistory").then(() => {
      cy.get('[data-testid="loading-spinner"]').should("not.exist");
      cy.get("canvas").should("exist");
    });
  });

  it("should display error message if data fetching fails", () => {
    cy.clearLocalStorage();
    cy.getAllLocalStorage().should("be.empty");
    cy.intercept(
      "GET",
      "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_EUR_USD/history*",
      (req) => {
        req.reply({
          statusCode: 500,
          body: [],
        });
      },
    ).as("fetchHistory");
    cy.visit("/timeline");

    cy.wait("@fetchHistory").then((interception) => {
      expect(interception.response.statusCode).to.equal(500);
      cy.get("h2").contains("Error..").should("exist");
    });
  });
});
