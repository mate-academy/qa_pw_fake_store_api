import { test } from '../../_fixtures/fixtures';
import * as responseCodes from '../../../src/api/constants/responseCodes';

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

test.beforeEach(async ({ productsAPI, newProductData }) => {
  const response = await productsAPI.create(newProductData);
  await productsAPI.assertSuccessResponseCode(
    response,
    responseCodes.SUCCESS_CREATED,
  );

  productId = await productsAPI.parseIdFromBody(response);
});

test('Delete product', async ({ productsAPI }) => {
  const response = await productsAPI.delete(productId);

  await productsAPI.assertSuccessResponseCode(
    response,
    responseCodes.SUCCESS_OK,
  );
});
