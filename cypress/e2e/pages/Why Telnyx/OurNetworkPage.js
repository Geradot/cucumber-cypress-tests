import BasePage from "../BasePage";
import faq from "../../../fixtures/faq.json";

const [firstKey, firstValue] = Object.entries(faq).at(0);
const [fourthKey, fourthValue] = Object.entries(faq).at(-2);

class OurNetworkPage extends BasePage {
  getFAQSection() {
    return cy.contains(firstValue.question).parent().parent();
  }

  getQuestions() {
    return this.getFAQSection().find("h3");
  }

  getQuestion(question) {
    return this.getFAQSection().contains(question);
  }

  checkQuestionOpened(question) {
    return this.getQuestion(question)
      .parent()
      .should(...this.matchToDataStateOpen);
  }

  checkQuestionClose(question) {
    return this.getQuestion(question)
      .parent()
      .should(...this.matchToDataStateClosed);
  }

  getAnswers() {
    return this.getFAQSection().find("p");
  }

  getAnswer(text) {
    return this.getFAQSection().find("p").contains(text);
  }

  checkFAQSectionVisible() {
    return this.getFAQSection().should("be.visible");
  }
}

export default new OurNetworkPage();
