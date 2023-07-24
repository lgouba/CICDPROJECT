import faker from 'faker';
import { id } from 'postcss-selector-parser';

// Définir les variables globales pour le header et le projectId
let accessToken;
let projectId;


// Utiliser la méthode "beforeEach" pour exécuter le code avant chaque test
beforeEach(() => {
  // Donner une valeur à la variable "accessToken" spécifique au test
  accessToken = '2c82b90eb5125c28d8d0059667bdfe3434c36c54';

  // Donner une valeur à la variable "projectId" spécifique au test
  projectId = '085371e6-add7-442d-bc78-07ddb92f5198';
  
});

describe('Tests API User', () => {
  it.skip('Créer plusieurs équipements virtuels', () => {
    // Utiliser une boucle for pour créer 100 équipements physiques
    for (let i = 0; i < 100; i++) {
      const category = "energy";
      const description = faker.lorem.words(3); // Génère une description aléatoire de 3 mots
      const name = `Eqvirtuel${faker.random.number({ min: 1, max: 99 })}`; // Génère un nom aléatoire avec un numéro de capteur
      const zoneID = "edd8c849-163c-4c9b-b510-c137c8e2f471";
      const deviceType = "virtualDevice";
      const tagID = "33e68b5c-75fa-4065-b024-390f0a23f357"

      // Créer un nouvel équipement physique en envoyant une requête POST à l'API avec le header d'autorisation
      cy.request({
        method: 'POST',
        url: `https://int.dev.ngeconnect.fr/api/projects/${projectId}/assets`,
        headers: {
          'Authorization': `Bearer ${accessToken}` // Inclure le jeton d'accès dans l'en-tête d'autorisation
        },
        body: {
          name: name,
          category: category,
          description: description,          
          location: {
            coordinates: [
              43.703389,
              7.252569


            ], // Utilise les valeurs aléatoires de longitude et latitude
            type: "Point"
          },               
          project: projectId,
          refZone: zoneID,
          tags: [
            tagID
          ],
          properties: null,
          type: deviceType
        }
      }).then((response) => {
        // Vérifier que la requête a été traitée avec succès
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
      });

      // Attendre un court délai entre les requêtes pour éviter tout problème de surcharge du serveur
      cy.wait(500);
    }
   

  });

  it('Attach Asset To device', () => {
    // Définir les valeurs des paramètres projectId et id
    let projectId = 'd47d1024-b41a-44dc-9785-49ac51bf083c';
    let id = '774e73b9-8646-40b8-b401-b6d63e06e864';
    let DeviceID = "Ticso:56702215";
  
  
  });
  
});
