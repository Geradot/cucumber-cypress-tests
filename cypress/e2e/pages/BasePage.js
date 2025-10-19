class BasePage {
  matchToDataStateActive = ["have.attr", "data-state", "active"];
  matchToDataStateOpen = ["have.attr", "data-state", "open"];
  matchToDataStateClosed = ["have.attr", "data-state", "closed"];
  matchToAriaSelected = ["have.attr", "aria-selected", "true"];

  getNavItems() {
    return cy.get("#main-menu-content");
  }

  getMenuButton() {
    return cy.get("button[aria-controls='main-menu-content']");
  }

  getPageName() {
    return cy.get("h1");
  }

  visit(url) {
    cy.visit(url);
  }

  checkPageName(name = "", expectedName) {
    if (name)
      this.getPageName()
        .contains(name)
        .should("be.visible")
        .and("have.text", expectedName);
    else this.getPageName().should("be.visible").and("have.text", expectedName);
  }

  getSectionByName(title) {
    return cy.contains(title);
  }

  openTheMenuItem(title) {
    this.getNavItems()
      .should("exist")
      .should("be.visible")
      .contains(title)
      .click();
    return this;
  }

  checkUrlContains(expected) {
    cy.url().should("include", expected);
  }
}

export default BasePage;
