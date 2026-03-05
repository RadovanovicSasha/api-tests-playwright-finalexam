import { test, expect } from '@playwright/test';

/*
  Negativan test proverava ponašanje API-ja
  kada tražimo resurs koji ne postoji.
*/
test('GET /posts/999999 -> should return 404', async ({ request }) => {

  const response = await request.get('/posts/999999');

  // očekujemo 404 Not Found
  expect(response.status()).toBe(404);
});