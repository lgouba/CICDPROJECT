import faker from 'faker';

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
  it('Créer plusieurs équipements équipements physiques', () => {
    // Utiliser une boucle for pour créer 100 équipements physiques
    for (let i = 0; i < 100; i++) {
      const id = `urn:ngsild:${faker.random.number({ min: 10000000, max: 99999999 })}`;
      const brand = "watteco";
      const category = "energy";
      const description = faker.lorem.words(3); // Génère une description aléatoire de 3 mots
      const model = "Ticso";
      const name = `capteur${faker.random.number({ min: 1, max: 99 })}`; // Génère un nom aléatoire avec un numéro de capteur
      const zoneID = "edd8c849-163c-4c9b-b510-c137c8e2f471";
      const deviceType = "Ticso";

      // Créer un nouvel équipement physique en envoyant une requête POST à l'API avec le header d'autorisation
      cy.request({
        method: 'POST',
        url: `https://int.dev.ngeconnect.fr/api/projects/${projectId}/devices`,
        headers: {
          'Authorization': `Bearer ${accessToken}` // Inclure le jeton d'accès dans l'en-tête d'autorisation
        },
        body: {
          id: id,
          brand: brand,
          category: category,
          description: description,
          installationDate: "2022-04-04T12:27:22.723Z",
          location: {
            coordinates: [
              43.703389,
              7.252569


            ], // Utilise les valeurs aléatoires de longitude et latitude
            type: "Point"
          },
          model: model,
          name: name,
          project: projectId,
          refZone: zoneID,
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

  it('Gérer les erreurs lors de la création d\'un équipement physique', () => {
    // Testez ici les scénarios où la création d'équipement devrait échouer
    // Par exemple, essayez d'envoyer une requête sans l'Authorization header ou avec des données invalides, etc.
  });
});
