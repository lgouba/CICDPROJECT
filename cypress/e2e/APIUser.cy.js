import faker from 'faker';

// Définir les variables globales pour le header et le projectId
let accessToken;
let projectId;

// Utiliser la méthode "beforeEach" pour exécuter le code avant chaque test
beforeEach(() => {
  // Donner une valeur à la variable "accessToken" spécifique au test
  accessToken = '5037e1c8af43f90970f8beabafcdf368154da49f';

  // Donner une valeur à la variable "projectId" spécifique au test
  projectId = 'd47d1024-b41a-44dc-9785-49ac51bf083c';

  // Donner une valeur à la variable "projectId" spécifique au test
  

});

describe('Tests API User', () => {
  it('Créer plusieurs utilisateurs', () => {
    // Utilisez accessToken et projectId spécifiques pour ce test
    // Nombre d'utilisateurs à créer
    const numberOfUsers = 8;

    // Créer un tableau pour stocker les détails des utilisateurs créés
    const usersCreated = [];

    // Commencer la mesure du temps d'exécution
    console.time('Requêtes de création');

    // Boucle pour créer les utilisateurs
    for (let i = 0; i < numberOfUsers; i++) {
      // Utilisez accessToken et projectId spécifiques pour ce test
      // Générer des informations aléatoires pour l'utilisateur
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();

      // Créer l'adresse e-mail en utilisant l'association du prénom et du nom
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

      // Autres informations aléatoires pour l'utilisateur
      const username = faker.internet.userName();
      const phone = faker.phone.phoneNumber();
      const locale = 'fr'; // Vous pouvez également générer cela aléatoirement si nécessaire
      const settings = '<string>'; // Vous pouvez générer cela aléatoirement si nécessaire

      // Créer un nouvel utilisateur en envoyant une requête POST à l'API avec le header d'autorisation
      cy.request({
        method: 'POST',
        url: `https://re7.r-smart.com/api/projects/${projectId}/users`,
        headers: {
          'Authorization': `Bearer ${accessToken}` // Inclure le jeton d'accès dans l'en-tête d'autorisation
        },
        body: {
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          locale: locale,
          settings: settings,
          roleIds: [
            'a501f92f-d9fa-438e-9320-387469b4bba8',
            '278fa2a3-af42-4df8-ab79-3363ee9e0a5f'
          ],
        }
      }).then((response) => {
        // Vérifier que la requête a été traitée avec succès
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');

        // Ajouter les détails de l'utilisateur créé au tableau
        usersCreated.push(response.body);

        // Si c'est le dernier utilisateur, afficher tous les utilisateurs créés
        if (i === numberOfUsers - 1) {
          console.log('Tous les utilisateurs créés :', usersCreated);

          // Finir la mesure du temps d'exécution
          console.timeEnd('Requêtes de création');
        }
      });
    }
  });

  it('Récupérer la liste des utilisateurs', () => {
    // Utilisez accessToken et projectId spécifiques pour ce test
    // Envoyer une requête GET à l'API pour récupérer la liste des utilisateurs avec le bon paramètre projectId
    cy.request({
      method: 'POST',
      url: `https://re7.r-smart.com/api/projects/${projectId}/users/list`,
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Inclure le jeton d'accès dans l'en-tête d'autorisation
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // Vérifier que la requête a été traitée avec succès
      expect(response.status).to.equal(200);

      // Vérifier que la réponse contient un tableau d'utilisateurs
      expect(response.body).to.be.an('array');

      // Afficher la liste des utilisateurs récupérés dans la console
      console.log('Liste des utilisateurs récupérés :', response.body);
    });
  });

  it('Modifier un utilisateur', () => {

     let userId;
     userId = '8369c5e2-9d4c-4c32-9d68-8e40e8fdc7be';
    
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();

      // Créer l'adresse e-mail en utilisant l'association du prénom et du nom
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

      // Autres informations aléatoires pour l'utilisateur
      const username = faker.internet.userName();
      const phone = faker.phone.phoneNumber();
      const locale = 'fr'; // Vous pouvez également générer cela aléatoirement si nécessaire

      cy.request({
      method: 'PUT',
      url: `https://re7.r-smart.com/api/projects/${projectId}/users/${userId}`,
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Inclure le jeton d'accès dans l'en-tête d'autorisation
        'Content-Type': 'application/json'
      },
      body: {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        locale: locale,
        
      }
    }).then((response) => {
      // Vérifier que la requête a été traitée avec succès
      expect(response.status).to.equal(200);
    });
  });

  it('Supprission d/un utilisateur', () => {
    // Utilisez accessToken et projectId spécifiques pour ce test
    // Définir le userId de l'utilisateur à supprimer
    const userIdToDelete = '517ad18d-0a10-4150-9f2d-2bc7dfee3a5d';

    // Envoyer une requête DELETE à l'API pour supprimer l'utilisateur
    cy.request({
      method: 'DELETE',
      url: `https://re7.r-smart.com/api/projects/${projectId}/users/${userIdToDelete}`,
      headers: {
        'Authorization': `Bearer ${accessToken}` // Inclure le jeton d'accès dans l'en-tête d'autorisation
      }
    }).then((response) => {
      // Vérifier que la requête a été traitée avec succès
      expect(response.status).to.equal(204); // Le code 204 indique que la suppression a réussi sans contenu de réponse

      // Afficher un message de confirmation
      console.log('L\'utilisateur a été supprimé avec succès.');
    });
  });

});
