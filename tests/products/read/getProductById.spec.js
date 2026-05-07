import { test } from '../../_fixtures/fixtures';

/*
Test:
1. Send GET request for product with ID 1
2. Assert that the Success Response code is received
3. Assert that the Response Body contains field 'id'
*/

test('Read product information', async ({ productAPI }) => {
  const productId = 1;

  const response = await productAPI.getProduct(productId);

  await productAPI.assertSuccessResponseCode(response);
  await productAPI.assertBodyHasId(response);
});
