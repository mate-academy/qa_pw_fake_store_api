import { test } from '../../_fixtures/fixtures';

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

test.beforeEach(async ({ productsApi }) => {
  const createBody = {
    title: 'Product To Delete',
    price: 12.34,
    description: 'Will be deleted',
    category: 'to-delete',
    image: 'http://example.com/delete.png',
  };

  const res = await productsApi.createProduct(createBody);
  await productsApi.assertSuccessCreatedResponseCode(res);
  productId = await productsApi.parseIdFromBody(res);
});

test('Delete product', async ({ productsApi }) => {
  const res = await productsApi.deleteProduct(productId);
  await productsApi.assertSuccessResponseCode(res);
});
