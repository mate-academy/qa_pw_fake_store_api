import { test } from '../../_fixtures/fixtures';

test('Read product information', async ({ productsApi }) => {
  const productId = 1;

  const response = await productsApi.getProduct(productId);

  await productsApi.assertSuccessResponseCode(response);
  await productsApi.assertBodyHasId(response);
});
