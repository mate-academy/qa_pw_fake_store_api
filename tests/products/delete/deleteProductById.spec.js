import { test, expect } from '../../_fixtures/fixtures';
import { SUCCESS_CODE } from '../../../src/api/constants/responceCodes';

/*
Preconditions:
1. Send POST request to '/products' endpoint with body
2. Assert that the Success Response code is received
3. Parse the 'id' from the Response body

Test:
1. Send DELETE request to '/products/{id}' endpoint
2. Assert that the Success Response code is received
*/

let createdProductId;

test.beforeEach(async ({ productsApi }) => {
  const productData = {
    title: 'string',
    price: 0.1,
    description: 'string',
    category: 'string',
    image: 'http://example.com',
  };
  const response = await productsApi.createProduct({ data: productData });
  expect(response.status()).toBe(SUCCESS_CODE);
  const body = await response.json();
  expect(body.id).toBeDefined();

  createdProductId = body.id;
});

test('Delete product', async ({ productsApi }) => {
  const response = await productsApi.deleteProduct(`${createdProductId}`);
  expect(response.status()).toBe(SUCCESS_CODE);
});
