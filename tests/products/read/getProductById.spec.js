import { test } from '../../_fixtures/fixtures';

/*
Test:
1. Send GET request for product with ID 1
2. Assert that the Success Response code is received
3. Assert that the Response Body contains field 'id'
*/
let productId;
test.beforeEach(async ({ newProductData, productsApi }) => {
  const response = await productsApi.createNewProduct(newProductData);

  await productsApi.assertSuccessCreateResponseCode(response);
  productId = await productsApi.parseIdFromBody(response);

});

test('Read product information', async ({ productsApi }) => {
  const response = await productsApi.getProduct(productId);
  await productsApi.assertSuccessResponseCode(response);
});
