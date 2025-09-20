import { test } from '../../_fixtures/fixtures';

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
  const body = {
    title: 'Test Product',
    price: 0.1,
    description: 'Small test description',
    category: 'test-category',
    image: 'http://example.com',
  };

  const res = await productsApi.createProduct(body);

  await productsApi.assertSuccessCreatedResponseCode(res);
  await productsApi.assertBodyHasId(res);
});
