import * as DELETEUser from '..//requests/DELETEUser.request';
import * as GETUser from '../requests/GETUser.request';

describe('DELETE user', () => {
    it('deletar um usuario', () => {
        GETUser.allUsers().then((resAllUser) => {
            DELETEUser.deleteUser(resAllUser.body[0].ID).should((resDeleteUser) => {
                expect(resDeleteUser.status).to.eq(200);
    
            })
        })
    })
})