describe("Gestion des usagers", () => {
  beforeEach(() => {
    // Use the preserveOnce option inside the cy.visit() command
    cy.visit("/login/connection", {
      preserveOnce: true,
    });

   // Perform the login action within the beforeEach block
   cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
  });
  
  
   for (let i = 1; i <= 1; i++) {
      it("Création des usagers", () => {

        // Choisissez un site
        cy.get(':nth-child(2) > a > span').click()
        //cy.xpath("/html/body/app-root/div/app-sites/div/div[3]/div/app-sites-list/div/div/div/div[2]/ul/li[2]/div[1]/span").click()
  
        // Cliquez sur l'icône pour accéder à la page des utilisateurs
        cy.get('.icon-users').click()
  
        // Cliquez sur la roue crantée
        cy.get('.mat-mdc-menu-trigger > .mat-mdc-tooltip-trigger').click()
  
        // Cliquez sur "Créer un usager"
        cy.get(':nth-child(1) > .mdc-list-item__primary-text').click()
  
        // Remplissez le formulaire avec des données aléatoires
        const faker = require('faker');
        const randomFirstName = faker.name.firstName();
        const randomLastName = faker.name.lastName();
        const randomEmail = faker.internet.email();
        const randomPhoneNumber = faker.phone.phoneNumber('06########');
        
  
        cy.get('#lastName').type(randomFirstName);
        cy.get('#firstName').type(randomLastName);
        cy.get('#mat-select-value-1').click();
        cy.get('#mat-option-3 > .mdc-list-item__primary-text').click();
        cy.get('#registrationNumber').type("859635");
        cy.get('.ms-0 > .btn-group > .btn').click();
        cy.get('.with-label > .input-form').type("+33");
        cy.get('[formcontrolname="number"]').type(randomPhoneNumber);
        cy.get('.contact > :nth-child(2) > .input-form').type(randomEmail);
        cy.get('.bottom > .btn-primary').click()
        cy.url().should("include", "/entities/list");
        cy.get('.icon-th').click()
       

      
      
});
    
}
      it.skip("Modifier les information d'un usager", () => {


        cy.get(':nth-child(2) > a > span > .icon-modx').click();
        cy.get('.icon-users').click()
        cy.get(':nth-child(9) > .cdk-column-isSynced').click()
        cy.get('.mat-mdc-menu-trigger > .mat-mdc-tooltip-trigger').click()
        cy.get('.mdc-list-item__primary-text').click()
        cy.get('#mat-select-value-1').click()
        cy.get('#mat-option-5').click()
        cy.get('.slider').click()
        cy.get('.bottom > .btn-primary').click()
        

    });

    for (let i = 1; i <= 1; i++) {
    it("Création d'un groupe d'usager", () => {

      const faker = require('faker');
      // Custom function to generate a random alphanumeric string of a given length
      function generateRandomAlphanumeric(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }
      cy.get('.appSettings > .icon-cog').click()
      cy.get(':nth-child(3) > .mdc-list-item__primary-text').click()
      cy.get('.mat-mdc-menu-trigger > .mat-mdc-tooltip-trigger').click()
      cy.get(':nth-child(1) > .mdc-list-item__primary-text').click()

      const randomGroupName = `groupe ${generateRandomAlphanumeric(7)}`;
      cy.get('#name').type(randomGroupName)

      const randomID = generateRandomAlphanumeric(8);
      cy.get('#externalGroupId').type(randomID)
      cy.get('.mat-mdc-select-value-text > .ng-tns-c11-15').click()
      cy.get('#mat-option-7').click()
      cy.get(':nth-child(4) > .btn-primary').click()






  });
}

})
