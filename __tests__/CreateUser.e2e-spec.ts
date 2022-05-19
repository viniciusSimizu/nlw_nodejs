import request from 'supertest'
import { app } from "../src/server";

test('[e2e] Create User', async () => {
    const response = await request(app)
        .post('/users')
        .send({ name: 'Teste1' })

    expect(response.status).toBe(201);
    expect(response.body.error).toBeFalsy();
})