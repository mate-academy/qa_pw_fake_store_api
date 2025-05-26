import { test } from '../../_fixtures/fixtures';

/*
Preconditions:
1. Send POST request to '/products' endpoint with body
2. Assert that the Success Response code is received
3. Parse the 'id' from the Response body

Test:
1. Send DELETE request to '/products/{id}' endpoint
2. Assert that the Success Response code is received
*/
let id;

test.beforeEach(async ({ productsApi, newProductData }) => {
  const response = await productsApi.createProduct(newProductData);
  await productsApi.assertSuccessResponseCode(response);
  id = await productsApi.parseIdFromBody(response);
});

test('Delete product', async ({ productsApi }) => {
  const response = await productsApi.deleteProductById(id);
  await productsApi.assertSuccessResponseCode(response);
});
