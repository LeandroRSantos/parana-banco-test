import * as PUTUser from '..//requests/PUTUser.request'
import * as GETUser from '../requests/GETUser.request';
import * as POSTUser from '..//requests/POSTUser.request';

describe('PUT User', () => {
    it('Alterar um User', () => {
        POSTUser.addUser().then((resAddUser) => {
            PUTUser.updateUser(resAddUser.body.ID).should((resUpdateUser) => {
                expect(resUpdateUser.status).to.eq(200);
                expect(resUpdateUser.body).to.be.not.null;
                
            })
        })
    })
})
