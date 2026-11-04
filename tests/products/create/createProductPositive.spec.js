import { test } from '../../_fixtures/fixtures';

test('Create product', async ({ productsApi, newProductData }) => {
  const response = await productsApi.createNewProduct(newProductData);

  await productsApi.assertCreatedResponseCode(response);
  await productsApi.assertBodyHasId(response);
});