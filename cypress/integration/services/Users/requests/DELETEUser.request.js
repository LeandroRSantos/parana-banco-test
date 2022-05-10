/// <reference types="cypress" />

function deleteUser (idUser){
    return cy.request({
        method: 'DELETE',
        url: `Users/${idUser}`,
        failOnStatusCode: false
    })
}
export {deleteUser};