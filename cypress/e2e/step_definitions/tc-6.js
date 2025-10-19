import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import navigation from "../../fixtures/navigation.json";
import MainPage from "../pages/MainPage";
import OurNetworkPage from "../pages/Why Telnyx/OurNetworkPage";

const menuItem = navigation["why telnyx"];
const subMenuItem = navigation["why telnyx"].submenu["our network"];

When(
  "the user opens {string} in the {string}, first menu item",
  (item, menu) => {
    if (menu === menuItem.title && item === subMenuItem.title)
      MainPage.openTheMenuItem(menu).openTheMenuItem(item);
  }
);

Then('the "Our Network" page from the "Why Telnyx" menu is displayed', () => {
  MainPage.checkPageName(null, subMenuItem["page heading"]);
});

Then('the URL of "Our Network" contains {string}', (url) => {
  if (url === subMenuItem.url) MainPage.checkUrlContains(url);
});

When(
  "the user scrolls to the {string} section on the 'Our Network' page",
  (sectionName) => {
    OurNetworkPage.getSectionByName(sectionName).scrollIntoView();
  }
);

Then("{int} collapsible blocks are visible", (countItems) => {
  OurNetworkPage.getQuestions().should("have.length", countItems);
});

Then("the first {string} block is active in the FAQ section", (question) => {
  OurNetworkPage.checkQuestionOpened(question);
});

When("the user clicks the {string}, fourth block", (question) => {
  OurNetworkPage.getQuestion(question).click();
});

Then(
  "the corresponding text for {string} block is displayed below",
  (question) => {
    OurNetworkPage.checkQuestionOpened(question);
  }
);

Then("the first {string} block's text is hidden", (question) => {
  OurNetworkPage.checkQuestionClose(question);
});
