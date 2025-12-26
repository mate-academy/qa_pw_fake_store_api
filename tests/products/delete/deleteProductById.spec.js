import { test } from '../../_fixtures/fixtures';

let productId;

test.beforeEach(async ({ newProductData, productApi }) => {
  const response = await productApi.createNewProduct(newProductData);

  await productApi.assertSuccessResponseCode201(response);

  productId = await productApi.parseIdFromBody(response);
});

test('Delete product', async ({ productApi }) => {
  const response = await productApi.deleteProduct(productId);

  await productApi.assertSuccessResponseCode200(response);
});
