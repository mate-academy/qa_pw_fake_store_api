import { test } from '../../_fixtures/fixtures';

/*
Test:
1. Send GET request for product with ID 1
2. Assert that the Success Response code is received
3. Assert that the Response Body contains field 'id'
*/

test('Read product information', async ({productsApi}) => {
  const productId = 1;

  const response = await productsApi.getProduct(productId);

  await productsApi.assertSuccessResponseCode(response);
  await productsApi.assertBodyHasId(response);
});
