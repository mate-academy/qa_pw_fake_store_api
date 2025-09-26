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

let productId;

test.beforeEach(async ({ newProductData, productsAPI }) => {
  const response = await productsAPI.createNewProduct(newProductData);

  await productsAPI.assertSuccessResponseCode(response);

  productId = await productsAPI.parseIdFromBody(response);
});

test('Delete product by Id', async ({ productsAPI }) => {
  const response = await productsAPI.deleteProduct(productId);

  await productsAPI.assertSuccessResponseCode(response);
});
