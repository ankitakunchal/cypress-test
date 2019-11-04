describe('My First Test', function() {
    it('open url', function() {
      //expect(true).to.equal(true)
      cy.visit ("https://dev.tangoenv.com/")
      cy.get ('input[name = username]').type("admin")
      .should('have.value', 'admin')
        cy.get('input[name= password]').type('Test@1234{enter}') 
    })
  })