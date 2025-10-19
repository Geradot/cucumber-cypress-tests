import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../pages/MainPage";

When(
  "the user scrolls to the {string}, above 'HOW IT WORKS', section",
  (sectionName) => {
    MainPage.getSectionByName(sectionName).scrollIntoView();
  }
);

Then("the code block of the selected example is visible", (sectionName) => {
  MainPage.checkFirstExampleCodeVisible();
});

When("the user clicks the right arrow at the end of the examples list", () => {
  MainPage.clickRightArrow();
});

Then('the "Chat with a language model" code example is visible', () => {
  if (Cypress.env("CI")) {
    cy.wait(500);
  }
  MainPage.checkSecondExampleCodeVisible();
});
