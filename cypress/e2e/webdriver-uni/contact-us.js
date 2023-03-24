
/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni",() => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // cy.get('#contact-us').click({force:true})
        // cy.visit("https://www.amazon.in/your-account")
        // cy.get('#twotabsearchtextbox').type("Tops for women")
        // cy.get('#nav-search-submit-button').click()
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Bing")
        cy.get('[name="email"]').type("joe.bing@gmail.com")
        cy.get('textarea.feedback-input').type("Testing Cypress Automation")
        cy.get('[type="submit"]').click()
    });

    it.on("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Chandler")
        cy.get('[name="last_name"]').type("Bing")
        cy.get('textarea.feedback-input').type("Testing Cypress Automation")
        cy.get('[type="submit"]').click()
    });
})

