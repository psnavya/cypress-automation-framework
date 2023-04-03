/// <reference types="cypress" />
//Source code: https://github.com/qauni/json-server
describe("Delete Request", () => {
    it("Delete a post via /posts api", () => {
      cy.request({
        method: "DELETE",
        url: "http://localhost:3000/posts/13"
      }).then((response) => {
        expect(response.status).to.eql(200);
      });
    });
  });
  