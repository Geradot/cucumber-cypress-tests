import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import capabilities from "../../fixtures/capabilities.json";
import MainPage from "../pages/MainPage";

const [firstKey, firstValue] = Object.entries(capabilities).at(0);
const [lastKey, lastValue] = Object.entries(capabilities).at(-1);

When('the user scrolls to the "HOW IT WORKS" section', () => {
  MainPage.getAccordion().parent().scrollIntoView();
});

Then("the section has {int} collapsible blocks", (countItems) => {
  MainPage.checkCountItemsInAccordion(countItems);
});

Then("the {string}, first block, is active", (tabName) => {
  if (firstValue.title === tabName)
    MainPage.checkActiveTabInAccordion(+firstKey);
});

When("the user clicks the {string} text", (tabName) => {
  if (lastValue.title === tabName) {
    MainPage.clickTabInAccordion(tabName);
  }
});

Then("the {string}, last block, is active", (tabName) => {
  if (lastValue.title === tabName) {
    MainPage.checkActiveTabInAccordion(+lastKey);
  }
});

Then("the corresponding text for this block is displayed below", () => {
  MainPage.checkTabText(lastValue.description);
});
