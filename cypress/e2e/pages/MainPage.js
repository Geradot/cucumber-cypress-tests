import BasePage from "./BasePage";
import pages from "../../fixtures/pages.json";

class MainPage extends BasePage {
  getBgVideo() {
    return cy.get("video");
  }

  getCallAgentBtn() {
    return cy.get("span[data-content='CALL YOUR AGENT']");
  }

  getAiTabs() {
    return cy.get("#interactive-tool-demo").find("button[role='tab']");
  }

  getAiTab(tab) {
    return this.getAiTabs().filter(`[aria-label="${tab}"]`);
  }

  getPlayAudioBtn() {
    return cy.get("button[aria-label='Play audio']");
  }

  getRoleSelect() {
    return cy.contains("label", "Role").next();
  }

  getTextarea() {
    return cy.get("#text-to-speech-textarea");
  }

  getContactUsLink() {
    return cy.get(`header a[href$="${pages["contact us"].url}"]`).eq(1);
  }

  getAccordion() {
    return cy.get("div[aria-label='HOW IT WORKS']").find("button[role='tab']");
  }

  getFirstExampleCode() {
    return cy.contains('"phone_numbers": [').closest("div[role='tabpanel']");
  }

  getSecondExampleCode() {
    return cy.contains('"messages": [').closest("div[role='tabpanel']");
  }

  getRightArrow() {
    return this.getFirstExampleCode()
      .parent()
      .parent()
      .find("button[aria-label='Go to next item']")
      .eq(0);
  }

  checkContactUsLinkExist() {
    return this.getContactUsLink().should("exist");
  }

  checkFirstExampleCodeVisible() {
    this.getFirstExampleCode().should("be.visible");
  }

  checkSecondExampleCodeVisible() {
    this.getSecondExampleCode().should("be.visible");
  }

  clickRightArrow() {
    this.getRightArrow().should("be.visible").click();
    return this;
  }

  clickContactUsLink() {
    this.checkContactUsLinkExist().click();
  }

  checkCountItemsInAccordion(count) {
    this.getAccordion().should("have.length", count);
  }

  findTheTabInAccordion(title) {
    return this.getAccordion().contains(title);
  }

  clickTabInAccordion(title) {
    this.findTheTabInAccordion(title).should("be.visible").click();
    return this;
  }

  checkActiveTabInAccordion(index) {
    this.getAccordion()
      .should("exist")
      .eq(index)
      .and(...this.matchToAriaSelected)
      .and(...this.matchToDataStateActive);
  }

  checkTabText(expectedText) {
    cy.get("p")
      .contains(expectedText)
      .should("exist")
      .parent()
      .should("be.visible");
  }

  selectRole(role) {
    return cy.contains(role).should("exist").click();
  }

  clickCallAgentBtn() {
    this.getCallAgentBtn().should("exist").click();
    return this;
  }

  checkTextarea(substr) {
    this.getTextarea().should("include.value", substr);
  }

  checkAiTabActive(tabName) {
    this.getAiTab(tabName).should(...this.matchToAriaSelected);
  }

  checkPlayAudioBtnExist() {
    return this.getPlayAudioBtn().should("exist");
  }

  clickAiTab(matchText) {
    this.getAiTab(matchText).should("be.visible").click();
    return this;
  }

  checkRoleSelectVisible() {
    return this.getRoleSelect().should("be.visible");
  }

  clickRoleSelect() {
    this.checkRoleSelectVisible().click();
    return this;
  }
}

export default new MainPage();
