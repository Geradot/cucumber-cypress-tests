import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../pages/MainPage";
import pages from "../../fixtures/pages.json";

When("the user opens the home page", () => {
  MainPage.visit(pages.main.url);
});

Then("the home page is displayed", () => {
  MainPage.getBgVideo().should("be.visible");
});
