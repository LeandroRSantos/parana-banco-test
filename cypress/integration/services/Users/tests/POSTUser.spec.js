import * as PostUser from '..//requests/POSTUser.request'

describe('Post User', ()=>{
    it('Adicionar novo User',()=>{
        PostUser.addUser().should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq("Testes Adicionar");
        })
    })
})
