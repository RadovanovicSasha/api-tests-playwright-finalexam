import { test, expect } from '@playwright/test';

/*
  Test proverava kreiranje novog resursa pomoću POST metode.

  Validacije:
  - status kod 201 (Created)
  - odgovor sadrži poslati payload
  - server generiše ID novog resursa
*/
test('POST /posts -> should create a new post', async ({ request }) => {

  // payload koji šaljemo API serveru
  const payload = {
    title: 'qa test',
    body: 'playwright api testing',
    userId: 1
  };

  // šaljemo POST zahtev
  const response = await request.post('/posts', {
    data: payload
  });

  // proveravamo da je resurs uspešno kreiran
  expect(response.status()).toBe(201);

  // parsiramo odgovor
  const body = await response.json();

  // proveravamo da li odgovor sadrži poslati payload
  expect(body).toMatchObject(payload);

  // proveravamo da li postoji ID novog resursa
  expect(body).toHaveProperty('id');
});