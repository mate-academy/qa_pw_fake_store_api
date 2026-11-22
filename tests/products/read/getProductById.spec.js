import { test, expect } from '../../_fixtures/fixtures';

test('Read product information', async ({ productsApi }) => {
  const productId = 1;

  const response = await productsApi.getProduct(productId);

  await productsApi.assertSuccessResponseCode(response);

  const responseBody = await productsApi.parseBody(response);

  expect(responseBody.id).toEqual(productId);
});
