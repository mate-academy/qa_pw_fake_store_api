import { test } from '../../_fixtures/fixtures';

let productId;

test.beforeEach(async ({ newProductData, productsApi }) => {
  const response = await productsApi.createNewProduct(newProductData);

  await productsApi.assertSuccessResponseCode(response);

  productId = await productsApi.parsedIdFromBody(response);
});

test('Delete product', async ({ productsApi }) => {
  const response = await productsApi.deleteProduct(productId);

  await productsApi.assertSuccessResponseCode(response);
});
