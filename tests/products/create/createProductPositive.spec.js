import { test } from '../../_fixtures/fixtures';

test('Create product', async ({ newProductData, productsApi }) => {
  // 1. Send POST request to '/products' endpoint
  const response = await productsApi.createNewProduct(newProductData);

  // 2. Assert that the Success Response code is received
  await productsApi.assertSuccessResponseCode(response);
  // 3. Assert that the  Response Body contains value 'id'
  await productsApi.assertBodyHasId(response);
});
