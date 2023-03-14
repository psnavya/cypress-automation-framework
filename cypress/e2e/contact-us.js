/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni",() => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#contact-us').click({force:true})
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
    });
})

