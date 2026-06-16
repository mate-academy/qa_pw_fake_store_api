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

test.beforeEach(async ({ newProductData, productApi }) => {
  const response = await productApi.addNewProduct(newProductData);

  await productApi.assertCreatedResponseCode(response);

  productId = await productApi.parseIdFromBody(response);
});

test('Delete product', async ({ productApi }) => {
  const response = await productApi.deleteProduct(productId);

  await productApi.assertSuccessResponseCode(response);
});
