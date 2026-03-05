// Uvozimo Playwright test runner i expect za asertacije
import { test, expect } from '@playwright/test';

/*
  Ovaj test proverava izmenu postojećeg resursa pomoću HTTP PUT metode.

  PUT metoda se koristi kada želimo da ažuriramo ceo resurs na serveru.

  Validacije koje radimo:
  - API vraća status kod 200 (OK)
  - vraćeni objekat sadrži podatke koje smo poslali
*/
test('PUT /posts/1 -> should update post', async ({ request }) => {

  // payload predstavlja podatke koje šaljemo serveru
  const payload = {
    id: 1,
    title: 'updated title',
    body: 'updated body',
    userId: 1
  };

  // šaljemo PUT zahtev ka endpointu /posts/1
  const response = await request.put('/posts/1', {
    data: payload
  });

  // proveravamo da li je server odgovorio status kodom 200
  expect(response.status()).toBe(200);

  // parsiramo JSON odgovor iz response body-ja
  const body = await response.json();

  // proveravamo da li se podaci u odgovoru poklapaju sa poslatim payload-om
  expect(body).toMatchObject(payload);
});