import { test, expect } from '@playwright/test';

/*
  Test proverava da API vraća tačan post kada se zatraži
  resurs sa ID = 1.
*/
test('GET /posts/1 -> should return post with id=1', async ({ request }) => {

  // šaljemo GET zahtev za jedan resurs
  const response = await request.get('/posts/1');

  // proveravamo status kod
  expect(response.status()).toBe(200);

  // parsiramo JSON odgovor
  const body = await response.json();

  // proveravamo da li je ID tačan
  expect(body.id).toBe(1);

  // proveravamo osnovna polja objekta
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('body');
});