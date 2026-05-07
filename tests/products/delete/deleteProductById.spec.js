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

test.beforeEach(async ({ newProductData, productAPI }) => {
  const response = await productAPI.createNewProduct(newProductData);

  await productAPI.assertCreatedResponseCode(response);

  productId = await productAPI.parseIdFromBody(response);
});

test('Delete product by Id', async ({ productAPI }) => {
  const response = await productAPI.deleteProduct(productId);

  await productAPI.assertSuccessResponseCode(response);
});
