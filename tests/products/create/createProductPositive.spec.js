import { request } from 'playwright-core';
import { expect, test } from '../../_fixtures/fixtures';
import { SUCCESS_CODE } from '../../../src/api/constants/responceCodes';

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

test('Create product', async ({ productsApi }) => {
  const productData = {
    title: 'string',
    price: 0.1,
    description: 'string',
    category: 'string',
    image: 'http://example.com',
  };

  const response = await productsApi.createProduct({
    data: productData,
  });

  expect(response.status()).toBe(SUCCESS_CODE);

  const body = await response.json();
  expect(body.id).toBeDefined();
});
