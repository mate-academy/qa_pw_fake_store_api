import { test } from '../../_fixtures/fixtures';
import { SUCCESS_OK } from '../../../src/api/constants/responseCodes';

/*
Test:
1. Send GET request for product with ID 1
2. Assert that the Success Response code is received
3. Assert that the Response Body contains field 'id'
*/

test('Read product information', async ({ productsAPI }) => {
  const productId = 1;

  const response = await productsAPI.getById(productId);

  await productsAPI.assertSuccessResponseCode(response, SUCCESS_OK);
  await productsAPI.assertBodyHasId(response);
});
