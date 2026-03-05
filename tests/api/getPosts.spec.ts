// Uvozimo Playwright test runner i expect za asertacije
import { test, expect } from '@playwright/test';

/*
  Ovaj test proverava da li endpoint /posts vraća listu postova.

  Ovo je tipičan SMOKE API test jer proverava:
  - dostupnost endpointa
  - status kod
  - osnovnu strukturu odgovora
*/
test('GET /posts -> should return list of posts', async ({ request }) => {

  // šaljemo GET zahtev ka API endpointu
  const response = await request.get('/posts');

  // proveravamo da je status kod 200 (OK)
  expect(response.status()).toBe(200);

  // parsiramo JSON odgovor
  const body = await response.json();

  // proveravamo da li je odgovor niz (lista objekata)
  expect(Array.isArray(body)).toBeTruthy();

  // proveravamo da niz nije prazan
  expect(body.length).toBeGreaterThan(0);

  // proveravamo da prvi element ima osnovna polja
  expect(body[0]).toHaveProperty('id');
  expect(body[0]).toHaveProperty('title');
});