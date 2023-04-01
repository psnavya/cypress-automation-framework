/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni",() => {
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.title().should('include','WebDriver')
        cy.url().should('include','contactus')
        // cy.get('#contact-us').click({force:true})
       
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Bing")
        cy.get('[name="email"]').type("joe.bing@gmail.com")
        cy.get('textarea.feedback-input').type("Testing Cypress Automation")
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Chandler")
        cy.get('[name="last_name"]').type("Bing")
        cy.get('textarea.feedback-input').type("Testing Cypress Automation")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: Invalid email address')
    });
})

