import * as GETUser from '../requests/GETUser.request';

describe('GET User', () => {

    it('buscar usuario', () => {
        GETUser.allUsers().should((response)=>{
            cy.log(response.status)
            cy.log(response.statusText)
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
       
        })
    })
})