/// <reference types="cypress" />

const payloadUpdateUser = require('..//payloads/update-user.json')

function updateUser(idUser){
    return cy.request({
        method: 'PUT',
        url: `Users/${idUser}`,
        failOnStatusCode: 'false',
        body: payloadUpdateUser
    })
}
export {updateUser};