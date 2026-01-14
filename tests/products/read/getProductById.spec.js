import { expect, test } from '../../_fixtures/fixtures';
import { SUCCESS_CODE } from '../../../src/api/constants/responceCodes';

/*
Test:
1. Send GET request for product with ID 1
2. Assert that the Success Response code is received
3. Assert that the Response Body contains field 'id'
*/

test('Read product information', async ({ productsApi }) => {
  const response = await productsApi.getProduct('1');
  expect(response.status()).toBe(SUCCESS_CODE);

  const body = await response.json();
  expect(body.id).toBeDefined();
});
