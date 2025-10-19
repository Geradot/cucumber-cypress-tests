import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import pages from "../../fixtures/pages.json";
import MainPage from "../pages/MainPage";

When(
  'the user clicks the "CALL YOUR AGENT" button at the bottom of viewport',
  () => {
    MainPage.clickCallAgentBtn();
  }
);

Then("the page is scrolled to the tabs block", () => {
  MainPage.getAiTab(pages.main["ai tabs"]["hd voice ai"]["tab name"])
    .scrollIntoView()
    .should("be.visible");
});

Then("the {string}, first tab, is active", (tabName) => {
  MainPage.checkAiTabActive(tabName);
});

When("the user click the {string} tab", (tabName) => {
  MainPage.clickAiTab(tabName);
});

Then("the {string}, second tab, is active", (tabName) => {
  MainPage.checkAiTabActive(tabName);
  MainPage.checkPlayAudioBtnExist();
});

Then("the form of 'Text to speech' tab is visible", () => {
  MainPage.checkTextarea(
    pages.main["ai tabs"]["text to speech"].roles[0]["checking text"]
  );
});

When('the user opens the "Role" select', () => {
  MainPage.clickRoleSelect();
});

Then("the list of Roles has {int} items", (countRoles) => {
  const roles = pages.main["ai tabs"]["text to speech"].roles;
  expect(countRoles).to.equal(roles.length);
});

When("the user selects {string} role", (roleName) => {
  expect(roleName).to.equal(
    pages.main["ai tabs"]["text to speech"].roles[1]["name"]
  );
  MainPage.selectRole(roleName);
});

Then("the textarea text contains {string}", (checkingText) => {
  expect(checkingText).to.equal(
    pages.main["ai tabs"]["text to speech"].roles[1]["checking text"]
  );
  MainPage.checkTextarea(checkingText);
});
