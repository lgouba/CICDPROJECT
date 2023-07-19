describe("Gestion des rôles et utilisateurs", () => {
  before(() => {
    cy.visit("/login/connection", { cache: 'preserve' });
    cy.login("superAdmin", "XEeYe7EIxVZA8iCs", "Bienvenue");
  });
  
  //for (let i = 1; i <= 1; i++) {
    it("Création d'un utilisateur", () => {
      
     cy.xpath('//div[@aria-haspopup="menu"][1]').should('be.visible');
      cy.xpath('//div[@aria-haspopup="menu"][1]').click();
      cy.xpath('//button[normalize-space()="Utilisateurs"]').click();
      cy.contains('utilisateurs', { matchCase: false }).should('be.visible');
      cy.get('.mat-mdc-menu-trigger > .mat-mdc-tooltip-trigger').click()
      cy.xpath('//button[normalize-space()="Créer un utilisateur"]').click();
      cy.contains("CRÉATION D'UN UTILISATEUR", { matchCase: false }).should('be.visible');
  
    //Renseigner les informations de l'utilisateur
      const identifiant = '//input[@id="username"]';
      const nom = '//input[@id="lastName"]'
      const prenom = '//input[@id="firstName"]'
      const fonction = '#occupation'
      const email = '//input[@id="email"]'
      const tel = '//input[@id="phone"]'
      const select_site = '#mat-select-value-3 > .mat-mdc-select-placeholder'
      const choix_site = '#mat-option-6 > .mdc-list-item__primary-text'
      const select_lang = '#mat-select-value-1 > .mat-mdc-select-placeholder'
      const choix_lang = '#mat-option-1 > .mdc-list-item__primary-text'
      const select_role_site = '#mat-select-value-5 > .mat-mdc-select-placeholder'
      const choix_role_site = '#mat-option-13 > .mdc-list-item__primary-text'
      const button_save = '/html/body/app-root/div/app-admin/div/div[2]/app-admin-user-form/app-user-form/div/div[2]/div[2]/div[2]/button[2]'
      
      // Remplissez le formulaire avec des données aléatoires
      const faker = require('faker');
      const randomFirstName = faker.name.firstName();
      const randomLastName = faker.name.lastName();
      //const randomEmail = faker.internet.email();
      const randommail = `${randomFirstName.toLowerCase()}.${randomLastName.toLowerCase()}@example.com`;
      const randomPhoneNumber = faker.phone.phoneNumber('06########');
      const randomIdentifier = faker.random.alphaNumeric(7);

      

      cy.xpath(identifiant).type(randomIdentifier);
      cy.xpath(nom).type(randomFirstName);
      cy.xpath(prenom).type(randomLastName);
      cy.get(fonction).type("DEV");
      cy.xpath(email).type(randommail);
      cy.xpath(tel).type(randomPhoneNumber);
      cy.scrollTo('bottom');
      cy.get(select_site).click();
      cy.get(choix_site).click();
      cy.get(select_role_site).click();
      cy.get(choix_role_site).click();
      cy.get(select_lang).click();
      cy.get(choix_lang).click();
      cy.xpath(button_save).click();
      cy.get('.icon-cog').click()
      
  
    });
 // }
    it.skip("Modification d'un utilisateur", () => {
      cy.get(':nth-child(2) > a > span > .icon-modx').click()
      cy.get('.icon-cog').click()
      cy.get('.menuContent > :nth-child(1)').click()
      cy.get(':nth-child(23) > .cdk-column-email').click()
      

  
    });

    it.skip("Création d'un rôle", () => {
      cy.get('.icon-cog').click()
      cy.get('.menuContent > :nth-child(2)').click()
      cy.get('.mat-menu-trigger > .mat-tooltip-trigger').click()
      cy.get('.mat-menu-content > .d-flex > :nth-child(1) > :nth-child(1)').click()
      cy.get('.mat-form-field-infix').click()
      cy.get('#mat-option-3 > .mat-option-text').click()
      cy.get('#name').type("NICE SITE MANAGER")
      cy.get(':nth-child(1) > .sliders > .slider-level > .slider-item > .switch > .slider').click()
      cy.get(':nth-child(2) > .sliders > .slider-level > .slider-item > .switch > .slider').click()
      cy.get(':nth-child(3) > .sliders > .slider-level > .slider-item > .switch').click()
      cy.get(':nth-child(4) > .sliders > .slider-level > .slider-item > .switch > .slider').click()
      cy.get(':nth-child(5) > .sliders > .slider-level > .slider-item > .switch > .slider').click()
      cy.get(':nth-child(6) > .sliders > .slider-level > .slider-item > .switch > .slider').click()
      cy.get('.bottom > .btn-primary').click()
    });

    it.skip("Modification du rôle", () => {
      cy.get('.icon-cog').click()
      cy.get('.menuContent > :nth-child(2)').click()
      cy.get(':nth-child(9) > .cdk-column-numberOfUsers').click()
      cy.get('.mat-menu-trigger > .mat-tooltip-trigger').click()
      cy.get('.w-75 > :nth-child(1)').click()
      //Modification des permissions avec suppression de la perssion sur le tableau de bord
      cy.get(':nth-child(5) > .sliders > .slider-level > .slider-item > .switch > .slider').click()
     
      cy.get('.bottom > .btn-primary').click()

      });

  });