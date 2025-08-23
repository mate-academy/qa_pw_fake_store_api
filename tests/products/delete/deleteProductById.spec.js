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
test.beforeEach(async ({ newProductData, productsApi }) => {
  const response = await productsApi.createNewProduct(newProductData);

  await productsApi.assertSuccessCreateResponseCode(response);
  productId = await productsApi.parseIdFromBody(response);

});

test('Delete product', async ({ productsApi }) => {
  const deleteResponse = await productsApi.deleteProduct(productId);
  await productsApi.assertSuccessResponseCode(deleteResponse);
});
