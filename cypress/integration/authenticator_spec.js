describe("Authenticator:", function () {
  beforeEach(function () {
    cy.visit("/");
  });
  describe("Sign In:", () => {
    it("allows a user to signin", () => {
      cy.get(selectors.usernameInput).type("e2e_test");
      cy.get(selectors.signInPasswordInput).type("ot1928d1");
      cy.get(selectors.signInSignInButton).contains("Sign In").click();
    //   cy.wait(3000);
    //   cy.contains("User pool");
    });
  });
});
export const selectors = {
  usernameInput: '[data-test="sign-in-username-input"]',
  signInPasswordInput: '[data-test="sign-in-password-input"]',
  signInSignInButton: '[data-test="sign-in-sign-in-button"]',
  root: "#root",
};
