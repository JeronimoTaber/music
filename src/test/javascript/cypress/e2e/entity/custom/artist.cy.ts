describe('Crear un artista', () => {
  it('Inicia sesión y crea un nuevo artista', () => {
    cy.request({
      method: 'POST',
      url: '/api/authenticate',
      body: {
        username: 'admin',
        password: 'admin',
      },
    }).then(response => {
      const token = response.body.id_token;
      window.localStorage.setItem('jhi-authenticationToken', JSON.stringify(token));

      // Visit the home page with the token
      cy.visit('/', {
        onBeforeLoad(win) {
          win.localStorage.setItem('jhi-authenticationToken', JSON.stringify(token));
        },
      });
      cy.contains('Entities').click();
      cy.contains('Artist').click();

      cy.contains('Create a new Artist').click();
      cy.get('#field_name').type('Nuevo Artista');
      cy.contains('Save').click();

      cy.url().should('include', '/artist');
      cy.contains('Nuevo Artista');
    });
  });
});

describe('Eliminar un artista', () => {
  it('Inicia sesión y busca un artista por nombre', () => {
    window.localStorage.removeItem('jhi-authenticationToken');

    cy.visit('/');

    cy.get('#account-menu').click();

    cy.get('#login').click();

    cy.get('#username').click();

    cy.get('#username').type('admin');

    cy.get('#password').click();

    cy.get('#password').type('admin');

    cy.get('.btn').click();
    cy.contains('Entities').click();
    cy.contains('Artist').click();

    cy.contains('Nuevo Artista');

    cy.get('tbody')
      .contains('tr', 'Nuevo Artista')
      .within(() => {
        cy.get('.btn-danger').click();
      });
    cy.get('#jhi-confirm-delete-artist > span').click();
    cy.url().should('include', '/artist');
    cy.contains('Nuevo Artista').should('not.exist');
  });
});
