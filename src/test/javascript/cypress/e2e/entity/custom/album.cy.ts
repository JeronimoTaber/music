describe('Editar un álbum', () => {
  it('Inicia sesión y edita un álbum existente', () => {
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
      cy.contains('Album').click();
      cy.get('table tbody tr').first().contains('Edit').click();

      cy.url().should('include', '/album');

      cy.get('#field_name').clear().type('Nuevo Nombre de Álbum');
      cy.get('#field_artist').select(1);
      cy.get('#field_genre').select(2);

      cy.contains('Save').click();

      cy.url().should('include', '/album');
      cy.contains('Nuevo Nombre de Álbum');
      cy.contains('Steel Direct indexing');
      cy.contains('back-end Sweden system');
    });
  });
});
