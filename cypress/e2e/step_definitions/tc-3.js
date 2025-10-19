import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import pages from "../../fixtures/pages.json";
import MainPage from "../pages/MainPage";

When('the user clicks the "Contact us" link in the header', () => {
  MainPage.clickContactUsLink();
});

Then("the {string} form in the 'Contact us' page is displayed", (heading) => {
  MainPage.checkPageName(heading, pages["contact us"]["page heading"]);
});

Then("the URL of 'Contact us' contains {string}", (url) => {
  MainPage.checkUrlContains(url);
});
