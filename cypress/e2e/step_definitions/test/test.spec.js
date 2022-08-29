import {
    Given, 
    When, 
    And, 
    Then} 
    from "@badeball/cypress-cucumber-preprocessor"

Given('user is on the home page', ()=>{
    cy.visit('https://one.test.lightboxre.com/')
});

When ("When a user enters the username {string}", (username) => {
    loginPage.typeUserName(username);

});

And ("And a user enters the password {string}", (password) => {
    loginPage.typePassword(password);

});

And ("And a user click the button Submit", (button) => {
    loginPage.click(button);
    
});