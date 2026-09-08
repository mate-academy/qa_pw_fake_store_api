import { test } from '../../_fixtures/fixtures';
import { SUCCESS_CREATED } from '../../../src/api/constants/responseCodes';

/*
Test:
1. Send POST request to '/products' endpoint with body containing:
{
"title": "string",
"price": 0.1,
"description": "string",
"category": "string",
"image": "http://example.com"
}
2. Assert that the Success Response code is received
3. Assert that the  Response Body contains value 'id'
*/

test('Create product', async ({ productsAPI, newProductData }) => {
  const response = await productsAPI.create(newProductData);

  await productsAPI.assertSuccessResponseCode(response, SUCCESS_CREATED);
  await productsAPI.assertBodyHasId(response);
});
