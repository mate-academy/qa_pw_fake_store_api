import { test } from '../../_fixtures/fixtures';

let productId;

test.beforeEach(async ({ newProductData, productsApi }) => {
  // 1. Send POST request to '/products' endpoint with body
  const response = await productsApi.createNewProduct(newProductData);

  // 2. Assert that the Success Response code is received
  await productsApi.assertSuccessResponseCode(response);

  // 3. Parse the 'id' from the Response body
  productId = await productsApi.parseIdFromBody(response);
});

test('Delete product by ID', async ({ productsApi }) => {
  // 1. Send DELETE request to '/products/{id}' endpoint
  const response = await productsApi.deleteProduct(productId);

  // 2. Assert that the Success Response code is received
  await productsApi.assertSuccessResponseCode(response);
});
