import { test } from '../../_fixtures/fixtures';

test('Create product', async ({ newProductData, productsApi }) => {
  const response = await productsApi.createNewProduct(newProductData);

  await productsApi.assertSuccessResponseCode(response);
  await productsApi.assertBodyHasId(response);
});
