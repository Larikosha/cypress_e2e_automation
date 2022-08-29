describe('oktapage', () => {
    it('login', () => {
      cy.visit('https://one.test.lightboxre.com/')
      cy.get('#okta-signin-username').type('ian@dpcapital.com ')
      cy.get('#okta-signin-password').type('Lightbox1')
      cy.get('#okta-signin-submit').click()
    })
  })
  