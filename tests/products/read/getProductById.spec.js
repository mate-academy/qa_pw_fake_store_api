import { test } from '../../_fixtures/fixtures';

/*
Test:
1. Send GET request for product with ID 1
2. Assert that the Success Response code is received
3. Assert that the Response Body contains field 'id'
*/

test('Read product information', async ({ productApi }) => {
  const productId = 1;
  const response = await productApi.getProduct(productId);
  await productApi.assertSuccessResponseCode(response);
  await productApi.assertBodyHasId(response);
});
