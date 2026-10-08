describe('Agenda de contatos', () => {

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })


  it('Deve incluir um contato', () => {

    cy.get('input')
      .eq(0)
      .type('Luffy Teste')

    cy.get('input')
      .eq(1)
      .type('luffy.teste@email.com')

    cy.get('input')
      .eq(2)
      .type('71999999999')

    cy.get('button')
      .eq(0)
      .click()

    cy.contains('Luffy Teste')
      .should('be.visible')

  })


  it('Deve alterar um contato', () => {

    // Clica no EDITAR do primeiro contato
    cy.get('button')
      .eq(2)
      .click()

    // Nome
    cy.get('input')
      .eq(0)
      .clear()
      .type('Gian Souza Alterado')

    // E-mail
    cy.get('input')
      .eq(1)
      .clear()
      .type('gian.alterado@email.com')

    // Telefone
    cy.get('input')
      .eq(2)
      .clear()
      .type('71988888888')

    // SALVAR
    cy.get('button')
      .eq(0)
      .click()

    cy.contains('Gian Souza Alterado')
      .should('be.visible')

  })


  it('Deve remover um contato', () => {

    // Clica no DELETAR do primeiro contato
    cy.get('button')
      .eq(1)
      .click()

    cy.contains('Gian Souza')
      .should('not.exist')

  })

})