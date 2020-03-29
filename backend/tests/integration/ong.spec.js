const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async () => {
        await connection.destroy();
    });
    it('should be able to create a new ong', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('Authorization','aa1e8513')
            .send({
                name: "APAD2",
                email: "contato@test.com",
                whatsapp: "55999999999",
                city: "Curitiba",
                uf: "PR"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});