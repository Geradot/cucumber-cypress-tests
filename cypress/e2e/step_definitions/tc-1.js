import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import pages from "../../fixtures/pages.json";
import navigation from "../../fixtures/navigation.json";
import MainPage from "../pages/MainPage";
import VoiceAiPage from "../pages/Products/VoiceAi";
import SignUpPage from "../pages/SignUpPage";

When("the user opens {string} → {string} from the header", (menu, item) => {
  MainPage.openTheMenuItem(menu).openTheMenuItem(item);
});

Then("the {string} page from the 'Voice AI' is displayed", (pageName) => {
  VoiceAiPage.checkPageName(
    pageName,
    navigation.products.submenu.voice["voice ai"]["page heading"]
  );
});

Then("the URL of 'Voice AI Agents' contains {string}", (url) => {
  VoiceAiPage.checkUrlContains(url);
});

When("the user clicks the {string} button", (buttonText) => {
  VoiceAiPage.clickStartBuildingBtn(buttonText);
});

Then("the {string} form in the 'Sign Up' page is displayed", (pageName) => {
  SignUpPage.checkPageName(pageName, pages["sign up"]["page heading"]);
});

Then("the URL of 'Sign Up' contains {string}", (url) => {
  SignUpPage.checkUrlContains(url);
});
