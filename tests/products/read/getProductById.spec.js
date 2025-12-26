import { test } from '../../_fixtures/fixtures';

test('Read product information', async ({ productApi }) => {
  const productId = 1;

  const response = await productApi.getProduct(productId);

  await productApi.assertSuccessResponseCode200(response);
  await productApi.assertBodyHasId(response);
});
