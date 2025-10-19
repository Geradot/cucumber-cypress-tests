import BasePage from "../BasePage";
import { capitalize } from "../../../support/utils";

class VoiceAiPage extends BasePage {
  getStartBuildingBtn(text) {
    const formattedText = capitalize(text);
    return cy.get(`span[data-content='${formattedText}']`).parent();
  }

  clickStartBuildingBtn(buttonText) {
    this.getStartBuildingBtn(buttonText).should("be.visible").click();
    return this;
  }
}

export default new VoiceAiPage();
