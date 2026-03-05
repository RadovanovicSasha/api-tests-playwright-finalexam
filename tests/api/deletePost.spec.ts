import { test, expect } from '@playwright/test';

/*
  Test proverava brisanje resursa pomoću DELETE metode.
*/
test('DELETE /posts/1 -> should delete post', async ({ request }) => {

  const response = await request.delete('/posts/1');

  // očekujemo uspešan status
  expect(response.status()).toBe(200);
});