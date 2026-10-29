import { test } from '../../_fixtures/fixtures';

let productId;

test.beforeEach(async ({ newProductData, productsApi }) => {
  const response = await productsApi.createNewProduct(newProductData);

  await productsApi.assertSuccessCreatedResponseCode(response);

  productId = await productsApi.parseIdFromBody(response);
});

test('Delete Product by Id', async ({ productsApi }) => {
  const response = await productsApi.deleteProduct(productId);

  await productsApi.assertSuccessResponseCode(response);
});
