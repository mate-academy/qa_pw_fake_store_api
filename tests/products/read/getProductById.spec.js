import { test } from '../../_fixtures/fixtures';

/*
Test:
1. Send GET request for product with ID 1
2. Assert that the Success Response code is received
3. Assert that the Response Body contains field 'id'
*/

let productId;

test.beforeEach(async ({ newProductData, productsAPI }) => {
  const response = await productsAPI.createNewProduct(newProductData);

  await productsAPI.assertSuccessResponseCode(response, 'POST');

  productId = await productsAPI.parseIdFromBody(response);
});

test('Get product by Id', async ({ productsAPI }) => {
  // Spike for not working api
  productId = 1;
  const response = await productsAPI.getProduct(productId);

  await productsAPI.assertSuccessResponseCode(response);
  await productsAPI.assertIdIsCorrect(response, productId);
});
