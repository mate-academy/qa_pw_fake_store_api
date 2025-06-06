import { test } from '../../_fixtures/fixtures';

test('Read product information', async ({ productsApi }) => {
  const productId = 1;

  // 1. Send GET request for product with ID 1
  const response = await productsApi.getProduct(productId);

  // 2. Assert that the Success Response code is received
  await productsApi.assertSuccessResponseCode(response);
  // 3. Assert that the Response Body contains field 'id'
  await productsApi.assertBodyHasId(response);
});
